//prueba animaciones
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion');
    let imagenes1 = animacion.getBoundingClientRect().top;
   //* console.log( imagenes1);
    let tamañoDePantalla = window.innerHeight/2 
    if(imagenes1 <= tamañoDePantalla){
        animacion.style.animation = 'mover 1.5s ease-out '
    }
})

window.addEventListener('scroll', function(){
    let animacion2 = document.getElementById('animacion2');
    let imagenes2 = animacion2.getBoundingClientRect().top;
   //* console.log( imagenes2);
    let tamañoDePantalla = window.innerHeight/2 
    if(imagenes2 <= tamañoDePantalla){
        animacion2.style.animation = 'mover2 1.5s ease-out '
    }
})

/** imput */
const book = 12000
 const retrato = 1000

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener('click',function(e){
    e.preventDefault();
    let pregunta1 =  document.getElementById("pregunta1").value;

    let nombres = document.getElementById("pregunta2").value;
    while(  Number(nombres) || nombres == " "  ) {
        nombres = document.getElementById("resultado").innerHTML = '<h3 class="text-danger">Inserte nombre ( solo letras )</h3>'
    }
    

    //*localStorage, guarda ultima cantidad de fotos.

localStorage.setItem("nombreUsuario", nombres);
 localStorage.setItem("cantidadDeFotos", pregunta1); 
(()=>{
    const canFotos = localStorage.getItem("cantidadDeFotos")
    if( canFotos === 0 || canFotos == "" ){
        return  canFotos === Number(15);
            }
})();



    function cantidadDeFotos(pregunta1){

        if(parseInt(pregunta1) <=15){    
        return book; } 
            else if(parseInt(pregunta1)> 15)  { 
                return retrato * parseInt(pregunta1);
            }
         };
        /** presupuesto simple */
        
            let presupuesto = "Este es el monto total a pagar"+ " "+ cantidadDeFotos(pregunta1);
           
            let mostrar = document.getElementById("resultado");
            mostrar.innerHTML = `<h3>hola  ${nombres},<br> ${presupuesto}</h3> <br><br> <button class="detallado"> <h1 class="detallado">Presupuesto detallado</h1> </button>` ; 

            function cantidadDeFotos(pregunta1){

                if(parseInt(pregunta1) <=15){    
                return book; } 
                    else if(parseInt(pregunta1)> 15)  { 
                        return retrato * parseInt(pregunta1);
                    }
                 };
           
        
                             //* precio de los tipos de fotografia**/
                  
        /* fin del presupuesto*/
        
        /** horarios jornada */
        let jornada = ["2hs", "4hs","8hs"]
        /** jornada segun cantidad de fotos */
        function duracion(pregunta1) {
            if ( (pregunta1 <= 15)){
                return jornada[0];
            } else if ( pregunta1 >= 16 && pregunta1 <= 50){
                return jornada[1];
            }
            else { return jornada[2]};
        }
        /** objeto presupuesto detallado */
        let PresupuestoDetallado ={ 
           nombre : nombres,
           cantidadDeFotos : pregunta1,
           duracion : duracion(pregunta1),
           precio : cantidadDeFotos(pregunta1) 
        };
        
        
        console.log(PresupuestoDetallado);
        
        localStorage.getItem("ultimoPreDetallado",JSON.stringify(PresupuestoDetallado));

        mostrar.addEventListener('click',(e) => {
            e.preventDefault();
            console.log(e.target);
        if(e.target.classList.contains('detallado')){
            divDetallado.innerHTML = `<h3>${JSON.stringify(PresupuestoDetallado)}" </h3>`;
             /*   console.log("cliqueaste en Presupuesto detallado") */ }
                else { console.log("nada")};
             } )
            
             function recordarCfotos (){
                return divDetallado.innerHTML(`${JSON.stringify(canFotos)}`),
                console.log(canFotos);
            }
             
      });
         
      const divDetallado = document.getElementById("presupuesto");

     
      

/*let mostrar = document.getElementById("resultado");
    mostrar.innerHTML = JSON.stringify(PresupuestoDetallado);*/