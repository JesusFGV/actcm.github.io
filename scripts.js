// Define aquí tu canción con inicio y fin por cada línea (en segundos)
const letraCancion = [
    { texto: "Primera línea 🎶", inicio: 3, fin: 7 },
    { texto: "Segunda línea 💜", inicio: 8, fin: 12 },
    { texto: "Tercera línea 🎤", inicio: 14, fin: 18 },
    { texto: "Cuarta línea 🎧", inicio: 20, fin: 22 },
    { texto: "Quinta línea 🕐", inicio: 27, fin: 30 }
  ];
  
  function iniciar() {
    const letraDiv = document.getElementById("letra");
    letraDiv.textContent = "";
  
    // Convertimos segundos a milisegundos para usar en setTimeout
    letraCancion.forEach(linea => {
      const tiempoInicio = linea.inicio * 1000;
      const tiempoFin = linea.fin * 1000;
  
      // Mostrar la línea
      setTimeout(() => {
        letraDiv.textContent = linea.texto;
      }, tiempoInicio);
  
      // Ocultar la línea
      setTimeout(() => {
        letraDiv.textContent = "";
      }, tiempoFin);
    });
  }
  