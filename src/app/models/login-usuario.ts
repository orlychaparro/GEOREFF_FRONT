export class LoginUsuario {
    nombreUsuario: string;
    password: string;
    nombre: string;
    email: string;

    constructor(nombreUsuario: string, password: string, nombre: string, email:string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
    }
}
