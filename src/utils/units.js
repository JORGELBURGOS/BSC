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