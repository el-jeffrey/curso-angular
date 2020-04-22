"use strict";
(function () {
    /** Ejercicio 1
     * a=2;
     * b=3;
     * res = (2*2) + (3*3);
     * res= 4+9 =13;
     */
    var sumaCuadrados = function (a, b) {
        var cuadrado = function (valor) { return valor * valor; };
        return (cuadrado(a) + cuadrado(b));
    };
    console.log("El cuadrado es: " + sumaCuadrados(5, 8));
    /*
   function saludar(destinatario: string): void {
       console.log(`Hola ${destinatario}`)
   }

   var saludarArrow=(destinatario:string)=>{
       console.log(`Hola ${destinatario}`);
   }

   saludar('Oscar');
   saludarArrow('OscarArrow');
   */
    var suma = function (a, b) { return a + b; };
    function sumaNormal(a, b) {
        return a + b;
    }
    console.log(suma(1, 2));
    console.log(sumaNormal(1, 2));
    var SKU = {
        nombre: 'Taladro',
        saludar: function () {
            var _this = this;
            setTimeout(function name() {
                console.log("Hola, soy el sku " + this.nombre);
            }, 200);
            setTimeout(function () {
                console.log("Hola flecha, soy el sku " + _this.nombre);
            }, 1000);
        }
    };
    SKU.saludar();
})();
