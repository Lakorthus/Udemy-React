// const nombre = "julio velezmoro";
// const altura = 190;
/*
const concat = `${nombre}  altura ${altura}cm`



if(altura>= 190){
    datos.innerHTML += `<h1>Eres muy alto</h1>`
}else{
    datos.innerHTML += `<h2>Eres enano</h2>`
}

for(var i = 2000; i<=2020;i++){
    datos.innerHTML += `<h3>Estamos en el año: ${i}</h3>`
}
*/
function muestraMiNombre(nombre, altura) {
  const miDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi altura es: ${altura} cm</h2>`;

  return miDatos;
}
function imprimir() {
  const datos = document.getElementById("datos");
  datos.innerHTML = muestraMiNombre("Julio", 24);
}
imprimir();

const grupoNombres = ["Julio", "Ana", "Jean", "Innes"];

document.write("<h1>Listado de Nombres</h1>");
// for(i=0; i <grupoNombres.length;i++){
//     document.write(grupoNombres[i]+'<br/>')
// }
grupoNombres.forEach((nombre) => {
  document.write(nombre + "<br/>");
});
// jason
const carrito = {
  modelo: "Fiat Clasic",
  maxKm: 120,
  year: 80,
  mostrarDatos() {
    console.log(this.modelo, this.maxKm, this.year);
  },
  valor: 1200,
};

document.write(`<h1>${carrito.modelo}</h1>`);
carrito.mostrarDatos();
console.log(carrito);

// Promesas

const saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
      let saludo = false;
      
      if(saludo){
          resolve(saludo);
      }else{
          reject('No hay saludo disponible')
      }

  }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(error =>{
alert(error)
});