import { useState, useEffect } from 'react';
import { FaCalendarWeek, FaNotEqual, FaSyncAlt } from 'react-icons/fa';

const Filters = ({ onFilterChange }) => {
  const [periodo, setPeriodo] = useState('Jun-25');
  const [comparacion, setComparacion] = useState('Año Anterior');
  
  const meses = [
    { value: 'Jan-23', label: 'Enero 2023' },
    { value: 'Feb-23', label: 'Febrero 2023' },
    { value: 'Mar-23', label: 'Marzo 2023' },
    { value: 'Apr-23', label: 'Abril 2023' },
    { value: 'May-23', label: 'Mayo 2023' },
    { value: 'Jun-23', label: 'Junio 2023' },
    { value: 'Jul-23', label: 'Julio 2023' },
    { value: 'Aug-23', label: 'Agosto 2023' },
    { value: 'Sep-23', label: 'Septiembre 2023' },
    { value: 'Oct-23', label: 'Octubre 2023' },
    { value: 'Nov-23', label: 'Noviembre 2023' },
    { value: 'Dec-23', label: 'Diciembre 2023' },
    { value: 'Jan-24', label: 'Enero 2024' },
    { value: 'Feb-24', label: 'Febrero 2024' },
    { value: 'Mar-24', label: 'Marzo 2024' },
    { value: 'Apr-24', label: 'Abril 2024' },
    { value: 'May-24', label: 'Mayo 2024' },
    { value: 'Jun-24', label: 'Junio 2024' },
    { value: 'Jul-24', label: 'Julio 2024' },
    { value: 'Aug-24', label: 'Agosto 2024' },
    { value: 'Sep-24', label: 'Septiembre 2024' },
    { value: 'Oct-24', label: 'Octubre 2024' },
    { value: 'Nov-24', label: 'Noviembre 2024' },
    { value: 'Dec-24', label: 'Diciembre 2024' },
    { value: 'Jan-25', label: 'Enero 2025' },
    { value: 'Feb-25', label: 'Febrero 2025' },
    { value: 'Mar-25', label: 'Marzo 2025' },
    { value: 'Apr-25', label: 'Abril 2025' },
    { value: 'May-25', label: 'Mayo 2025' },
    { value: 'Jun-25', label: 'Junio 2025' }
  ];

  const comparaciones = [
    { value: 'Año Anterior', label: 'Año Anterior' },
    { value: 'Trimestre Anterior', label: 'Trimestre Anterior' },
    { value: 'Mes Anterior', label: 'Mes Anterior' },
    { value: 'Budget', label: 'Presupuesto' }
  ];

  const handleLoadData = () => {
    onFilterChange(periodo, comparacion);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="periodo"><FaCalendarWeek /> Período Principal</label>
        <select 
          id="periodo" 
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          {meses.map((mes) => (
            <option key={mes.value} value={mes.value}>{mes.label}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="comparacion"><FaNotEqual /> Comparar con</label>
        <select 
          id="comparacion" 
          value={comparacion}
          onChange={(e) => setComparacion(e.target.value)}
        >
          {comparaciones.map((comp) => (
            <option key={comp.value} value={comp.value}>{comp.label}</option>
          ))}
        </select>
      </div>
      
      <button onClick={handleLoadData}>
        <FaSyncAlt /> Actualizar Dashboard
      </button>
    </div>
  );
};

export default Filters;