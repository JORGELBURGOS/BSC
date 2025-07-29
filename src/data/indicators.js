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

export const obtenerFormula = (indicador) => {
  const formulas = {
    // Financieras
    "Margen Neto": "'=Utilidad Neta / Ventas Totales × 100",
    "ROI": "'=(Ganancia - Inversión) / Inversión × 100",
    "ROE": "'=Utilidad Neta / Patrimonio Neto × 100",
    "Liquidez Corriente": "'=Activo Corriente / Pasivo Corriente",
    "Endeudamiento Total": "'=Pasivo Total / Activo Total × 100",
    "Rotación de Inventarios": "'=Costo de Ventas / Inventario Promedio",
    "EBITDA": "'=Utilidad Operativa + Depreciación + Amortización",
    "Flujo de Caja Operativo": "'=Flujo de Caja de Operaciones",
    "Rentabilidad sobre Ventas": "'=Utilidad Neta / Ventas × 100",
    "Días de Cobranza Promedio": "'=(Cuentas por Cobrar / Ventas) × 365",
    "Margen Bruto": "'=(Ventas - Costo de Ventas) / Ventas × 100",
    "Costos Fijos/Variables": "'=Costos Fijos / Costos Variables",
    "Crecimiento de Ingresos": "'=(Ingresos Actuales - Ingresos Anteriores) / Ingresos Anteriores × 100",
    
    // Clientes
    "Satisfacción del Cliente": "'=(N° clientes satisfechos / Total encuestados) × 100",
    "NPS (Net Promoter Score)": "'=% Promotores - % Detractores",
    "Tasa de Retención de Clientes": "'=(Clientes finales - Clientes nuevos) / Clientes iniciales × 100",
    "Tasa de Recompra": "'=Clientes que recompran / Total clientes × 100",
    "Market Share": "'=Ventas de la empresa / Ventas totales del mercado × 100",
    "Tiempo de Respuesta a Consultas": "'=Suma de tiempos de respuesta / N° consultas",
    "Quejas Mensuales": "'=N° de quejas recibidas en el mes",
    "Clientes Nuevos Adquiridos": "'=N° nuevos clientes en período",
    "Ticket Promedio": "'=Ventas totales / N° transacciones",
    "Índice de Fidelización": "'=(Clientes recurrentes / Total clientes) × 100",
    "Encuestas de Satisfacción Resueltas": "'=N° encuestas completadas / N° encuestas enviadas × 100",
    "Reclamos Resueltos en Tiempo": "'=Reclamos resueltos a tiempo / Total reclamos × 100",
    "Tiempo de Espera en Atención": "'=Tiempo total de espera / N° atenciones",
    "Efectividad de Soporte Técnico": "'=Casos resueltos en primera interacción / Total casos × 100",
    "Clientes Referidos": "'=N° clientes referidos por otros clientes",
    "Tasa de Uso de App/Plataforma": "'=Usuarios activos / Total usuarios × 100",
    "Satisfacción Post-Venta": "'=Encuestas de satisfacción post-venta (escala 1-10)",
    "Tasa de Cancelación": "'=Clientes perdidos / Total clientes × 100",
    
    // Procesos Internos
    "Eficiencia de Producción": "'=Unidades producidas / Horas trabajadas × 100",
    "Tiempo de Ciclo de Fabricación": "'=Tiempo total desde inicio a fin de producción",
    "Defectos por Millón de Unidades": "'=(N° defectos / Unidades producidas) × 1,000,000",
    "Tiempo de Entrega Promedio": "'=Suma tiempos de entrega / N° entregas",
    "Órdenes Completadas Correctamente": "'=Órdenes sin errores / Total órdenes × 100",
    "Utilización de Maquinaria": "'=Horas operativas / Horas disponibles × 100",
    "Nivel de Inventario de Seguridad": "'=Inventario actual / Inventario mínimo requerido × 100",
    "Tiempo Medio de Reparación": "'=Suma tiempos de reparación / N° reparaciones",
    "Porcentaje de Desperdicios": "'=Material desperdiciado / Material utilizado × 100",
    "Entregas Tardías": "'=Entregas fuera de plazo / Total entregas × 100",
    "Proyectos Completados en Tiempo": "'=Proyectos a tiempo / Total proyectos × 100",
    "Requisitos Cumplidos en Productos": "'=Requisitos cumplidos / Total requisitos × 100",
    "Tiempo de Desarrollo de Nuevos Productos": "'=Tiempo desde concepción a lanzamiento",
    "Estandarización de Procesos": "'=Procesos estandarizados / Total procesos × 100",
    "Documentación de Procesos Actualizada": "'=Procesos documentados / Total procesos × 100",
    "Nivel de Automatización": "'=Procesos automatizados / Total procesos × 100",
    "Capacidad Ociosa": "'=Capacidad no utilizada / Capacidad total × 100",
    "Reclamos Internos Resueltos": "'=Reclamos resueltos / Total reclamos × 100",
    "Efectividad de Reuniones": "'=Reuniones con objetivos cumplidos / Total reuniones × 100",
    "Procesos Optimizados": "'=Procesos optimizados / Total procesos × 100",
    "Tasa de Accidentes Laborales": "'=N° accidentes / Total horas trabajadas × 200,000",
    "Cumplimiento de Normativas": "'=Normativas cumplidas / Total normativas × 100",
    
    // Aprendizaje y Crecimiento
    "Horas de Capacitación por Empleado": "'=Total horas capacitación / N° empleados",
    "Retención de Talento Clave": "'=Empleados clave retenidos / Total empleados clave × 100",
    "Índice de Satisfacción Laboral": "'=Puntaje promedio en encuestas de satisfacción (1-10)",
    "Ideas Implementadas por Empleado": "'=Total ideas implementadas / N° empleados",
    "Tasa de Promoción Interna": "'=Promociones internas / Total vacantes × 100",
    "Adopción de Nuevas Tecnologías": "'=Empleados usando nuevas tecnologías / Total empleados × 100",
    "Participación en Programas de Desarrollo": "'=Empleados en programas / Total empleados × 100",
    
    // Sostenibilidad
    "Huella de Carbono": "'=Total emisiones CO2 (en toneladas)",
    "Porcentaje de Energía Renovable": "'=Energía renovable utilizada / Energía total × 100",
    "Diversidad en Puestos Gerenciales": "'=N° gerentes diversos / Total gerentes × 100",
    "Horas de Voluntariado Corporativo": "'=Total horas de voluntariado"
  };
  
  return formulas[indicador] || "Fórmula no definida";
};

export const obtenerUnidad = (indicador) => {
  // Financieros
  if (indicador === "ROI" || indicador === "ROE" || indicador === "Margen Neto" || 
      indicador === "Rentabilidad sobre Ventas" || indicador === "Margen Bruto" || 
      indicador === "Endeudamiento Total" || indicador === "Crecimiento de Ingresos") {
    return "%";
  }
  if (indicador === "Liquidez Corriente" || indicador === "Costos Fijos/Variables") {
    return "ratio";
  }
  if (indicador === "Rotación de Inventarios") {
    return "veces/año";
  }
  if (indicador === "EBITDA" || indicador === "Flujo de Caja Operativo") {
    return "USD";
  }
  if (indicador === "Días de Cobranza Promedio") {
    return "días";
  }
  
  // Clientes
  if (indicador === "Satisfacción del Cliente" || indicador === "Tasa de Retención de Clientes" || 
      indicador === "Tasa de Recompra" || indicador === "Market Share" || 
      indicador === "Índice de Fidelización" || indicador === "Encuestas de Satisfacción Resueltas" || 
      indicador === "Reclamos Resueltos en Tiempo" || indicador === "Efectividad de Soporte Técnico" || 
      indicador === "Tasa de Uso de App/Plataforma" || indicador === "Tasa de Cancelación") {
    return "%";
  }
  if (indicador === "NPS (Net Promoter Score)") {
    return "puntos";
  }
  if (indicador === "Tiempo de Respuesta a Consultas" || indicador === "Tiempo de Espera en Atención") {
    return "minutos";
  }
  if (indicador === "Quejas Mensuales" || indicador === "Clientes Nuevos Adquiridos" || 
      indicador === "Clientes Referidos") {
    return "unidades";
  }
  if (indicador === "Ticket Promedio") {
    return "USD";
  }
  if (indicador === "Satisfacción Post-Venta") {
    return "puntos (1-10)";
  }
  
  // Procesos Internos
  if (indicador === "Eficiencia de Producción" || indicador === "Órdenes Completadas Correctamente" || 
      indicador === "Utilización de Maquinaria" || indicador === "Nivel de Inventario de Seguridad" || 
      indicador === "Porcentaje de Desperdicios" || indicador === "Entregas Tardías" || 
      indicador === "Proyectos Completados en Tiempo" || indicador === "Requisitos Cumplidos en Productos" || 
      indicador === "Estandarización de Procesos" || indicador === "Documentación de Procesos Actualizada" || 
      indicador === "Nivel de Automatización" || indicador === "Capacidad Ociosa" || 
      indicador === "Reclamos Internos Resueltos" || indicador === "Efectividad de Reuniones" || 
      indicador === "Procesos Optimizados" || indicador === "Cumplimiento de Normativas") {
    return "%";
  }
  if (indicador === "Tiempo de Ciclo de Fabricación" || indicador === "Tiempo de Entrega Promedio" || 
      indicador === "Tiempo Medio de Reparación" || indicador === "Tiempo de Desarrollo de Nuevos Productos") {
    return "días";
  }
  if (indicador === "Defectos por Millón de Unidades") {
    return "DPMO";
  }
  if (indicador === "Tasa de Accidentes Laborales") {
    return "accidentes/200k horas";
  }
  
  // Aprendizaje y Crecimiento
  if (indicador === "Retención de Talento Clave" || indicador === "Tasa de Promoción Interna" || 
      indicador === "Adopción de Nuevas Tecnologías" || indicador === "Participación en Programas de Desarrollo") {
    return "%";
  }
  if (indicador === "Horas de Capacitación por Empleado") {
    return "horas/empleado";
  }
  if (indicador === "Índice de Satisfacción Laboral") {
    return "puntos (1-10)";
  }
  if (indicador === "Ideas Implementadas por Empleado") {
    return "ideas/empleado";
  }
  
  // Sostenibilidad
  if (indicador === "Porcentaje de Energía Renovable" || indicador === "Diversidad en Puestos Gerenciales") {
    return "%";
  }
  if (indicador === "Huella de Carbono") {
    return "ton CO2";
  }
  if (indicador === "Horas de Voluntariado Corporativo") {
    return "horas";
  }
  
  return "unidades";
};

export const obtenerResponsable = (indicador) => {
  const perspectiva = PERSPECTIVES_MAP[indicador].perspectiva;
  const responsables = {
    "Financial": "Finanzas",
    "Customer": "Ventas/Marketing",
    "InternalProcesses": "Operaciones",
    "LearningGrowth": "RRHH",
    "Sustainability": "RSE"
  };
  return responsables[perspectiva];
};

// Datos simulados para el dashboard
export const generarDatosSimulados = (periodoActual, compararCon) => {
  const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [mesActual, anioActual] = periodoActual.split('-');
  
  // Determinar período de comparación
  let periodoComparacion = "";
  if (compararCon === "Año Anterior") {
    periodoComparacion = `${mesActual}-${parseInt(anioActual)-1}`;
  } 
  else if (compararCon === "Trimestre Anterior") {
    const mesIndex = meses.indexOf(mesActual);
    let mesComparacion = meses[(mesIndex - 3 + 12) % 12];
    let anioComparacion = anioActual;
    if (mesIndex - 3 < 0) {
      anioComparacion = parseInt(anioActual) - 1;
    }
    periodoComparacion = `${mesComparacion}-${anioComparacion}`;
  }
  else if (compararCon === "Budget") {
    periodoComparacion = `Budget ${periodoActual}`;
  }
  
  // Generar datos para todos los indicadores
  const indicators = Object.keys(PERSPECTIVES_MAP);
  const data = [];
  
  indicators.forEach((indicator, i) => {
    const formula = obtenerFormula(indicator);
    const unidad = obtenerUnidad(indicator);
    const responsable = obtenerResponsable(indicator);
    const polaridad = PERSPECTIVES_MAP[indicator].polaridad;
    
    // Generar valores simulados
    let meta;
    let baseValue;
    
    // Asignar metas y valores base según el tipo de indicador
    switch(indicator) {
      // Financieros
      case "ROI":
      case "ROE":
        meta = 12 + Math.random() * 8; // 12-20%
        baseValue = meta * (0.8 + Math.random() * 0.4); // 80-120% de la meta
        break;
      case "Margen Neto":
        meta = 8 + Math.random() * 7; // 8-15%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Liquidez Corriente":
        meta = 1.5 + Math.random() * 1; // 1.5-2.5
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Endeudamiento Total":
        meta = 40 + Math.random() * 20; // 40-60%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Rotación de Inventarios":
        meta = 6 + Math.random() * 6; // 6-12 veces/año
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "EBITDA":
        meta = 500000 + Math.random() * 1000000; // 500k-1.5M USD
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Flujo de Caja Operativo":
        meta = 300000 + Math.random() * 700000; // 300k-1M USD
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Rentabilidad sobre Ventas":
        meta = 10 + Math.random() * 10; // 10-20%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Días de Cobranza Promedio":
        meta = 30 + Math.random() * 30; // 30-60 días
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Margen Bruto":
        meta = 30 + Math.random() * 20; // 30-50%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Costos Fijos/Variables":
        meta = 0.8 + Math.random() * 0.4; // 0.8-1.2
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Crecimiento de Ingresos":
        meta = 5 + Math.random() * 10; // 5-15%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
        
      // Clientes
      case "Satisfacción del Cliente":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "NPS (Net Promoter Score)":
        meta = 30 + Math.random() * 40; // 30-70 puntos
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Retención de Clientes":
        meta = 75 + Math.random() * 20; // 75-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Recompra":
        meta = 60 + Math.random() * 30; // 60-90%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Market Share":
        meta = 15 + Math.random() * 15; // 15-30%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo de Respuesta a Consultas":
        meta = 15 + Math.random() * 15; // 15-30 minutos
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Quejas Mensuales":
        meta = 10 + Math.random() * 20; // 10-30 unidades
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Clientes Nuevos Adquiridos":
        meta = 50 + Math.random() * 150; // 50-200 unidades
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Ticket Promedio":
        meta = 50 + Math.random() * 150; // 50-200 USD
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Índice de Fidelización":
        meta = 70 + Math.random() * 25; // 70-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Encuestas de Satisfacción Resueltas":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Reclamos Resueltos en Tiempo":
        meta = 90 + Math.random() * 9; // 90-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo de Espera en Atención":
        meta = 5 + Math.random() * 10; // 5-15 minutos
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Efectividad de Soporte Técnico":
        meta = 75 + Math.random() * 20; // 75-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Clientes Referidos":
        meta = 20 + Math.random() * 30; // 20-50 unidades
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Uso de App/Plataforma":
        meta = 60 + Math.random() * 35; // 60-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Satisfacción Post-Venta":
        meta = 8 + Math.random() * 2; // 8-10 puntos
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Cancelación":
        meta = 5 + Math.random() * 10; // 5-15%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
        
      // Procesos Internos
      case "Eficiencia de Producción":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo de Ciclo de Fabricación":
        meta = 5 + Math.random() * 10; // 5-15 días
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Defectos por Millón de Unidades":
        meta = 1000 + Math.random() * 4000; // 1000-5000 DPMO
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo de Entrega Promedio":
        meta = 3 + Math.random() * 7; // 3-10 días
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Órdenes Completadas Correctamente":
        meta = 95 + Math.random() * 4; // 95-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Utilización de Maquinaria":
        meta = 70 + Math.random() * 25; // 70-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Nivel de Inventario de Seguridad":
        meta = 110 + Math.random() * 20; // 110-130%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo Medio de Reparación":
        meta = 2 + Math.random() * 3; // 2-5 días
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Porcentaje de Desperdicios":
        meta = 5 + Math.random() * 10; // 5-15%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Entregas Tardías":
        meta = 5 + Math.random() * 10; // 5-15%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Proyectos Completados en Tiempo":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Requisitos Cumplidos en Productos":
        meta = 90 + Math.random() * 9; // 90-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tiempo de Desarrollo de Nuevos Productos":
        meta = 90 + Math.random() * 90; // 90-180 días
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Estandarización de Procesos":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Documentación de Procesos Actualizada":
        meta = 85 + Math.random() * 14; // 85-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Nivel de Automatización":
        meta = 50 + Math.random() * 40; // 50-90%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Capacidad Ociosa":
        meta = 10 + Math.random() * 15; // 10-25%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Reclamos Internos Resueltos":
        meta = 90 + Math.random() * 9; // 90-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Efectividad de Reuniones":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Procesos Optimizados":
        meta = 30 + Math.random() * 50; // 30-80%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Accidentes Laborales":
        meta = 1 + Math.random() * 4; // 1-5 accidentes/200k horas
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Cumplimiento de Normativas":
        meta = 95 + Math.random() * 4; // 95-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
        
      // Aprendizaje y Crecimiento
      case "Horas de Capacitación por Empleado":
        meta = 20 + Math.random() * 30; // 20-50 horas/empleado
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Retención de Talento Clave":
        meta = 85 + Math.random() * 14; // 85-99%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Índice de Satisfacción Laboral":
        meta = 7 + Math.random() * 3; // 7-10 puntos
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Ideas Implementadas por Empleado":
        meta = 1 + Math.random() * 2; // 1-3 ideas/empleado
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Tasa de Promoción Interna":
        meta = 60 + Math.random() * 30; // 60-90%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Adopción de Nuevas Tecnologías":
        meta = 70 + Math.random() * 25; // 70-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Participación en Programas de Desarrollo":
        meta = 80 + Math.random() * 15; // 80-95%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
        
      // Sostenibilidad
      case "Huella de Carbono":
        meta = 1000 + Math.random() * 4000; // 1000-5000 ton CO2
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Porcentaje de Energía Renovable":
        meta = 30 + Math.random() * 60; // 30-90%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Diversidad en Puestos Gerenciales":
        meta = 40 + Math.random() * 50; // 40-90%
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
      case "Horas de Voluntariado Corporativo":
        meta = 500 + Math.random() * 1500; // 500-2000 horas
        baseValue = meta * (0.8 + Math.random() * 0.4);
        break;
        
      default:
        meta = 70 + Math.random() * 30; // Valor genérico 70-100
        baseValue = meta * (0.8 + Math.random() * 0.4);
    }
    
    meta = Math.round(meta * 100) / 100;
    baseValue = Math.round(baseValue * 100) / 100;
    
    // Generar valor de comparación con cierta variación
    let compareValue;
    if (compararCon === "Budget") {
      compareValue = meta;
    } else {
      const variation = (Math.random() * 0.4) - 0.2; // -20% a +20% de variación
      compareValue = baseValue * (1 + variation);
      compareValue = Math.round(compareValue * 100) / 100;
    }
    
    // Calcular diferencia absoluta
    const diferenciaAbsoluta = baseValue - compareValue;
    
    // Determinar si es favorable según la polaridad
    let esFavorable;
    if (polaridad === "negativo") {
      esFavorable = baseValue < compareValue; // Menor es mejor
    } else {
      esFavorable = baseValue > compareValue; // Mayor es mejor
    }
    
    // Calcular diferencia para mostrar (siempre valor absoluto)
    const diferenciaMostrar = Math.abs(diferenciaAbsoluta);
    
    // Calcular cumplimiento dinámico según comparación seleccionada
    let cumplimiento = null;
    if (compareValue !== 0 && !isNaN(compareValue)) {
      if (polaridad === "negativo") {
        // Para indicadores "menor es mejor"
        if (baseValue <= compareValue) {
          // Mejor que el valor de comparación
          cumplimiento = 100 + ((compareValue - baseValue) / compareValue) * 100;
        } else {
          // Peor que el valor de comparación
          cumplimiento = 100 - ((baseValue - compareValue) / compareValue) * 100;
        }
      } else {
        // Para indicadores "mayor es mejor"
        if (baseValue >= compareValue) {
          // Mejor que el valor de comparación
          cumplimiento = 100 + ((baseValue - compareValue) / compareValue) * 100;
        } else {
          // Peor que el valor de comparación
          cumplimiento = (baseValue / compareValue) * 100;
        }
      }
      
      // Limitar el cumplimiento a un rango razonable (0-200%)
      cumplimiento = Math.max(0, Math.min(cumplimiento, 200));
      cumplimiento = Math.round(cumplimiento * 100) / 100;
    }
    
    data.push({
      id: i + 1,
      indicador: indicator,
      perspectiva: PERSPECTIVES_MAP[indicator].perspectiva,
      formula: formula,
      unidad: unidad,
      responsable: responsable,
      meta: meta,
      actual: baseValue,
      comparacion: compareValue,
      diferencia: diferenciaMostrar.toFixed(2),
      esFavorable: esFavorable,
      cumplimiento: cumplimiento,
      polaridad: polaridad
    });
  });
  
  return { 
    data: data,
    periodoActual: periodoActual,
    periodoComparacion: periodoComparacion
  };
};