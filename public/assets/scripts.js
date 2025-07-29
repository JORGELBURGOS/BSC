document.addEventListener('DOMContentLoaded', function() {
  // Inicializar partículas.js si el elemento existe
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { 
          value: 80, 
          density: { 
            enable: true, 
            value_area: 800 
          } 
        },
        color: { 
          value: "#00b4d8" 
        },
        shape: { 
          type: "circle" 
        },
        opacity: { 
          value: 0.5, 
          random: true 
        },
        size: { 
          value: 3, 
          random: true 
        },
        line_linked: { 
          enable: true, 
          distance: 150, 
          color: "#00b4d8", 
          opacity: 0.4, 
          width: 1 
        },
        move: { 
          enable: true, 
          speed: 2, 
          direction: "none", 
          random: true, 
          straight: false, 
          out_mode: "out" 
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { 
            enable: true, 
            mode: "repulse" 
          },
          onclick: { 
            enable: true, 
            mode: "push" 
          }
        }
      }
    });
  }

  // Establecer el último mes disponible como predeterminado
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let defaultMonth = monthNames[currentMonth - 1] || "Dec";
  let defaultYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  
  const periodoSelect = document.getElementById("periodo");
  if (periodoSelect) {
    const defaultOption = `${defaultMonth}-${defaultYear.toString().slice(-2)}`;
    
    if (periodoSelect.querySelector(`option[value="${defaultOption}"]`)) {
      periodoSelect.value = defaultOption;
    } else {
      // Si no existe, seleccionar el último disponible
      periodoSelect.value = periodoSelect.lastElementChild.value;
    }
  }

  // Función para alternar la visualización de una perspectiva
  window.togglePerspective = function(perspective) {
    const container = document.getElementById(`${perspective}Container`);
    if (container) {
      container.classList.toggle('collapsed');
      
      // Rotar el icono
      const icon = container.querySelector('.toggle-icon');
      if (icon) {
        icon.classList.toggle('rotated');
      }
    }
  };

  // Función para navegar a una perspectiva
  window.scrollToPerspective = function(perspective) {
    const element = document.getElementById(`${perspective}Container`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Expandir la perspectiva si está colapsada
      if (element.classList.contains('collapsed')) {
        togglePerspective(perspective);
      }
    }
  };
});