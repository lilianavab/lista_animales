//1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases.
// Definición de la clase Propietario
export class Propietario {
    constructor(nombre, dirección, teléfono){
        this._nombre = nombre;
        this._dirección = dirección;
        this._teléfono = teléfono;
        console.log('Se ha creado una instancia de Propietario.');
    }


// 4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser accedido desde las clases inferiores.
// Método datosPropietario en la clase Propietario
    datosPropietario(){
        const datosAgregados = `* El nombre del dueño es: ${this._nombre}, El domicilio es: ${this._dirección}, y el número de teléfono de contacto es: ${this._teléfono}`;
        return datosAgregados;
    }
}

// Definición de la clase Animal que extiende de Propietario
export class Animal extends Propietario {
    constructor(nombre, dirección, teléfono, tipo){
        super(nombre, dirección, teléfono);
        this._tipo = tipo;
        console.log('Se ha creado una instancia de Animal.');
    }

//3. Crear un método get para la clase Animal de la propiedad tipo para retornar el mensaje “El tipo de animal es un: ${this.tipo}”.
// Método get para la propiedad tipo en la clase Animal
    get tipo(){
        return `El tipo de animal es un ${this._tipo}`;
    }
}

// 4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser accedido desde las clases inferiores.
// Definición de la clase Mascota que extiende de Animal
export class Mascota extends Animal {
    constructor(nombre, dirección, teléfono, tipo, nombreMascota, enfermedad){
        super(nombre, dirección, teléfono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
        console.log('Se ha creado una instancia de Mascota.');
    }
//2. Crear los métodos get y set para la clase de mascota.
// Métodos get y set para la clase de Mascota
    get nombre(){
        return this._nombreMascota;
    }

    set nombre(nombreMascota){
        this._nombreMascota = nombreMascota;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }
}
