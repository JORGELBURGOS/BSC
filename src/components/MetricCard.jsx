import { useEffect, useState } from 'react';
import { 
  formatNumber, 
  getTrendIcon, 
  getStatusClass, 
  getPolarityText 
} from '@/utils/helpers';

const MetricCard = ({ metric, onClick, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const statusClass = getStatusClass(metric.esFavorable);
  
  return (
    <div 
      className={`metric-card ${animated ? 'animate-pop' : ''}`} 
      onClick={onClick}
      style={{ opacity: animated ? 1 : 0 }}
    >
      <div className="metric-name">
        <strong>{metric.indicador}</strong>
        <div className="metric-responsable">
          <i className={`fas fa-${metric.perspectiva === 'Financial' ? 'chart-line' : 
                         metric.perspectiva === 'Customer' ? 'users' : 
                         metric.perspectiva === 'InternalProcesses' ? 'cogs' : 
                         metric.perspectiva === 'LearningGrowth' ? 'graduation-cap' : 'leaf'}`}></i> 
          {metric.responsable} | {metric.unidad}
        </div>
        <div className="formula-info">{metric.formula.replace(/^'=/, "")}</div>
        <div className="polarity-info">{getPolarityText(metric.polaridad)}</div>
      </div>
      <div className="metric-value">{formatNumber(metric.actual, metric.unidad)}</div>
      <div className="metric-value">{formatNumber(metric.comparacion, metric.unidad)}</div>
      <div className={`metric-comparison ${statusClass}`}>
        {getTrendIcon(metric.esFavorable)} {formatNumber(metric.diferencia, metric.unidad)}
      </div>
      <div className="metric-meta">
        {metric.cumplimiento !== null ? (
          <div className="progress-container">
            <div className="progress-text">{metric.cumplimiento.toFixed(0)}%</div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{
                  width: `${Math.min(metric.cumplimiento, 100)}%`,
                  background: metric.cumplimiento >= 90 ? 'var(--positive)' : 
                             metric.cumplimiento >= 70 ? 'var(--neutral)' : 'var(--negative)'
                }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="progress-text">N/A</div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;