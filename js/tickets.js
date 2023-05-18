var form = document.getElementById("myForm");
var nombre = document.getElementById("inputNombre");
var apellido = document.getElementById("inputApellido");
var correo = document.getElementById("inputCorreo");
var inputCantidad = document.getElementById('inputCantidad');
var inputCategoria = document.getElementById('inputCategoria');
var totalApagar = document.getElementById('totalApagar');
const btnClick = document.getElementById('compra-btn');
btnClick.addEventListener("click",validarFormulario);

function validarFormulario(){

  if (contieneNumeros(nombre)) {
    alert("Nombre no debe contener números");
    nombre.focus();
    return false;
  } else if (contieneNumeros(apellido)) {
    alert("Apellido no deben contener números");
    apellido.focus();
    return false;
  }

  if (!esCorreoValido(correo.value)) {
    alert("Ingrese una dirección de correo válida");
    correo.focus();
    return false;
  }

  if (!esCantidadValida(inputCantidad.value)) {
    alert("Ingrese una cantidad de tickets válida");
    inputCantidad.focus();
    return false;
  }

  actualizarMontoTotal();
  return true;
}

function esCorreoValido(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function contieneNumeros(input) {
  var numberRegex = /\d/;
  return numberRegex.test(input);
}

function esCantidadValida(cantidad) {
  var cantidadRegex = /^[1-9]\d*$/;
  return cantidadRegex.test(cantidad);
}

function actualizarMontoTotal() {
  var cantidad = inputCantidad.value;
  var categoria = inputCategoria.value;
  var precioUnitario = 200;
  var descuento = 0;

  if (categoria === 'estudiante') {
    descuento = 0.2; 
  } else if (categoria === 'trainee') {
    descuento = 0.5; 
  } else {
    descuento = 0.85;
  }

  var total = precioUnitario * descuento * cantidad;
  totalApagar.textContent = 'Total a Pagar $: ' + total;
}
