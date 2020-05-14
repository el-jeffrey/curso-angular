export class Estudiante {
    constructor(
        public nombres: string = '',
        public cumpleanios: Date = null,
        public correo: string = '',
        public mensualidad: number = null
    ) {}

    obtenerEdad = () => {
        if (this.cumpleanios != null) {
            return 2020 - parseInt(this.cumpleanios.toString().substring(0, 4));
        }
        else
            return 0
    }
}