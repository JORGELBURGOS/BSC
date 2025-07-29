export const obtenerFormula = (indicador) => {
  const formulas = {
    // Financieras
    "Margen Neto": "Utilidad Neta / Ventas Totales × 100",
    "ROI": "(Ganancia - Inversión) / Inversión × 100",
    "ROE": "Utilidad Neta / Patrimonio Neto × 100",
    "Liquidez Corriente": "Activo Corriente / Pasivo Corriente",
    "Endeudamiento Total": "Pasivo Total / Activo Total × 100",
    "Rotación de Inventarios": "Costo de Ventas / Inventario Promedio",
    "EBITDA": "Utilidad Operativa + Depreciación + Amortización",
    "Flujo de Caja Operativo": "Flujo de Caja de Operaciones",
    "Rentabilidad sobre Ventas": "Utilidad Neta / Ventas × 100",
    "Días de Cobranza Promedio": "(Cuentas por Cobrar / Ventas) × 365",
    "Margen Bruto": "(Ventas - Costo de Ventas) / Ventas × 100",
    "Costos Fijos/Variables": "Costos Fijos / Costos Variables",
    "Crecimiento de Ingresos": "(Ingresos Actuales - Ingresos Anteriores) / Ingresos Anteriores × 100",
    
    // Clientes
    "Satisfacción del Cliente": "(N° clientes satisfechos / Total encuestados) × 100",
    "NPS (Net Promoter Score)": "% Promotores - % Detractores",
    "Tasa de Retención de Clientes": "(Clientes finales - Clientes nuevos) / Clientes iniciales × 100",
    "Tasa de Recompra": "Clientes que recompran / Total clientes × 100",
    "Market Share": "Ventas de la empresa / Ventas totales del mercado × 100",
    "Tiempo de Respuesta a Consultas": "Suma de tiempos de respuesta / N° consultas",
    "Quejas Mensuales": "N° de quejas recibidas en el mes",
    "Clientes Nuevos Adquiridos": "N° nuevos clientes en período",
    "Ticket Promedio": "Ventas totales / N° transacciones",
    "Índice de Fidelización": "(Clientes recurrentes / Total clientes) × 100",
    "Encuestas de Satisfacción Resueltas": "N° encuestas completadas / N° encuestas enviadas × 100",
    "Reclamos Resueltos en Tiempo": "Reclamos resueltos a tiempo / Total reclamos × 100",
    "Tiempo de Espera en Atención": "Tiempo total de espera / N° atenciones",
    "Efectividad de Soporte Técnico": "Casos resueltos en primera interacción / Total casos × 100",
    "Clientes Referidos": "N° clientes referidos por otros clientes",
    "Tasa de Uso de App/Plataforma": "Usuarios activos / Total usuarios × 100",
    "Satisfacción Post-Venta": "Encuestas de satisfacción post-venta (escala 1-10)",
    "Tasa de Cancelación": "Clientes perdidos / Total clientes × 100",
    
    // Procesos Internos
    "Eficiencia de Producción": "Unidades producidas / Horas trabajadas × 100",
    "Tiempo de Ciclo de Fabricación": "Tiempo total desde inicio a fin de producción",
    "Defectos por Millón de Unidades": "(N° defectos / Unidades producidas) × 1,000,000",
    "Tiempo de Entrega Promedio": "Suma tiempos de entrega / N° entregas",
    "Órdenes Completadas Correctamente": "Órdenes sin errores / Total órdenes × 100",
    "Utilización de Maquinaria": "Horas operativas / Horas disponibles × 100",
    "Nivel de Inventario de Seguridad": "Inventario actual / Inventario mínimo requerido × 100",
    "Tiempo Medio de Reparación": "Suma tiempos de reparación / N° reparaciones",
    "Porcentaje de Desperdicios": "Material desperdiciado / Material utilizado × 100",
    "Entregas Tardías": "Entregas fuera de plazo / Total entregas × 100",
    "Proyectos Completados en Tiempo": "Proyectos a tiempo / Total proyectos × 100",
    "Requisitos Cumplidos en Productos": "Requisitos cumplidos / Total requisitos × 100",
    "Tiempo de Desarrollo de Nuevos Productos": "Tiempo desde concepción a lanzamiento",
    "Estandarización de Procesos": "Procesos estandarizados / Total procesos × 100",
    "Documentación de Procesos Actualizada": "Procesos documentados / Total procesos × 100",
    "Nivel de Automatización": "Procesos automatizados / Total procesos × 100",
    "Capacidad Ociosa": "Capacidad no utilizada / Capacidad total × 100",
    "Reclamos Internos Resueltos": "Reclamos resueltos / Total reclamos × 100",
    "Efectividad de Reuniones": "Reuniones con objetivos cumplidos / Total reuniones × 100",
    "Procesos Optimizados": "Procesos optimizados / Total procesos × 100",
    "Tasa de Accidentes Laborales": "N° accidentes / Total horas trabajadas × 200,000",
    "Cumplimiento de Normativas": "Normativas cumplidas / Total normativas × 100",
    
    // Aprendizaje y Crecimiento
    "Horas de Capacitación por Empleado": "Total horas capacitación / N° empleados",
    "Retención de Talento Clave": "Empleados clave retenidos / Total empleados clave × 100",
    "Índice de Satisfacción Laboral": "Puntaje promedio en encuestas de satisfacción (1-10)",
    "Ideas Implementadas por Empleado": "Total ideas implementadas / N° empleados",
    "Tasa de Promoción Interna": "Promociones internas / Total vacantes × 100",
    "Adopción de Nuevas Tecnologías": "Empleados usando nuevas tecnologías / Total empleados × 100",
    "Participación en Programas de Desarrollo": "Empleados en programas / Total empleados × 100",
    
    // Sostenibilidad
    "Huella de Carbono": "Total emisiones CO2 (en toneladas)",
    "Porcentaje de Energía Renovable": "Energía renovable utilizada / Energía total × 100",
    "Diversidad en Puestos Gerenciales": "N° gerentes diversos / Total gerentes × 100",
    "Horas de Voluntariado Corporativo": "Total horas de voluntariado"
  };
  
  return formulas[indicador] || "Fórmula no definida";
};