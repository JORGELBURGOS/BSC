import { useState, useEffect } from 'react';
import { FaChartNetwork, FaSyncAlt, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { generarDatosSimulados } from '@/data/indicators';
import { formatNumber, getPerspectiveName } from '@/utils/helpers';
import Filters from './Filters';
import SummaryCard from './SummaryCard';
import PerspectiveSection from './PerspectiveSection';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [periodInfo, setPeriodInfo] = useState(null);
  const [summaryStats, setSummaryStats] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [collapsedPerspectives, setCollapsedPerspectives] = useState({
    financial: false,
    customer: false,
    internalProcesses: false,
    learningGrowth: false,
    sustainability: false
  });

  // Inicializar partículas
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00b4d8" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00b4d8", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        }
      });
    }
  }, []);

  // Cargar datos iniciales
  useEffect(() => {
    loadData();
  }, []);

  const loadData = (periodo = 'Jun-25', comparacion = 'Año Anterior') => {
    setLoading(true);
    setError(null);
    
    try {
      const result = generarDatosSimulados(periodo, comparacion);
      
      // Agrupar por perspectiva y calcular resúmenes
      const groupedData = {};
      const stats = {
        "Financial": { total: 0, favorable: 0 },
        "Customer": { total: 0, favorable: 0 },
        "InternalProcesses": { total: 0, favorable: 0 },
        "LearningGrowth": { total: 0, favorable: 0 },
        "Sustainability": { total: 0, favorable: 0 }
      };
      
      result.data.forEach(item => {
        if (!groupedData[item.perspectiva]) {
          groupedData[item.perspectiva] = [];
        }
        groupedData[item.perspectiva].push(item);
        
        // Estadísticas para resumen
        if (stats[item.perspectiva]) {
          stats[item.perspectiva].total++;
          if (item.esFavorable) {
            stats[item.perspectiva].favorable++;
          }
        }
      });
      
      setData(groupedData);
      setSummaryStats(stats);
      setPeriodInfo({
        currentPeriod: result.periodoActual,
        comparePeriod: result.periodoComparacion
      });
    } catch (err) {
      setError(`Error al cargar los datos: ${err.message}`);
    } finally {
      setLoading(false);
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

  const handleFilterChange = (periodo, comparacion) => {
    loadData(periodo, comparacion);
  };

  return (
    <div>
      {/* Efecto de partículas */}
      <div id="particles-js"></div>
      
      {/* Header */}
      <div className="header">
        <h1><FaChartNetwork /> Balanced Scorecard 360°</h1>
        <button><FaTimes /> Cerrar</button>
      </div>
      
      {/* Filtros */}
      <Filters onFilterChange={handleFilterChange} />
      
      {/* Info del período */}
      {periodInfo && (
        <div className="period-info animate-fade">
          <FaInfoCircle /> Mostrando datos de <strong>{periodInfo.currentPeriod}</strong> comparados con <strong>{periodInfo.comparePeriod}</strong>
        </div>
      )}
      
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
        {summaryStats && (
          <div className="summary-cards">
            <SummaryCard 
              title="Financiero" 
              icon="chart-line" 
              value={summaryStats.Financial} 
              onClick={() => scrollToPerspective('financial')} 
              className="financial-bg" 
            />
            <SummaryCard 
              title="Clientes" 
              icon="users" 
              value={summaryStats.Customer} 
              onClick={() => scrollToPerspective('customer')} 
              className="customer-bg" 
            />
            <SummaryCard 
              title="Procesos" 
              icon="cogs" 
              value={summaryStats.InternalProcesses} 
              onClick={() => scrollToPerspective('internalProcesses')} 
              className="processes-bg" 
            />
            <SummaryCard 
              title="Aprendizaje" 
              icon="graduation-cap" 
              value={summaryStats.LearningGrowth} 
              onClick={() => scrollToPerspective('learningGrowth')} 
              className="learning-bg" 
            />
            <SummaryCard 
              title="Sostenibilidad" 
              icon="leaf" 
              value={summaryStats.Sustainability} 
              onClick={() => scrollToPerspective('sustainability')} 
              className="sustainability-bg" 
            />
          </div>
        )}
        
        {/* Contenido principal */}
        <div className="main-content">
          {/* Perspectivas */}
          {data && !loading ? (
            <>
              <PerspectiveSection 
                id="financial"
                title="Perspectiva Financiera"
                icon="chart-line"
                metrics={data.Financial || []}
                collapsed={collapsedPerspectives.financial}
                onToggle={() => togglePerspective('financial')}
                onMetricClick={setSelectedMetric}
                className="financial"
              />
              
              <PerspectiveSection 
                id="customer"
                title="Perspectiva del Cliente"
                icon="users"
                metrics={data.Customer || []}
                collapsed={collapsedPerspectives.customer}
                onToggle={() => togglePerspective('customer')}
                onMetricClick={setSelectedMetric}
                className="customer"
              />
              
              <PerspectiveSection 
                id="internalProcesses"
                title="Procesos Internos"
                icon="cogs"
                metrics={data.InternalProcesses || []}
                collapsed={collapsedPerspectives.internalProcesses}
                onToggle={() => togglePerspective('internalProcesses')}
                onMetricClick={setSelectedMetric}
                className="processes"
              />
              
              <PerspectiveSection 
                id="learningGrowth"
                title="Aprendizaje y Crecimiento"
                icon="graduation-cap"
                metrics={data.LearningGrowth || []}
                collapsed={collapsedPerspectives.learningGrowth}
                onToggle={() => togglePerspective('learningGrowth')}
                onMetricClick={setSelectedMetric}
                className="learning"
              />
              
              <PerspectiveSection 
                id="sustainability"
                title="Sostenibilidad"
                icon="leaf"
                metrics={data.Sustainability || []}
                collapsed={collapsedPerspectives.sustainability}
                onToggle={() => togglePerspective('sustainability')}
                onMetricClick={setSelectedMetric}
                className="sustainability"
              />
            </>
          ) : (
            <div className="loading">
              <i className="fas fa-spinner"></i> Cargando datos del dashboard...
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de detalles */}
      {selectedMetric && (
        <MetricModal 
          metric={selectedMetric} 
          onClose={() => setSelectedMetric(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;