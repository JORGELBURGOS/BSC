export const formatNumber = (value, unidad) => {
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

export const getPerspectiveColor = (perspective) => {
  switch(perspective) {
    case "Financial": return "var(--financial)";
    case "Customer": return "var(--customer)";
    case "InternalProcesses": return "var(--processes)";
    case "LearningGrowth": return "var(--learning)";
    case "Sustainability": return "var(--sustainability)";
    default: return "var(--accent)";
  }
};

export const getPerspectiveName = (perspective) => {
  switch(perspective) {
    case "Financial": return "Financiero";
    case "Customer": return "Clientes";
    case "InternalProcesses": return "Procesos Internos";
    case "LearningGrowth": return "Aprendizaje y Crecimiento";
    case "Sustainability": return "Sostenibilidad";
    default: return perspective;
  }
};

export const getTrendIcon = (esFavorable) => {
  return esFavorable ? 
    <i className="fas fa-arrow-up icon-up"></i> : 
    <i className="fas fa-arrow-down icon-down"></i>;
};

export const getStatusClass = (esFavorable) => {
  return esFavorable ? "positive" : "negative";
};

export const getPolarityText = (polaridad) => {
  return polaridad === "negativo" ? 
    <><i className="fas fa-arrow-down"></i> Menor valor es mejor</> : 
    <><i className="fas fa-arrow-up"></i> Mayor valor es mejor</>;
};