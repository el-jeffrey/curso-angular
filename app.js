"use strict";
(function () {
    /**
     class animal {
        nombre: string = '';
        comer=()=>{
            console.log(`${this.nombre} inicia la habilidad de comer.`);
        }
    }

    var perro = new animal();
    perro.nombre='Byron';
    perro.comer();

    var gato = new animal();
    gato.nombre='Oscar';
    gato.comer();
     */
    /*
    class Hombre {
        nombre: string = '';
        onOrinar = () => {
            console.log(`${this.nombre} está orinando.`)
        }
    }

    const javier: Hombre = new Hombre();
    javier.nombre = 'javier';
    javier.onOrinar();

    class Policia extends Hombre {
        onAtraparLadrodes = () => {
            console.log(`${this.nombre} está atrapando ladrones.`)
        }
    }

    let oSandoval: Policia = new Policia();
    oSandoval.nombre = 'Oscar Sandoval';
    oSandoval.onOrinar();
    oSandoval.onAtraparLadrodes();
    */
    /*
    class GTP {
        nombre: string = '';
        constructor(pNombre: string) {
            console.log(pNombre,'nombre de instancia');
            this.nombre = pNombre;
            this.start();
        }
        start = () => {
            console.log(`${this.nombre} starting...`)
        }
        goEstacion = (nro_estacion: number) => {
            console.log(`${this.nombre} is going to station number ${nro_estacion}...`)
        }
    }

    var oRobots: GTP = new GTP('TOR001');
    oRobots.nombre='x';
    oRobots.start();
    oRobots.goEstacion(2);
*/
    class dummy {
        constructor(color, tamanio_base) {
            this.color = color;
            this.tamanio_base = tamanio_base;
        }
    }
    //Crear una clase que se llame figura
    //Crear clases cuadrado y triangulo
    //tamaño_base
    //color, método que sea calcular_area(cuadrado: base*base, triangulo:base*h/2)
    //extender propiedades que crean necesaria
    class Figura {
        constructor(color, base) {
            this.color = color;
            this.base = base;
        }
    }
    class Triangulo extends Figura {
        constructor(color, base, altura) {
            super(color, base);
            this.getArea = (b, h) => b * h / 2;
            console.log(`El área del triangulo de color ${color} es ${this.getArea(base, altura)}`);
        }
    }
    class Cuadrado extends Figura {
        constructor(color, base) {
            super(color, base);
            this.getArea = (b) => b * b;
            console.log(`El área del cuadrado de color ${color} es ${this.getArea(base)}`);
        }
    }
    var oTri = new Triangulo('Azul', 3, 2);
    var oCuadrado = new Cuadrado('Rojo', 3);
})();
