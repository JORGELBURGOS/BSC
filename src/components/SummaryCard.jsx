import { FaChartLine, FaUsers, FaCogs, FaGraduationCap, FaLeaf } from 'react-icons/fa';

const SummaryCard = ({ title, icon, value, onClick, className }) => {
  const icons = {
    'chart-line': <FaChartLine />,
    'users': <FaUsers />,
    'cogs': <FaCogs />,
    'graduation-cap': <FaGraduationCap />,
    'leaf': <FaLeaf />
  };
  
  const percentage = value ? Math.round((value.favorable / value.total) * 100) : 0;
  
  let statusClass = '';
  if (percentage >= 70) {
    statusClass = 'positive';
  } else if (percentage >= 40) {
    statusClass = 'neutral';
  } else {
    statusClass = 'negative';
  }
  
  return (
    <div className={`summary-card ${className}`} onClick={onClick}>
      <h3>{icons[icon]} {title}</h3>
      <div className={`summary-value ${statusClass}`}>{percentage}%</div>
      <p>Indicadores favorables</p>
    </div>
  );
};

export default SummaryCard;