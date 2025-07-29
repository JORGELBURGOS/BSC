import { FaTimes, FaInfoCircle, FaCalculator } from 'react-icons/fa';
import { formatNumber } from '@/utils/helpers';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MetricModal = ({ metric, onClose }) => {
  if (!metric) return null;
  
  // Datos para el gráfico
  const chartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Valor Actual',
        data: Array(12).fill().map((_, i) => {
          const base = metric.actual;
          const variation = (Math.random() * 0.4) - 0.2; // -20% a +20%
          return base * (1 + variation);
        }),
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0, 180, 216, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Meta',
        data: Array(12).fill(metric.meta),
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        borderDash: [5, 5],
        tension: 0
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e6e6e6'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: metric.polaridad === 'negativo' ? false : true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#e6e6e6'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#e6e6e6'
        }
      }
    }
  };
  
  return (
    <div className={`modal-overlay ${metric ? 'active' : ''}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>{metric.indicador}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-metric-info">
            <div className="modal-metric-value">
              <div className="label">Valor Actual</div>
              <div className="value">{formatNumber(metric.actual, metric.unidad)}</div>
              <div className="modal-meta">
                <span>Meta:</span>
                <span className="meta-value">{formatNumber(metric.meta, metric.unidad)}</span>
              </div>
            </div>
            <div className="modal-metric-value">
              <div className="label">Comparación</div>
              <div className="value">{formatNumber(metric.comparacion, metric.unidad)}</div>
              <div className="modal-meta">
                <span>Diferencia:</span>
                <span className="meta-value">{formatNumber(metric.diferencia, metric.unidad)}</span>
              </div>
            </div>
          </div>
          
          <div className="modal-chart">
            <Line data={chartData} options={chartOptions} />
          </div>
          
          <div className="modal-details">
            <div className="modal-detail-group">
              <h3><FaInfoCircle /> Información General</h3>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Perspectiva</div>
                <div className="modal-detail-value">
                  {metric.perspectiva === 'Financial' ? 'Financiero' : 
                   metric.perspectiva === 'Customer' ? 'Clientes' : 
                   metric.perspectiva === 'InternalProcesses' ? 'Procesos Internos' : 
                   metric.perspectiva === 'LearningGrowth' ? 'Aprendizaje y Crecimiento' : 'Sostenibilidad'}
                </div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Responsable</div>
                <div className="modal-detail-value">{metric.responsable}</div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Unidad de Medida</div>
                <div className="modal-detail-value">{metric.unidad}</div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Polaridad</div>
                <div className="modal-detail-value">
                  {metric.polaridad === 'negativo' ? 'Menor es mejor' : 'Mayor es mejor'}
                </div>
              </div>
            </div>
            
            <div className="modal-detail-group">
              <h3><FaCalculator /> Fórmula de Cálculo</h3>
              <div className="modal-detail-item">
                <div className="modal-detail-value">{metric.formula.replace(/^'=/, "")}</div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Estado Actual</div>
                <div className="modal-detail-value">
                  <span className={metric.esFavorable ? 'positive' : 'negative'}>
                    {metric.esFavorable ? 'Favorable' : 'Desfavorable'}
                  </span>
                </div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Cumplimiento</div>
                <div className="modal-detail-value">
                  {metric.cumplimiento !== null ? `${metric.cumplimiento.toFixed(2)}%` : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricModal;