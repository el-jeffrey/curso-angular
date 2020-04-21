(function () {

    var nombre: string = 'OTorres';
    var edad: number = 24;
    var fecha_nacimiento: Date = new Date();
    var modo_vacaciones: any = 4;

    let nombre_dev: string = 'Javier';

    if (true) {
        let nombre_dev = 'Sandoval'
    }

    function name(parametro: string) {
        console.log('-Mi nombre es:' + nombre + '. \n-Mi edad es: ' + edad)
        console.log(`
-Mi nombre es: ${nombre}. 
-Mi edad es: ${edad}`)
    }


    


    name(nombre_dev);

})();
