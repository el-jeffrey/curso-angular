(function () {

    //Tipos de Parámetros:
    //Obligatorios, Opcionales se declaran (?:tipo_de_dato), Por Defectos

    /*function suma(a: number, c: number = 5, b?: number): number {
        if (b) {
            return a + b + c;
        }
        return a + c;
    }

    console.log(suma(1,2));
    */

    //Función con nombre
    /*
    function picking(cantidad: number, posicion?: string, msu: string = 'MJ') {
        return `Robots pickeando ${cantidad} productos en la MSU ${msu}, en la posición ${posicion}`;
    }
    console.log(picking(4, 'A5'));
    */

    //Funciones Anónimas Sintaxis
    /*var x = function (a: number, b: number) {
        return a + b;
    }
    console.log(x(4, 7));*/

    /*
        
        //Función con nombre
        function saludar() {
            console.log(mensaje())
            function mensaje() {
                return otraFuncion();
                function otraFuncion(){
                    return 'Jeffrey'
                }
            }
        }
    
        //Función con nombre
        function saludarAnom() {
            var mensaje = function () {
                return 'Jeffrey'
            }
            console.log(mensaje())        
        }
    
        saludar();
        saludarAnom();
    */

    /** Ejercicio 1
     * a=2;
     * b=3;
     * res = (2*2) + (3*3);
     * res= 4+9 =13;
     */


})();
