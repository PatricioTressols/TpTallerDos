    const cargarVideoJuego = () => {

        const valueInput = document.getElementById("VideoJuego");
      
        let VideoJuegos = []
      
        fetch("../json/videojuego.json")
        .then((res)=> res.json())
        .then((data)=>{
            VideoJuegos = data.VideoJuegos
            mostrarVideoJuegos(VideoJuegos)   
        })
        .catch((error)=>{
          console.log(error)
        }) 
      
        const encontrarVideoJuego = (e) => {
      
                  const valorInput = e.target.value.toLowerCase()
      
                  const arrayVideoJuegos = VideoJuegos.filter(VideoJuego => {
      
                    return VideoJuego.nombre.toLowerCase().indexOf(valorInput) != -1
      
                  })
                    mostrarVideoJuegos(arrayVideoJuegos)
             }
      
                valueInput.addEventListener("keyup", encontrarVideoJuego)    
      }
      
      document.addEventListener("DOMContentLoaded", cargarVideoJuego)

      const mostrarVideoJuegos = (VideoJuegos) => {
      
        const mostrar = document.getElementById("mostrar");
      
        let html = "";

        if(VideoJuegos.length > 0){
            VideoJuegos.forEach((dato)=>{
                html += `           
                  <div class="card m-5 p-3" style="width: 15rem;">
                      <img src="${dato.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">${dato.nombre}</h5>
                              <p class="card-text">${dato.descripcion}</p>
                              <a href="${dato.trailer}" target="_blank" class="btn btn-primary">Trailer del Video Juego en youtube</a>
                          </div>
                  </div>
                    `
              })
        }else{
            html += `<h2>No se ha encontrado el video juego solicitado en nuestro sitio!!</h2>`
        }
        mostrar.innerHTML = html
     }
