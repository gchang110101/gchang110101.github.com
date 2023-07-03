//DOM
/* let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
}) 

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click", function(){
        console.log(this);
    })
})
*/

/* let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star");
});
 */

//obtener elementos de la clase .close  
//recorrerlos
//agregar un evento click a cada uno

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault();

        let content = document.querySelector('.content');
        content.classList.remove("animate__bounceInLeft");
        content.classList.remove("animate__animated");
        
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/";
        }, 600);

        /*setInterval*/

        return false;
    });
});
