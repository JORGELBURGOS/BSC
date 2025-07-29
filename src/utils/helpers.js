// helpers.js

/**
 * Formatea un número según su unidad de medida
 * @param {number} value - Valor a formatear
 * @param {string} unidad - Unidad de medida
 * @returns {string} Valor formateado
 */
export const formatNumber = (value, unidad) => {
  if (value === null || value === undefined) return "N/A";
  
  // Convertir a número si es string
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numValue)) return value;
  
  // Formatear según la unidad
  switch(unidad) {
    case "USD":
      return `$${numValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    case "%":
    case "puntos":
    case "ratio":
    case "veces/año":
    case "DPMO":
    case "accidentes/200k horas":
    case "horas/empleado":
    case "ideas/empleado":
      return `${numValue.toFixed(2)}${unidad === "%" ? "%" : ""}`;
    case "puntos (1-10)":
      return `${numValue.toFixed(1)}`;
    case "ton CO2":
    case "horas":
      return `${numValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${unidad}`;
    case "días":
    case "minutos":
      return `${numValue.toFixed(0)} ${unidad}`;
    default:
      // Para unidades genéricas
      return Number.isInteger(numValue) 
        ? numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : numValue.toFixed(2);
  }
};

/**
 * Calcula el porcentaje de cumplimiento de un indicador
 * @param {number} actual - Valor actual
 * @param {number} comparacion - Valor de comparación
 * @param {string} polaridad - 'positivo' o 'negativo'
 * @returns {number|null} Porcentaje de cumplimiento (0-200) o null si no se puede calcular
 */
export const calcularCumplimiento = (actual, comparacion, polaridad) => {
  if (comparacion === 0 || isNaN(actual) || isNaN(comparacion)) return null;
  
  let cumplimiento;
  
  if (polaridad === "negativo") {
    // Para indicadores "menor es mejor"
    if (actual <= comparacion) {
      cumplimiento = 100 + ((comparacion - actual) / comparacion) * 100;
    } else {
      cumplimiento = 100 - ((actual - comparacion) / comparacion) * 100;
    }
  } else {
    // Para indicadores "mayor es mejor"
    if (actual >= comparacion) {
      cumplimiento = 100 + ((actual - comparacion) / comparacion) * 100;
    } else {
      cumplimiento = (actual / comparacion) * 100;
    }
  }
  
  // Limitar el cumplimiento a un rango razonable (0-200%)
  return Math.max(0, Math.min(cumplimiento, 200));
};

/**
 * Determina si un valor es favorable según su polaridad
 * @param {number} actual - Valor actual
 * @param {number} comparacion - Valor de comparación
 * @param {string} polaridad - 'positivo' o 'negativo'
 * @returns {boolean} true si es favorable, false si no
 */
export const esFavorable = (actual, comparacion, polaridad) => {
  if (polaridad === "negativo") {
    return actual < comparacion; // Menor es mejor
  }
  return actual > comparacion; // Mayor es mejor
};

/**
 * Obtiene el icono y clase CSS para mostrar la tendencia
 * @param {boolean} esFavorable - Si el resultado es favorable
 * @returns {object} {icon: string, className: string}
 */
export const getTrendIcon = (esFavorable) => {
  return {
    icon: esFavorable ? "fas fa-arrow-up" : "fas fa-arrow-down",
    className: esFavorable ? "positive" : "negative"
  };
};

/**
 * Obtiene el color para la barra de progreso según el porcentaje
 * @param {number} porcentaje - Porcentaje de cumplimiento
 * @returns {string} Nombre de la clase CSS
 */
export const getProgressColor = (porcentaje) => {
  if (porcentaje >= 90) return "positive";
  if (porcentaje >= 70) return "neutral";
  return "negative";
};

/**
 * Genera un color gradiente para una perspectiva
 * @param {string} perspectiva - Clave de la perspectiva
 * @returns {string} Cadena CSS para el gradiente
 */
export const getPerspectiveGradient = (perspectiva) => {
  const colors = {
    Financial: "rgba(66, 133, 244, 0.8)",
    Customer: "rgba(234, 67, 53, 0.8)",
    InternalProcesses: "rgba(251, 188, 5, 0.8)",
    LearningGrowth: "rgba(52, 168, 83, 0.8)",
    Sustainability: "rgba(103, 58, 183, 0.8)"
  };
  
  return `linear-gradient(135deg, ${colors[perspectiva]} 0%, rgba(22, 33, 62, 0.9) 100%)`;
};

/**
 * Obtiene el nombre legible de una perspectiva
 * @param {string} key - Clave de la perspectiva
 * @returns {string} Nombre legible
 */
export const getPerspectiveName = (key) => {
  const names = {
    Financial: "Financiero",
    Customer: "Clientes",
    InternalProcesses: "Procesos Internos",
    LearningGrowth: "Aprendizaje y Crecimiento",
    Sustainability: "Sostenibilidad"
  };
  return names[key] || key;
};

/**
 * Obtiene el icono de FontAwesome para una perspectiva
 * @param {string} key - Clave de la perspectiva
 * @returns {string} Clase del icono
 */
export const getPerspectiveIcon = (key) => {
  const icons = {
    Financial: "fa-chart-line",
    Customer: "fa-users",
    InternalProcesses: "fa-cogs",
    LearningGrowth: "fa-graduation-cap",
    Sustainability: "fa-leaf"
  };
  return icons[key] || "fa-chart-pie";
};