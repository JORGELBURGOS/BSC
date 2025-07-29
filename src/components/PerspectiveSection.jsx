import { FaChevronDown } from 'react-icons/fa';
import MetricCard from './MetricCard';

const PerspectiveSection = ({ 
  id, 
  title, 
  icon, 
  metrics, 
  collapsed, 
  onToggle, 
  onMetricClick,
  className 
}) => {
  const icons = {
    'chart-line': <i className="fas fa-chart-line"></i>,
    'users': <i className="fas fa-users"></i>,
    'cogs': <i className="fas fa-cogs"></i>,
    'graduation-cap': <i className="fas fa-graduation-cap"></i>,
    'leaf': <i className="fas fa-leaf"></i>
  };
  
  return (
    <div id={`${id}Container`} className={`perspective-container ${collapsed ? 'collapsed' : ''}`}>
      <div className={`perspective-header ${className}`} onClick={onToggle}>
        <h2>{icons[icon]} {title}</h2>
        <span className="count">{metrics.length} KPI</span>
        <FaChevronDown className="toggle-icon" />
      </div>
      <div className="metrics-container">
        {metrics.length > 0 ? (
          <>
            <div className="metric-header">
              <div>Indicador</div>
              <div>Actual</div>
              <div>Comparación</div>
              <div>Diferencia</div>
              <div>Cumplimiento</div>
            </div>
            
            {metrics.map((metric, index) => (
              <MetricCard 
                key={metric.id} 
                metric={metric} 
                onClick={() => onMetricClick(metric)}
                delay={index * 50}
              />
            ))}
          </>
        ) : (
          <div className="no-data">No hay datos disponibles para esta perspectiva</div>
        )}
      </div>
    </div>
  );
};

export default PerspectiveSection;