(function () {

    /** Ejercicio 1
     * a=2;
     * b=3;
     * res = (2*2) + (3*3);
     * res= 4+9 =13;
     */


    var sumaCuadrados = (a: number, b: number) => {
        var cuadrado = (valor: number) => valor * valor;
        return (cuadrado(a) + cuadrado(b));
    }

    console.log(`El cuadrado es: ${sumaCuadrados(5, 8)}`)


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

    var suma = (a: number, b: number) => a + b;

    function sumaNormal(a: number, b: number) {
        return a + b;
    }

    console.log(suma(1, 2));
    console.log(sumaNormal(1, 2));

    const SKU: any = {
        nombre: 'Taladro',
        saludar() {
            setTimeout(function name() {
                console.log(`Hola, soy el sku ${this.nombre}`)
            }, 200);
            setTimeout(() => {
                console.log(`Hola flecha, soy el sku ${this.nombre}`)
            }, 1000);
        }
    }

    SKU.saludar();

})();
