import React, { useState, useEffect } from 'react';
import { PERSPECTIVES_MAP, MONTHS, generateSampleData } from './data/indicators';
import { obtenerFormula } from './utils/formulas';
import { obtenerUnidad } from './utils/units';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [periodo, setPeriodo] = useState('Jun-25');
  const [comparacion, setComparacion] = useState('Año Anterior');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [collapsedPerspectives, setCollapsedPerspectives] = useState({
    financial: false,
    customer: false,
    internalProcesses: false,
    learningGrowth: false,
    sustainability: false
  });

  useEffect(() => {
    // Simular carga de datos
    setLoading(true);
    try {
      const sampleData = generateSampleData();
      setData(sampleData);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar los datos: " + err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      processData();
    }
  }, [data, periodo, comparacion]);

  const processData = () => {
    try {
      const results = [];
      let periodoComparacion = "";

      // Determinar período de comparación
      if (comparacion === "Año Anterior") {
        const [mes, anio] = periodo.split('-');
        periodoComparacion = `${mes}-${parseInt(anio)-1}`;
      } 
      else if (comparacion === "Trimestre Anterior") {
        const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const [mesActual, anioActual] = periodo.split('-');
        const mesIndex = meses.indexOf(mesActual);
        let mesComparacion = meses[(mesIndex - 3 + 12) % 12];
        let anioComparacion = anioActual;
        if (mesIndex - 3 < 0) {
          anioComparacion = parseInt(anioActual) - 1;
        }
        periodoComparacion = `${mesComparacion}-${anioComparacion}`;
      }
      else if (comparacion === "Mes Anterior") {
        const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const [mesActual, anioActual] = periodo.split('-');
        const mesIndex = meses.indexOf(mesActual);
        let mesComparacion = meses[(mesIndex - 1 + 12) % 12];
        let anioComparacion = anioActual;
        if (mesIndex - 1 < 0) {
          anioComparacion = parseInt(anioActual) - 1;
        }
        periodoComparacion = `${mesComparacion}-${anioComparacion}`;
      }
      else if (comparacion === "Budget") {
        periodoComparacion = `Budget ${periodo}`;
      }

      data.forEach(item => {
        const actualKey = `Actual ${periodo}`;
        const compareKey = comparacion === "Budget" ? `Budget ${periodo}` : `Actual ${periodoComparacion}`;
        
        const actualValue = item[actualKey];
        const compareValue = item[compareKey];
        const metaValue = item.meta;
        const polaridad = item.polaridad;
        
        // Calcular diferencia absoluta
        const diferenciaAbsoluta = actualValue - compareValue;
        
        // Determinar si es favorable según la polaridad
        let esFavorable;
        if (polaridad === "negativo") {
          esFavorable = actualValue < compareValue; // Menor es mejor
        } else {
          esFavorable = actualValue > compareValue; // Mayor es mejor
        }
        
        // Calcular diferencia para mostrar (siempre valor absoluto)
        const diferenciaMostrar = Math.abs(diferenciaAbsoluta);
        
        // Calcular cumplimiento dinámico según comparación seleccionada
        let cumplimiento = null;
        if (compareValue !== 0 && !isNaN(compareValue)) {
          if (polaridad === "negativo") {
            // Para indicadores "menor es mejor"
            if (actualValue <= compareValue) {
              // Mejor que el valor de comparación
              cumplimiento = 100 + ((compareValue - actualValue) / compareValue) * 100;
            } else {
              // Peor que el valor de comparación
              cumplimiento = 100 - ((actualValue - compareValue) / compareValue) * 100;
            }
          } else {
            // Para indicadores "mayor es mejor"
            if (actualValue >= compareValue) {
              // Mejor que el valor de comparación
              cumplimiento = 100 + ((actualValue - compareValue) / compareValue) * 100;
            } else {
              // Peor que el valor de comparación
              cumplimiento = (actualValue / compareValue) * 100;
            }
          }
          
          // Limitar el cumplimiento a un rango razonable (0-200%)
          cumplimiento = Math.max(0, Math.min(cumplimiento, 200));
        }
        
        results.push({
          id: item.id,
          indicador: item.indicador,
          perspectiva: item.perspectiva,
          formula: item.formula,
          unidad: item.unidad,
          responsable: item.responsable,
          meta: metaValue,
          actual: actualValue,
          comparacion: compareValue,
          diferencia: diferenciaMostrar,
          esFavorable: esFavorable,
          cumplimiento: cumplimiento !== null ? Number(cumplimiento.toFixed(2)) : null,
          polaridad: polaridad
        });
      });

      setFilteredData(results);
    } catch (err) {
      setError("Error al procesar los datos: " + err.message);
    }
  };

  const togglePerspective = (perspective) => {
    setCollapsedPerspectives(prev => ({
      ...prev,
      [perspective]: !prev[perspective]
    }));
  };

  const scrollToPerspective = (perspective) => {
    const element = document.getElementById(`${perspective}Container`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Expandir la perspectiva si está colapsada
      if (collapsedPerspectives[perspective]) {
        togglePerspective(perspective);
      }
    }
  };

  const showMetricModal = (metric) => {
    setModalData(metric);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const formatNumber = (value, unidad) => {
    if (value === null || value === undefined) return "N/A";
    
    // Convertir a número si es string
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    
    if (isNaN(numValue)) return value;
    
    // Formatear según la unidad
    if (unidad === "USD") {
      return `$${numValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    } 
    else if (unidad === "%" || unidad === "puntos" || unidad === "ratio" || 
             unidad === "veces/año" || unidad === "DPMO" || 
             unidad === "accidentes/200k horas" || unidad === "horas/empleado" || 
             unidad === "ideas/empleado") {
      return `${numValue.toFixed(2).replace(".", ",")}${unidad === "%" ? "%" : ""}`;
    }
    else if (unidad === "puntos (1-10)") {
      return `${numValue.toFixed(1).replace(".", ",")}`;
    }
    else if (unidad === "ton CO2" || unidad === "horas") {
      return `${numValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${unidad}`;
    }
    else if (unidad === "días" || unidad === "minutos") {
      return `${numValue.toFixed(0)} ${unidad}`;
    }
    else {
      // Para unidades genéricas
      if (Number.isInteger(numValue)) {
        return numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        return numValue.toFixed(2).replace(".", ",");
      }
    }
  };

  const renderPerspective = (perspectiveKey, perspectiveName, icon) => {
    const perspectiveData = filteredData.filter(item => item.perspectiva === perspectiveKey);
    
    if (perspectiveData.length === 0) return null;
    
    // Calcular estadísticas de resumen
    const total = perspectiveData.length;
    const favorable = perspectiveData.filter(item => item.esFavorable).length;
    const percentage = Math.round((favorable / total) * 100);
    
    return (
      <div 
        id={`${perspectiveKey}Container`} 
        className={`perspective-container ${collapsedPerspectives[perspectiveKey] ? 'collapsed' : ''}`}
      >
        <div 
          className={`perspective-header ${perspectiveKey.toLowerCase()}`} 
          onClick={() => togglePerspective(perspectiveKey)}
        >
          <h2><i className={`fas ${icon}`}></i> {perspectiveName}</h2>
          <span className="count">{total} KPI</span>
          <i className={`fas fa-chevron-down toggle-icon ${collapsedPerspectives[perspectiveKey] ? 'rotated' : ''}`}></i>
        </div>
        
        {!collapsedPerspectives[perspectiveKey] && (
          <div className="metrics-container">
            <div className="metric-header">
              <div>Indicador</div>
              <div>Actual</div>
              <div>Comparación</div>
              <div>Diferencia</div>
              <div>Cumplimiento</div>
            </div>
            
            {perspectiveData
              .sort((a, b) => {
                if (a.esFavorable !== b.esFavorable) {
                  return b.esFavorable - a.esFavorable;
                }
                return parseFloat(b.diferencia) - parseFloat(a.diferencia);
              })
              .map((item, index) => {
                const diferencia = parseFloat(item.diferencia);
                const cumplimiento = item.cumplimiento ? parseFloat(item.cumplimiento) : null;
                
                // Determinar icono y clase según favorabilidad
                const trendIcon = item.esFavorable ? 
                  <i className="fas fa-arrow-up icon-up"></i> : 
                  <i className="fas fa-arrow-down icon-down"></i>;
                const trendClass = item.esFavorable ? "positive" : "negative";
                
                // Barra de progreso para cumplimiento
                let progressBar = null;
                let cumplimientoText = 'N/A';
                let progressWidth = 0;
                let progressColor = "var(--neutral)";
                
                if (cumplimiento !== null) {
                  progressWidth = Math.min(Math.max(cumplimiento, 0), 100);
                  cumplimientoText = `${cumplimiento.toFixed(0)}%`;
                  
                  if (cumplimiento >= 90) {
                    progressColor = "var(--positive)";
                  } else if (cumplimiento >= 70) {
                    progressColor = "var(--neutral)";
                  } else {
                    progressColor = "var(--negative)";
                  }
                  
                  progressBar = (
                    <div className="progress-container">
                      <div className="progress-text">{cumplimientoText}</div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${progressWidth}%`, background: progressColor }}
                        ></div>
                      </div>
                    </div>
                  );
                } else {
                  progressBar = <div className="progress-text">N/A</div>;
                }
                
                // Formatear valores según su unidad
                const actualFormatted = formatNumber(item.actual, item.unidad);
                const comparacionFormatted = formatNumber(item.comparacion, item.unidad);
                const diferenciaFormatted = formatNumber(diferencia, item.unidad);
                
                // Mostrar polaridad del indicador
                const polaridadText = item.polaridad === "negativo" ? 
                  <><i className="fas fa-arrow-down"></i> Menor valor es mejor</> : 
                  <><i className="fas fa-arrow-up"></i> Mayor valor es mejor</>;
                
                // Icono según perspectiva
                let perspectiveIcon = '';
                switch(item.perspectiva) {
                  case "Financial": perspectiveIcon = 'fa-chart-line'; break;
                  case "Customer": perspectiveIcon = 'fa-users'; break;
                  case "InternalProcesses": perspectiveIcon = 'fa-cogs'; break;
                  case "LearningGrowth": perspectiveIcon = 'fa-graduation-cap'; break;
                  case "Sustainability": perspectiveIcon = 'fa-leaf'; break;
                  default: perspectiveIcon = 'fa-chart-pie';
                }
                
                return (
                  <div 
                    key={item.id} 
                    className="metric-card" 
                    onClick={() => showMetricModal(item)}
                  >
                    <div className="metric-name">
                      <strong>{item.indicador}</strong>
                      <div className="metric-responsable">
                        <i className={`fas ${perspectiveIcon}`}></i> {item.responsable} | {item.unidad}
                      </div>
                      <div className="formula-info">{item.formula.replace(/^'=/, "")}</div>
                      <div className="polarity-info">{polaridadText}</div>
                    </div>
                    <div className="metric-value">{actualFormatted}</div>
                    <div className="metric-value">{comparacionFormatted}</div>
                    <div className={`metric-comparison ${trendClass}`}>
                      {trendIcon} {diferenciaFormatted}
                    </div>
                    <div className="metric-meta">
                      {progressBar}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  };

  const renderSummaryCards = () => {
    if (filteredData.length === 0) return null;
    
    const perspectives = [
      { key: "Financial", name: "Financiero", icon: "fa-chart-line" },
      { key: "Customer", name: "Clientes", icon: "fa-users" },
      { key: "InternalProcesses", name: "Procesos", icon: "fa-cogs" },
      { key: "LearningGrowth", name: "Aprendizaje", icon: "fa-graduation-cap" },
      { key: "Sustainability", name: "Sostenibilidad", icon: "fa-leaf" }
    ];
    
    return perspectives.map(perspective => {
      const perspectiveData = filteredData.filter(item => item.perspectiva === perspective.key);
      const total = perspectiveData.length;
      const favorable = perspectiveData.filter(item => item.esFavorable).length;
      const percentage = total > 0 ? Math.round((favorable / total) * 100) : 0;
      
      let percentageClass = "";
      if (percentage >= 70) {
        percentageClass = "positive";
      } else if (percentage >= 40) {
        percentageClass = "neutral";
      } else {
        percentageClass = "negative";
      }
      
      return (
        <div 
          key={perspective.key}
          className={`summary-card ${perspective.key.toLowerCase()}-bg`} 
          onClick={() => scrollToPerspective(perspective.key.toLowerCase())}
        >
          <h3><i className={`fas ${perspective.icon}`}></i> {perspective.name}</h3>
          <div className={`summary-value ${percentageClass}`}>{percentage}%</div>
          <p>Indicadores favorables</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      {/* Efecto de partículas */}
      <div id="particles-js"></div>
      
      {/* Header */}
      <div className="header">
        <h1><i className="fas fa-chart-network"></i> Balanced Scorecard 360°</h1>
        <button onClick={() => window.close()}><i className="fas fa-times"></i> Cerrar</button>
      </div>
      
      {/* Filtros */}
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="periodo"><i className="fas fa-calendar-week"></i> Período Principal</label>
          <select 
            id="periodo" 
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            {MONTHS.map(month => {
              const [mes, anio] = month.split('-');
              const meses = {
                "Jan": "Enero", "Feb": "Febrero", "Mar": "Marzo", "Apr": "Abril",
                "May": "Mayo", "Jun": "Junio", "Jul": "Julio", "Aug": "Agosto",
                "Sep": "Septiembre", "Oct": "Octubre", "Nov": "Noviembre", "Dec": "Diciembre"
              };
              return (
                <option key={month} value={month}>
                  {meses[mes]} 20{anio}
                </option>
              );
            })}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="comparacion"><i className="fas fa-not-equal"></i> Comparar con</label>
          <select 
            id="comparacion" 
            value={comparacion}
            onChange={(e) => setComparacion(e.target.value)}
          >
            <option value="Año Anterior">Año Anterior</option>
            <option value="Trimestre Anterior">Trimestre Anterior</option>
            <option value="Mes Anterior">Mes Anterior</option>
            <option value="Budget">Presupuesto</option>
          </select>
        </div>
        
        <button onClick={processData}><i className="fas fa-sync-alt"></i> Actualizar Dashboard</button>
      </div>
      
      {/* Info del período */}
      <div id="periodDisplay" className="period-info" style={{ display: filteredData.length > 0 ? 'flex' : 'none' }}>
        <i className="fas fa-info-circle"></i> Mostrando datos de <strong>{periodo}</strong> comparados con <strong>
          {comparacion === "Año Anterior" ? 
            `${periodo.split('-')[0]}-${parseInt(periodo.split('-')[1])-1}` :
          comparacion === "Trimestre Anterior" ? 
            (() => {
              const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              const [mesActual, anioActual] = periodo.split('-');
              const mesIndex = meses.indexOf(mesActual);
              let mesComparacion = meses[(mesIndex - 3 + 12) % 12];
              let anioComparacion = anioActual;
              if (mesIndex - 3 < 0) {
                anioComparacion = parseInt(anioActual) - 1;
              }
              return `${mesComparacion}-${anioComparacion}`;
            })() :
          comparacion === "Mes Anterior" ? 
            (() => {
              const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              const [mesActual, anioActual] = periodo.split('-');
              const mesIndex = meses.indexOf(mesActual);
              let mesComparacion = meses[(mesIndex - 1 + 12) % 12];
              let anioComparacion = anioActual;
              if (mesIndex - 1 < 0) {
                anioComparacion = parseInt(anioActual) - 1;
              }
              return `${mesComparacion}-${anioComparacion}`;
            })() :
          `Budget ${periodo}`}
        </strong>
      </div>
      
      {/* Mensajes de error */}
      {error && (
        <div className="error">
          <i className="fas fa-exclamation-triangle"></i>
          <div className="error-content">
            <strong>Error</strong>
            <div>{error}</div>
          </div>
        </div>
      )}
      
      {/* Contenedor principal */}
      <div className="dashboard-container">
        {/* Resumen Global */}
        <div className="summary-cards">
          {renderSummaryCards()}
        </div>
        
        {/* Contenido principal */}
        <div className="main-content">
          {/* Perspectivas */}
          {renderPerspective("Financial", "Perspectiva Financiera", "fa-chart-line")}
          {renderPerspective("Customer", "Perspectiva del Cliente", "fa-users")}
          {renderPerspective("InternalProcesses", "Procesos Internos", "fa-cogs")}
          {renderPerspective("LearningGrowth", "Aprendizaje y Crecimiento", "fa-graduation-cap")}
          {renderPerspective("Sustainability", "Sostenibilidad", "fa-leaf")}
        </div>
      </div>
      
      {/* Modal de detalles */}
      {modalData && (
        <div className="modal-overlay active">
          <div className="modal-container">
            <div className="modal-header">
              <h2 id="modalTitle">{modalData.indicador}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-metric-info">
                <div className="modal-metric-value">
                  <div className="label">Valor Actual</div>
                  <div className="value">{formatNumber(modalData.actual, modalData.unidad)}</div>
                  <div className="modal-meta">
                    <span>Meta:</span>
                    <span className="meta-value">{formatNumber(modalData.meta, modalData.unidad)}</span>
                  </div>
                </div>
                <div className="modal-metric-value">
                  <div className="label">Comparación</div>
                  <div className="value">{formatNumber(modalData.comparacion, modalData.unidad)}</div>
                  <div className="modal-meta">
                    <span>Diferencia:</span>
                    <span className="meta-value">{formatNumber(modalData.diferencia, modalData.unidad)}</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-chart" id="modalChart">
                {/* Aquí iría el gráfico con Chart.js */}
                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                  Gráfico de evolución temporal del indicador
                </p>
              </div>
              
              <div className="modal-details">
                <div className="modal-detail-group">
                  <h3><i className="fas fa-info-circle"></i> Información General</h3>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Perspectiva</div>
                    <div className="modal-detail-value">
                      {{
                        "Financial": "Financiero",
                        "Customer": "Clientes",
                        "InternalProcesses": "Procesos Internos",
                        "LearningGrowth": "Aprendizaje y Crecimiento",
                        "Sustainability": "Sostenibilidad"
                      }[modalData.perspectiva] || modalData.perspectiva}
                    </div>
                  </div>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Responsable</div>
                    <div className="modal-detail-value">{modalData.responsable}</div>
                  </div>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Unidad de Medida</div>
                    <div className="modal-detail-value">{modalData.unidad}</div>
                  </div>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Polaridad</div>
                    <div className="modal-detail-value">
                      {modalData.polaridad === "negativo" ? "Menor es mejor" : "Mayor es mejor"}
                    </div>
                  </div>
                </div>
                
                <div className="modal-detail-group">
                  <h3><i className="fas fa-calculator"></i> Fórmula de Cálculo</h3>
                  <div className="modal-detail-item">
                    <div className="modal-detail-value">{modalData.formula.replace(/^'=/, "")}</div>
                  </div>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Estado Actual</div>
                    <div className="modal-detail-value">
                      {modalData.esFavorable ? (
                        <span className="positive">Favorable</span>
                      ) : (
                        <span className="negative">Desfavorable</span>
                      )}
                    </div>
                  </div>
                  <div className="modal-detail-item">
                    <div className="modal-detail-label">Cumplimiento</div>
                    <div className="modal-detail-value">
                      {modalData.cumplimiento !== null ? `${modalData.cumplimiento.toFixed(2)}%` : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;