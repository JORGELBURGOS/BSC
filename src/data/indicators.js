export const PERSPECTIVES_MAP = {
  // ================== FINANCIAL (13 indicadores) ==================
  "Margen Neto": { perspectiva: "Financial", polaridad: "positivo" },
  "ROI": { perspectiva: "Financial", polaridad: "positivo" },
  "ROE": { perspectiva: "Financial", polaridad: "positivo" },
  "Liquidez Corriente": { perspectiva: "Financial", polaridad: "positivo" },
  "Endeudamiento Total": { perspectiva: "Financial", polaridad: "negativo" },
  "Rotación de Inventarios": { perspectiva: "Financial", polaridad: "positivo" },
  "EBITDA": { perspectiva: "Financial", polaridad: "positivo" },
  "Flujo de Caja Operativo": { perspectiva: "Financial", polaridad: "positivo" },
  "Rentabilidad sobre Ventas": { perspectiva: "Financial", polaridad: "positivo" },
  "Días de Cobranza Promedio": { perspectiva: "Financial", polaridad: "negativo" },
  "Margen Bruto": { perspectiva: "Financial", polaridad: "positivo" },
  "Costos Fijos/Variables": { perspectiva: "Financial", polaridad: "negativo" },
  "Crecimiento de Ingresos": { perspectiva: "Financial", polaridad: "positivo" },

  // ================== CUSTOMER (18 indicadores) ==================
  "Satisfacción del Cliente": { perspectiva: "Customer", polaridad: "positivo" },
  "NPS (Net Promoter Score)": { perspectiva: "Customer", polaridad: "positivo" },
  "Tasa de Retención de Clientes": { perspectiva: "Customer", polaridad: "positivo" },
  "Tasa de Recompra": { perspectiva: "Customer", polaridad: "positivo" },
  "Market Share": { perspectiva: "Customer", polaridad: "positivo" },
  "Tiempo de Respuesta a Consultas": { perspectiva: "Customer", polaridad: "negativo" },
  "Quejas Mensuales": { perspectiva: "Customer", polaridad: "negativo" },
  "Clientes Nuevos Adquiridos": { perspectiva: "Customer", polaridad: "positivo" },
  "Ticket Promedio": { perspectiva: "Customer", polaridad: "positivo" },
  "Índice de Fidelización": { perspectiva: "Customer", polaridad: "positivo" },
  "Encuestas de Satisfacción Resueltas": { perspectiva: "Customer", polaridad: "positivo" },
  "Reclamos Resueltos en Tiempo": { perspectiva: "Customer", polaridad: "positivo" },
  "Tiempo de Espera en Atención": { perspectiva: "Customer", polaridad: "negativo" },
  "Efectividad de Soporte Técnico": { perspectiva: "Customer", polaridad: "positivo" },
  "Clientes Referidos": { perspectiva: "Customer", polaridad: "positivo" },
  "Tasa de Uso de App/Plataforma": { perspectiva: "Customer", polaridad: "positivo" },
  "Satisfacción Post-Venta": { perspectiva: "Customer", polaridad: "positivo" },
  "Tasa de Cancelación": { perspectiva: "Customer", polaridad: "negativo" },

  // ================== INTERNAL PROCESSES (22 indicadores) ==================
  "Eficiencia de Producción": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Tiempo de Ciclo de Fabricación": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Defectos por Millón de Unidades": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Tiempo de Entrega Promedio": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Órdenes Completadas Correctamente": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Utilización de Maquinaria": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Nivel de Inventario de Seguridad": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Tiempo Medio de Reparación": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Porcentaje de Desperdicios": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Entregas Tardías": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Proyectos Completados en Tiempo": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Requisitos Cumplidos en Productos": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Tiempo de Desarrollo de Nuevos Productos": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Estandarización de Procesos": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Documentación de Procesos Actualizada": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Nivel de Automatización": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Capacidad Ociosa": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Reclamos Internos Resueltos": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Efectividad de Reuniones": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Procesos Optimizados": { perspectiva: "InternalProcesses", polaridad: "positivo" },
  "Tasa de Accidentes Laborales": { perspectiva: "InternalProcesses", polaridad: "negativo" },
  "Cumplimiento de Normativas": { perspectiva: "InternalProcesses", polaridad: "positivo" },

  // ================== LEARNING & GROWTH (7 indicadores) ==================
  "Horas de Capacitación por Empleado": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Retención de Talento Clave": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Índice de Satisfacción Laboral": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Ideas Implementadas por Empleado": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Tasa de Promoción Interna": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Adopción de Nuevas Tecnologías": { perspectiva: "LearningGrowth", polaridad: "positivo" },
  "Participación en Programas de Desarrollo": { perspectiva: "LearningGrowth", polaridad: "positivo" },

  // ================== SUSTAINABILITY (4 indicadores) ==================
  "Huella de Carbono": { perspectiva: "Sustainability", polaridad: "negativo" },
  "Porcentaje de Energía Renovable": { perspectiva: "Sustainability", polaridad: "positivo" },
  "Diversidad en Puestos Gerenciales": { perspectiva: "Sustainability", polaridad: "positivo" },
  "Horas de Voluntariado Corporativo": { perspectiva: "Sustainability", polaridad: "positivo" }
};

export const MONTHS = [
  "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23",
  "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23",
  "Jan-24", "Feb-24", "Mar-24", "Apr-24", "May-24", "Jun-24",
  "Jul-24", "Aug-24", "Sep-24", "Oct-24", "Nov-24", "Dec-24",
  "Jan-25", "Feb-25", "Mar-25", "Apr-25", "May-25", "Jun-25"
];

export const generateSampleData = () => {
  const indicators = Object.keys(PERSPECTIVES_MAP);
  const data = [];
  
  indicators.forEach((indicator, i) => {
    const perspectiva = PERSPECTIVES_MAP[indicator].perspectiva;
    const polaridad = PERSPECTIVES_MAP[indicator].polaridad;
    const unidad = obtenerUnidad(indicator);
    const responsable = obtenerResponsable(perspectiva);
    const formula = obtenerFormula(indicator);
    
    // Generar meta realista
    let meta = generateRealisticTarget(indicator, unidad);
    
    // Generar datos históricos
    const historicalData = {};
    let baseValue = meta * (0.7 + Math.random() * 0.6);
    let tendencia = (Math.random() * 0.04) - 0.02;
    
    MONTHS.forEach((month, monthIndex) => {
      const estacionalidad = Math.sin(monthIndex * 0.5) * (0.05 * baseValue);
      const randomVariation = (Math.random() * 0.1) - 0.05;
      
      let actual = baseValue * (1 + randomVariation) + estacionalidad;
      let budget = baseValue * (0.95 + Math.random() * 0.1) + estacionalidad;
      
      if (unidad === "%" || unidad === "puntos") {
        actual = Math.min(Math.max(actual, 0), 100);
        budget = Math.min(Math.max(budget, 0), 100);
      } else if (unidad === "puntos (1-10)") {
        actual = Math.min(Math.max(actual, 1), 10);
        budget = Math.min(Math.max(budget, 1), 10);
      } else if (unidad === "ratio" || unidad === "veces/año") {
        actual = Math.max(actual, 0);
        budget = Math.max(budget, 0);
      }
      
      historicalData[`Actual ${month}`] = Math.round(actual * 100) / 100;
      historicalData[`Budget ${month}`] = Math.round(budget * 100) / 100;
      
      baseValue *= (1 + tendencia);
    });
    
    data.push({
      id: i + 1,
      indicador: indicator,
      perspectiva,
      formula,
      unidad,
      responsable,
      meta,
      polaridad,
      ...historicalData
    });
  });
  
  return data;
};

const generateRealisticTarget = (indicator, unidad) => {
  let meta;
  
  switch(indicator) {
    // Financieros
    case "ROI":
    case "ROE":
      meta = 12 + Math.random() * 8; // 12-20%
      break;
    case "Margen Neto":
      meta = 8 + Math.random() * 7; // 8-15%
      break;
    case "Liquidez Corriente":
      meta = 1.5 + Math.random() * 1; // 1.5-2.5
      break;
    case "Endeudamiento Total":
      meta = 40 + Math.random() * 20; // 40-60%
      break;
    case "Rotación de Inventarios":
      meta = 6 + Math.random() * 6; // 6-12 veces/año
      break;
    case "EBITDA":
      meta = 500000 + Math.random() * 1000000; // 500k-1.5M USD
      break;
    case "Flujo de Caja Operativo":
      meta = 300000 + Math.random() * 700000; // 300k-1M USD
      break;
    case "Rentabilidad sobre Ventas":
      meta = 10 + Math.random() * 10; // 10-20%
      break;
    case "Días de Cobranza Promedio":
      meta = 30 + Math.random() * 30; // 30-60 días
      break;
    case "Margen Bruto":
      meta = 30 + Math.random() * 20; // 30-50%
      break;
    case "Costos Fijos/Variables":
      meta = 0.8 + Math.random() * 0.4; // 0.8-1.2
      break;
    case "Crecimiento de Ingresos":
      meta = 5 + Math.random() * 10; // 5-15%
      break;
      
    // Clientes
    case "Satisfacción del Cliente":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "NPS (Net Promoter Score)":
      meta = 30 + Math.random() * 40; // 30-70 puntos
      break;
    case "Tasa de Retención de Clientes":
      meta = 75 + Math.random() * 20; // 75-95%
      break;
    case "Tasa de Recompra":
      meta = 60 + Math.random() * 30; // 60-90%
      break;
    case "Market Share":
      meta = 15 + Math.random() * 15; // 15-30%
      break;
    case "Tiempo de Respuesta a Consultas":
      meta = 15 + Math.random() * 15; // 15-30 minutos
      break;
    case "Quejas Mensuales":
      meta = 10 + Math.random() * 20; // 10-30 unidades
      break;
    case "Clientes Nuevos Adquiridos":
      meta = 50 + Math.random() * 150; // 50-200 unidades
      break;
    case "Ticket Promedio":
      meta = 50 + Math.random() * 150; // 50-200 USD
      break;
    case "Índice de Fidelización":
      meta = 70 + Math.random() * 25; // 70-95%
      break;
    case "Encuestas de Satisfacción Resueltas":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "Reclamos Resueltos en Tiempo":
      meta = 90 + Math.random() * 9; // 90-99%
      break;
    case "Tiempo de Espera en Atención":
      meta = 5 + Math.random() * 10; // 5-15 minutos
      break;
    case "Efectividad de Soporte Técnico":
      meta = 75 + Math.random() * 20; // 75-95%
      break;
    case "Clientes Referidos":
      meta = 20 + Math.random() * 30; // 20-50 unidades
      break;
    case "Tasa de Uso de App/Plataforma":
      meta = 60 + Math.random() * 35; // 60-95%
      break;
    case "Satisfacción Post-Venta":
      meta = 8 + Math.random() * 2; // 8-10 puntos
      break;
    case "Tasa de Cancelación":
      meta = 5 + Math.random() * 10; // 5-15%
      break;
      
    // Procesos Internos
    case "Eficiencia de Producción":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "Tiempo de Ciclo de Fabricación":
      meta = 5 + Math.random() * 10; // 5-15 días
      break;
    case "Defectos por Millón de Unidades":
      meta = 1000 + Math.random() * 4000; // 1000-5000 DPMO
      break;
    case "Tiempo de Entrega Promedio":
      meta = 3 + Math.random() * 7; // 3-10 días
      break;
    case "Órdenes Completadas Correctamente":
      meta = 95 + Math.random() * 4; // 95-99%
      break;
    case "Utilización de Maquinaria":
      meta = 70 + Math.random() * 25; // 70-95%
      break;
    case "Nivel de Inventario de Seguridad":
      meta = 110 + Math.random() * 20; // 110-130%
      break;
    case "Tiempo Medio de Reparación":
      meta = 2 + Math.random() * 3; // 2-5 días
      break;
    case "Porcentaje de Desperdicios":
      meta = 5 + Math.random() * 10; // 5-15%
      break;
    case "Entregas Tardías":
      meta = 5 + Math.random() * 10; // 5-15%
      break;
    case "Proyectos Completados en Tiempo":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "Requisitos Cumplidos en Productos":
      meta = 90 + Math.random() * 9; // 90-99%
      break;
    case "Tiempo de Desarrollo de Nuevos Productos":
      meta = 90 + Math.random() * 90; // 90-180 días
      break;
    case "Estandarización de Procesos":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "Documentación de Procesos Actualizada":
      meta = 85 + Math.random() * 14; // 85-99%
      break;
    case "Nivel de Automatización":
      meta = 50 + Math.random() * 40; // 50-90%
      break;
    case "Capacidad Ociosa":
      meta = 10 + Math.random() * 15; // 10-25%
      break;
    case "Reclamos Internos Resueltos":
      meta = 90 + Math.random() * 9; // 90-99%
      break;
    case "Efectividad de Reuniones":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
    case "Procesos Optimizados":
      meta = 30 + Math.random() * 50; // 30-80%
      break;
    case "Tasa de Accidentes Laborales":
      meta = 1 + Math.random() * 4; // 1-5 accidentes/200k horas
      break;
    case "Cumplimiento de Normativas":
      meta = 95 + Math.random() * 4; // 95-99%
      break;
      
    // Aprendizaje y Crecimiento
    case "Horas de Capacitación por Empleado":
      meta = 20 + Math.random() * 30; // 20-50 horas/empleado
      break;
    case "Retención de Talento Clave":
      meta = 85 + Math.random() * 14; // 85-99%
      break;
    case "Índice de Satisfacción Laboral":
      meta = 7 + Math.random() * 3; // 7-10 puntos
      break;
    case "Ideas Implementadas por Empleado":
      meta = 1 + Math.random() * 2; // 1-3 ideas/empleado
      break;
    case "Tasa de Promoción Interna":
      meta = 60 + Math.random() * 30; // 60-90%
      break;
    case "Adopción de Nuevas Tecnologías":
      meta = 70 + Math.random() * 25; // 70-95%
      break;
    case "Participación en Programas de Desarrollo":
      meta = 80 + Math.random() * 15; // 80-95%
      break;
      
    // Sostenibilidad
    case "Huella de Carbono":
      meta = 1000 + Math.random() * 4000; // 1000-5000 ton CO2
      break;
    case "Porcentaje de Energía Renovable":
      meta = 30 + Math.random() * 60; // 30-90%
      break;
    case "Diversidad en Puestos Gerenciales":
      meta = 40 + Math.random() * 50; // 40-90%
      break;
    case "Horas de Voluntariado Corporativo":
      meta = 500 + Math.random() * 1500; // 500-2000 horas
      break;
      
    default:
      meta = 70 + Math.random() * 30; // Valor genérico 70-100
  }
  
  return Math.round(meta * 100) / 100;
};

const obtenerResponsable = (perspectiva) => {
  const responsables = {
    "Financial": "Finanzas",
    "Customer": "Ventas/Marketing",
    "InternalProcesses": "Operaciones",
    "LearningGrowth": "RRHH",
    "Sustainability": "RSE"
  };
  return responsables[perspectiva] || "N/A";
};