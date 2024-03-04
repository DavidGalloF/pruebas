/* var hola = "Pene";
        let hola1 = "Vagina";
        console.log(hola1);
         */
console.time("Tiempo");
const PENE = 3.1416;
console.log(PENE);

let obj = { nom: "Jon", edad: 5 };
console.log(obj);

obj.correo = "penen@hotmail.com";
obj.edad = 10;
console.log(obj);

const objeto = { nom: "Jon", edad: 5 };
console.log(objeto);

objeto.correo = "penen@hotmail.com";
objeto.edad = 10;
console.log(objeto);

//strings normales
let name = "David";
let lastnames = new String("Gallo Franco");

console.log(name, lastnames);
console.log(name.toLowerCase(), lastnames.toUpperCase());

let lorem = "lorem ipsum amet lorem";
console.log(lorem.includes("Lorem"), lorem.split(" "));

let lorem2 = "        lorem ipsum amet lorem       ";
console.log(lorem2, lorem2.trim());

let saludo = "Hola mi nombre es:" + name + " " + lastnames;
let saludo2 = `Hola mi nombre es ${name} ${lastnames}`;

console.log(saludo);
console.log(saludo2);

saludo += " mamahuevo";
console.log(saludo);

// strings de varias lineas con  sintaxis
let ul = `
        <lu>
          <li>"Primavera"</li>
          <li>'Verano'</li>
          <li>'Otono'</li>
          <li>"Invierno"</li>
        </lu>`;
console.log(ul);

//Numbers
let n1 = 2;
let n2 = new Number(5.722);
let n3 = "2.5";

console.log(n2.toFixed(1));
console.log(n2.toFixed(5));
console.log(parseInt(n2));

console.log(typeof n1, typeof n2, typeof n3);

console.log(n2 + n3);
console.log(n2 + parseInt(n3));
console.log(n2 + parseFloat(n3));

//booleanos
let verdadero = true;
let falso = false;

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hola"));
console.log(Boolean([]));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Undefined es una variable sin valor asignada por javascript
let indefinida;
console.log(indefinida);
// Null es una variable sin valor declarada asi apropocito por el programador
let nulo = null;
console.log(nulo);
//NaN es una operacion imposible
let noEsUnNumero = "HOLA" * 3.7;
let noEsUnNumero2 = 2 / 0;
let noEsUnNumero3 = indefinida * nulo;
console.log(noEsUnNumero);
console.log(noEsUnNumero2);
console.log(noEsUnNumero3);

// Funcion declarada
contar();
function contar() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  console.log("Ya!");
}

contar();

// funcion con parametros y valores default
function sumar(a = 0, b = 0) {
  return a + b;
}

console.log(sumar(5, 5.93));
console.log(sumar());

//Funcion anonima y funcion expresada
const expresada = function () {
  console.log("Esta funcion esta declarada en una variable");
};

expresada();

// Arreglos
const array1 = [];
const array2 = [1, true, "Hola", [1, 2, 3]];
console.log(array1);
console.log(array2);
console.log("tamaño: " + array2.length);
console.log(array2[0]);
console.log(array2[3]);
console.log(array2[3][2]);

//Llenar
const array3 = Array(10).fill(1);
console.log(array3);
console.log(array3.length);

array3.fill(2, 2, 10);
console.log(array3);

//agregar, eliminar
const colores = Array.of("Azul", "Blanco", "Cafe");
console.log(colores);

colores.push("Necgro");
console.log(colores);
colores.pop();
console.log(colores);

//forEach en arreglos
colores.forEach(function (color, i, a) {
  console.log(`<li id="${i}">${color}</li> to "${a}"`);
});

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

let objeto1 = new Counter();
objeto1.add([2, 5, 8, 3]);

console.log(objeto1.count);
console.log(objeto1.sum);

// objetos
const obj1 = {};

const david = {
  nombre: "David",
  apellido: "Gallo",
  nacimiento: "03-07-2001",
  pasatiempos: ["Jugar videojuegos", "Leer manga"],
  contacto: {
    correo: "todi500000@hotmail.com",
    celular: "3242944012",
  },
  saludar: function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(david);
console.log(david["pasatiempos"]);
console.log(david.pasatiempos[1]);
console.log(david.contacto);
console.log(david.contacto.celular);
david.saludar();

console.log(Object.keys(david));
console.log(Object.values(david));
console.log(david.hasOwnProperty("nombre"));

// Operadores
// Aritmeticos
let num1 = 5 + (5 * 10) / 2 + (2 + 3) * 2;
console.log(num1);

let modulo = 5 % 2;
console.log(modulo);

// Relacionales

console.log(8 < 9);
console.log(9 < 8);
console.log(8 <= 9);
console.log(9 <= 8);
console.log(7 > 7);
console.log(7 >= 7);

/*
      = es asignacion
      == es comparacion de valores (Mala practica)
      === es comparacion de valores y tipo de dato
      */
console.log(7 == 6);
console.log(7 == 7);
console.log("7" == 7);
console.log("" == 0); // con undefined, null y NaN no funciona
console.log([] == ""); // xd bolean de [] es tru y bolean de "" es false pero son iguales
console.log("7" === 7);
console.log(7 === 7);
console.log([] === "");
console.log("" === 0);
console.log("7" != 7);
console.log("7" !== 7);
// Incremento y decremento

let i = 1;
i += 2;
console.log(i);
i -= 4;
console.log(i);
i *= 9;
console.log(i);
i /= 3;
console.log(i);
++i;
console.log(i);
i++;
console.log(i);
--i;
console.log(i);
i--;
console.log(i);

let j = 1;
console.log(j);
console.log(j++);
console.log(++j);

// Operadores logicos

console.log(!true);
console.log(9 === 9 || 0 === "0");
console.log(8 === 0 || 0 === "0");
console.log(9 === 9 && 0 === "0");
console.log(9 === 9 && 0 === 0);

// If
let age = 17;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let hora = 13;
if (hora >= 0 && hora < 5) {
  console.log("Dejame dormir");
} else if (hora >= 5 && hora < 12) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora < 19) {
  console.log("Buenas tardes");
} else if (hora >= 19 && hora < 24) {
  console.log("Buenas noches");
} else {
  console.log("Hora incorrecta");
}

// Operador terniario= (condicion) ? verdadero : falsa

console.log(age < 18 ? "Eres menor de edad" : "Eres mayor de edad");

// switch

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("Dia incorrecto");
    break;
}

let contador = 0;
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10);

for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  console.log("numero " + numeros[i]);
}

for (const key in david) {
  console.log(`Key= ${key}, Value= ${david[key]}`);
}

let cadena = "Hola Mundo";
for (const elem of cadena) {
  console.log(elem);
}

// try

try {
  console.log("Try");
  hola;
  console.log("no se ejecuta");
} catch (error) {
  console.log("Error", error);
} finally {
  console.log("Siempre se ejecuta");
}

try {
  let n = "q";
  if (isNaN(n)) {
    throw new Error("El caracter no es un numero");
  }
  console.log(n * n);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}

// reduce
const array = [1, 2, 3, 4];

const initialValue = 1;
let sumWithInitial = array.reduce(
  (accumulator, currentValue) =>
    currentValue % 2 === 1
      ? accumulator - currentValue
      : accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);

sumWithInitial = array.reduce(
  (accumulator, currentValue) =>
    currentValue % 2 === 1 ? (accumulator = "impar") : (accumulator = "par"),
  initialValue
);
console.log(sumWithInitial);

sumWithInitial = array.reduce(
  (accumulator, currentValue) => (currentValue % 2 === 1 ? "impar" : "par"),
  initialValue
);
console.log(sumWithInitial);

// every

let grupo = [18, 21, 19, 33];

const validar = (mayores) =>
  mayores.every((i) => i >= 18)
    ? "El grupo puede pasar"
    : "El grupo no puede pasar";
console.log(validar(grupo));

grupo.push(17);
console.log(validar(grupo));

// break y continue

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 1) {
    continue;
  }
  console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
  if (Math.pow(numeros[i], 2) > 49) {
    break;
  }
  console.log(`El cuadrado de ${numeros[i]} es: ${Math.pow(numeros[i], 2)}`);
}

// Destructuracion

// los arreglos, string y map son iterables por lo que se pueden anexar en linea
let [uno, dos, tres, cuatro] = numeros;
console.log(uno, dos, tres, cuatro);
// los objetos no son iterables por lo que se tiene que usar como nombre de variable la key y no importa el orden
let { nombre, pasatiempos, apellido, nacimiento, contact } = david;
console.log(nombre, pasatiempos, apellido, nacimiento, contact);

// Entries
const coloresEntradas = colores.entries();
for (const i of coloresEntradas) {
  console.log(i);
}
console.log(coloresEntradas);

const davidEntradas = Object.entries(david);
for (const i of davidEntradas) {
  console.log(i);
}
console.log(davidEntradas);

const obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj)) {
  console.log(country, capital);
}

// objetos abreviados
let nombreMascota = "Pacho",
  edadMascota = 7;

const perro = {
  nombre: nombreMascota,
  edad: edadMascota,
};

const dog = {
  nombreMascota,
  edadMascota,
  ladrar() {
    console.log("Guau guau");
  },
};

console.log(perro);
console.log(dog);
dog.ladrar();

// rest (...)
function sumar(...valores) {
  console.log(`Los valores son ${valores} y son de tipo ${typeof valores}`);
  let res = 0;
  valores.forEach(function (n) {
    res += n;
  });
  return res;
}
console.log(sumar(1, 2, 3, 4));

function sumar2(valores) {
  return valores.reduce((a, b) => a + b);
}
console.log(sumar2([1, 2, 3, 4]));
console.log(sumar2(numeros));

// spread
const array4 = [1, 2, 3, 4, 5],
  array5 = [6, 7, 8, 9, 10];
const array6 = [array4, array5],
  array7 = [...array4, ...array5];
console.log(array6);
console.log(array7);

// Funcion constructora (prototipos)
function Animal(nombre, especie) {
  (this.nombre = nombre),
    (this.especie = especie),
    (this.emitirSonido = function () {
      console.log("Emitir sonido");
    });
}

const gato = new Animal("Luna", "Gato"),
  conejo = new Animal("Bunny", "Conejo");
console.log(gato, conejo);

// Añadir metodos (si se usan funciones constructoras es mejor añadirlos)
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} y soy un ${this.especie}`);
};

//Herencia con prototipos
gato.saludar();
conejo.emitirSonido();

function Perro(nombre, especie, genero) {
  this.super = Animal;
  this.super(nombre, especie);
  this.genero = genero;
}

// Herencia
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobrescribir metodos en prototipos
Perro.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} y soy un ${this.especie} y soy un ${this.genero}`
  );
};

Perro.prototype.ladrar = function () {
  console.log("Guau guau");
};

const todi = new Perro("Todi", "Perro", "Macho");

console.log(todi);
todi.emitirSonido(); //no se puede sobreescribir
todi.saludar();
todi.ladrar();

//Clases simtacticas
class AnimalClase {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.peso = null;
  }

  emitirSonido() {
    console.log("Emitir sonido");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} y soy un ${this.especie}`);
  }
}

const mimi = new AnimalClase("Mimi", "Raton");

console.log(mimi);
mimi.saludar();
mimi.emitirSonido();

//Herencia con clases
class Raton extends AnimalClase {
  constructor(nombre, especie, peso, genero) {
    super(nombre, especie, peso);
    this.genero = genero;
  }

  static descripcion() {
    console.log(
      "Los roedores pertenecen al orden Rodentia y representan el grupo más numeroso y diverso de los mamíferos, en este orden se encuentran las ratas y ratones, ardillas, castores, capibaras, etc"
    );
  }
  chillar() {
    console.log("**Chillar**");
  }
  // Sobre escribir metodos
  emitirSonido() {
    console.log(`Soy un ${this.especie} y chillo`);
  }
  saludar() {
    console.log(
      `Hola me llamo ${this.nombre} y soy un ${this.especie} y soy ${this.genero}`
    );
  }
  get getPeso() {
    return this.peso;
  }
  set setPeso(peso) {
    this.peso = peso;
  }
}

const mickey = new Raton("Mickey", "Raton", "Macho");
console.log(mickey);
mickey.chillar();
mickey.emitirSonido();
mickey.saludar();

Raton.descripcion();

mickey.setPeso = 2.5;
console.log(mickey.peso);
console.log(mickey.getPeso);

// Objeto consola
console.log(console);

console.error("Un error");
console.warn("Un aviso");
console.info("Un mensaje informativo");
console.log(`Hola mi nombre es %s %s y tengo %d`, name, lastnames, age);

//console.clear();

console.log(document);
console.dir(document);

console.dir(david);
console.dir(mickey);

console.group("CUENTA REGRECIBA!");
console.log("Tres");
console.log("Dos");
console.log("Uno");
console.log("Ya!");
console.groupEnd;

console.table(Object.entries(console));
console.table(colores);
console.table(coloresEntradas); // el iterador de array no se pued plotear en tabla
console.table(davidEntradas);
console.table(david);

const arreglo = Array(1000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Tiempo");

for (let i = 0; i < 10; i++) {
  console.count("yes");
  console.log("no mames");
}

let n4 = 20,
  n5 = 8,
  text = "X deberia ser menor que Y";
console.assert(n4 < n5, { n4, n5, text });
console.assert(n4 < n5, { text });
console.assert(n4 < n5, text);

// Date

console.log(Date());
let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getTime());
console.log(Date.now());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toJSON());
console.log(fecha.toLocaleString());
console.log(fecha.toTimeString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());

nacimiento = new Date(2001, 6, 3);
console.log(nacimiento);
let naci = new Date("2001-07-03T03:24:00");
console.log(naci);

// Math
console.log(Math);
console.log(Math.abs(-7.8));
console.log(Math.round(7.5));
console.log(Math.ceil(6.1));
console.log(Math.floor(7.9));
console.log(Math.random());
console.log(Math.round(Math.random() * 10));
console.log(Math.sign(-3));

// Cortocircuito
function hola(nombre) {
  console.log(nombre || "Desconocido");
}
hola();
//el or si el primer dato tiende a verdadero lo imprime sino imprime el otro
console.log("Valor izquierda" || "Valor derecha");
console.log(true || "Valor derecha");
console.log(null || "Valor derecha");
console.log(false || "Valor derecha");
console.log(undefined || null);
//el and si el primer dato tiende a falso lo imprime sino imprime el otro
console.log("Valor izquierda" && "Valor derecha");
console.log(true && "Valor derecha");
console.log(null && "Valor derecha");
console.log(false && "Valor derecha");
console.log(undefined && null);

// alert, confirm, prompt
//console.log(alert("Alerta"))
//console.log(confirm("Eres gay?"))
//console.log(prompt("Tamaño del pene?"))

console.clear();
//
let cad =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

let expReg1 = new RegExp("Lorem", "ig");
let expReg2 = /lorem/i;
console.log(expReg1);
console.log(expReg1.test(cad));
console.log(expReg1.exec(cad));

console.log(expReg2);
console.log(expReg2.test(cad));
console.log(expReg2.exec(cad));
console.log(cad.match(expReg1)); // LA EXPRECION DEBE SER GLOBAL

let regex = /[A-Z]/g;

console.log(cad.match(regex));

cad.matchAll(regex).forEach(function (n) {
  console.log(n);
});

const arreglo2 = [...cad.matchAll(regex)];
console.log(arreglo2[0]);

(function (d, w, c) {
  console.log("Función anonima auto-ejecutable", d);
  c.dir(document);
})(document, window, console);
