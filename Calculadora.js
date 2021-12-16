const validarSigno=(a,b,fun)=>{
  var numA=Math.abs(a);
  var numB=Math.abs(b);
  if((a<0 && b>0)|| (a>0 && b<0)){
    return resta(0,fun(numA,numB))
  }
  return fun(numA,numB)
}

const createArrayDivi=(rango,salto)=>Array.from({ length: rango - 1  }, (_, i) => multi(i+1,salto))

const createArray=(a,b)=>Array(b).fill(a);

const suma=(a,b)=>a+b;
 
const resta=(a,b)=>a-b;

const multi=(a,b)=>createArray(a,b).reduce(suma,0)

const cont=(a)=>a+1

const divi=(a,b)=>createArrayDivi(a,b).filter(num=>a>resta(num,b)).reduce(cont,0);
try{
  /*
  eL Prompt Permite mostrar un mensaje e ingresar datos por consola
  Al utilizar node este no funcionará porque no lo soporta
  Se encuentra en este replit
  https://replit.com/@sebastianlope50/Calculadora#index.js
  Por esto se quemaran los datos
const a=parseInt(prompt("Ingrese el primer numero",0));
const b=parseInt(prompt("Ingrese el segundo numero",0));
const opt=parseInt(prompt("Ingrese la operacion: \n1.Suma.\n2.Resta\n3.Multiplicacion\n4.Division\n",0));
*/
  const a=5;
  const b=0;
  //Se maneja un opt para manejar si quiere 1. sumar, 2.Restar, 3.multiplicar y 4.dividir
  const opt=1;
  switch(opt){
    case 1:
      console.log(suma(a,b))
       break;
    case 2:
      console.log(resta(a,b))
      break;
    case 3:
      console.log(validarSigno(a,b,multi))
       break;
    case 4:
    b!==0?console.log(validarSigno(a,b,divi)):console.log("No se permite denominador 0")
  
      break;
    default:
      console.log("Ingreso un valor incorrecto")
  }
}catch(Error){
  console.log("Algun valor ingresado no fue correcto")
};
