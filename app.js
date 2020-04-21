"use strict";
(function () {
    var nombre = 'OTorres';
    var edad = 24;
    var fecha_nacimiento = new Date();
    var modo_vacaciones = 4;
    var nombre_dev = 'Javier';
    if (true) {
        var nombre_dev_1 = 'Sandoval';
    }
    function name(parametro) {
        console.log('-Mi nombre es:' + nombre + '. \n-Mi edad es: ' + edad);
        console.log("\n-Mi nombre es: " + nombre + ". \n-Mi edad es: " + edad);
    }
    name(nombre_dev);
})();
