export class Provincia {
    id: string;
    nombre: string;
    lat: string;
    lon: string

    constructor(id: string, nombre: string, lat: string, lon: string) {
        this.id = id;
        this.nombre = nombre;
        this.lat = lat;
        this.lon = lon;
    }
}
