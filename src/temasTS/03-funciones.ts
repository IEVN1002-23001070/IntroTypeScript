function sumar(a: number, b: number): number {
    return a + b;
}

const resultado = sumar(4, 3);
console.log(resultado);


function multiplicar(n1: number, base: number = 6): number {
    return n1 * base;
}

console.log(multiplicar(3, 5));
console.log(multiplicar(3));




interface Mascotas {
    nombre: string;
    edad: number;
    raza: string;
    sexo?: string;
    vacunado: boolean;
    mostrarEdad: () => void;
}


function mostrarMascota(mascota: Mascotas, aumentarEdad: number) {
    mascota.edad += aumentarEdad;

    console.log(mascota);

    mascota.mostrarEdad();
}


const nuevaMascota: Mascotas = {
    nombre: "firulais",
    edad: 5,
    raza: "pastor aleman",
    vacunado: true,

    mostrarEdad() {
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
    }
};


mostrarMascota(nuevaMascota, 2);