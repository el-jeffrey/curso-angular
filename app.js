"use strict";
(function () {
    /*
    console.log('start')

    const promesa = new Promise((resuelto, fallo) => {
        fallo('tobn')
    })

    promesa.then(x => console.log(x))
        .catch(x => console.warn(x, 'error'))

    console.log('end')
    */
    const pincking = (cantidad) => {
        let inventario = 50;
        return new Promise((resuelto, fallo) => {
            if (cantidad > inventario) {
                fallo(`No hay cantidad suficiente en inventario`);
            }
            else {
                resuelto(`Ok, el nuevo saldo es ${(inventario -= cantidad)}`);
            }
        });
    };
    pincking(80)
        .then(x => console.log(x))
        .catch(x => console.error(x));
})();
