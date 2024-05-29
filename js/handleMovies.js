const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JjOTE4Y2VhMzViNWU1ZTljYTNkMmY2MDFjM2FhNCIsInN1YiI6IjY2NTY5NGNjMzU1OTYzY2I5YjA5ZWRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jTVemA5dC6zHQo8GYSuDq43KbDL2R1Ifjv3x-Cw81NQ'
        
    }
};
async function buscarPeliculas(titulo) {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(titulo)}`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
  
      if (datos.results && datos.results.length > 0) {
        console.log(datos.results); // Aquí puedes procesar y mostrar los resultados
      } else {
        console.log('No se encontraron películas.');
      }
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  }
  
  // Ejemplo de uso: buscar películas por el título "Inception"
  buscarPeliculas('Inception');