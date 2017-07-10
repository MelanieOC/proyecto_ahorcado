function obtenerPalabraSecreta() { //funcion para obtener una palabra aleatoria
  var libreriaPalabras = ["multimedia", "internauta", "servidor", "protocolo", "cortafuegos","navegador", "nodo", "marco", "pagina", "telaraña",
  "descargar", "virtual", "memoria", "disco", "local", "conectar", "desconectar", "encaminador", "internet", "dominio","dinamico", "hipervinculo",
  "enlace", "marcador", "ordenador", "lapiz", "ofimatica", "informe" ];
  var indice = Math.round ( Math.random() * 27 );
  var cadena = new String( libreriaPalabras[indice] );
  var palabra = cadena.split('');
  return palabra;
}
//variable hombre donde contiene para dibujar el ahorcado
var hombre =  [        "______" + '<br/>',
                       "   | " + '<br/>',
                       "   | " + '<br/>',
                       "   O" + '<br/>',
                       " /\n",
                       "| " ,
                       "\\\n   " + '<br/>',
                       " /     ",
                       "\\\n  " + '<br/>',
                       "______" + '<br/>'];

var palabra = obtenerPalabraSecreta();//se obtiene la palabra aleatoria
var letras = []; // se crea un array para las letras que se vaya "adivinando"
function palabraSecreta() { //funcion que encripta la palabra aleatoria
  var start='';
  for (var i = 0; i < palabra.length;i++){
    start += '*';
  }
  return start;
}
function inicio() { //funcion inicio, que muestra en la pantalla la palabra encriptada
  document.getElementById('palabra').innerHTML = 'Palabra a adivinar: ' + palabraSecreta();
}

function imprimirletra(letras) { //funcion que muestra las letras encontradas
  var start=palabraSecreta().split(''); //la palabra encriptada se divide en elementos de un array
  for (var i = 0; i < palabra.length;i++){
    for(var j = 0; j< letras.length;j++){//se evalua cada letra de ambos arrays
      if(letras[j]==palabra[i]){
        start[i] = letras[j];//se reemplaza un asterico por letra encontrada en la posicion que corresponde
      }
    }
  }
  if(start.indexOf('*')==-1){ //si ya no se encuentra ningun asterico se indica al usuario que ganó el juego
    alert('Ganaste!!!')
  }
  document.getElementById('palabra').innerHTML ='Adivinando: ' + start.join('');
}

function validar() { //funcion que valida si se encontro la palabra ingresada
  var letra = document.getElementById('letra').value.toLowerCase();//letra ingresada, discriminando si es mayuscula o minuscula
  if(letra==''){ //si no se ingresa nada
    alert('Ingresa una letra')
  } else {
    letras.push(letra); //se agrega al array letras la letra ingresada
  }

  var fallos = 0;
  for(var i =0; i < letras.length; i ++){
    if(palabra.indexOf(letras[i])==-1){
      fallos++; //si no existe en la palabra la letra ingresada aumenta el numero de fallos
    }
  }
  imprimirletra(letras); //se imprime las letras encontradas
  document.getElementById('utilizadas').innerHTML ='Letras utilizadas:' + '<br/>' + letras; //se imprime las letras que se ingresa
  var dibujo = '';
  for(var i = 0; i < fallos; i++){
     dibujo += hombre[i]; //se crea un string con la figura del ahorcado dependiendo de la cantidad de fallos
  }
  document.getElementById('resultado').innerHTML = dibujo;//se imprime el dibujo
  if(fallos == 10){
    alert('Perdiste\n' + 'La palabra era: ' + palabra.join('')); //si se llega a diez fallos perdió
  }

  document.getElementById('letra').value = ''; //se borra el valor anterior en la caja de texto para que llene de nuevo
}
function Reiniciar() { //funcion para volver a jugar
  palabra = obtenerPalabraSecreta();
  inicio();
  document.getElementById('utilizadas').innerHTML='';
  document.getElementById('adivinando').innerHTML='';
  document.getElementById('resultado').innerHTML='';
  letras = [];
}
