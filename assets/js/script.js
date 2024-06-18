// Importar las clases desde el archivo 'clases.js'
import { Propietario, Animal, Mascota } from './clases.js';

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
   
    const formulario = document.querySelector('#formulario');
    const resultadoLista = document.querySelector('#resultadoLista');

    
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

       
        const propietarioInput = document.querySelector('#propietario').value;
        const direccionInput = document.querySelector('#direccion').value;
        const telefonoInput = document.querySelector('#telefono').value;
        const tipoSeleccionado = document.querySelector('#tipo').value;
        const nombreMascotaInput = document.querySelector('#nombreMascota').value;
        const enfermedadInput = document.querySelector('#enfermedad').value;

       
        const validarDatos = (inputValue, mensajeError, mensajeExito) => {
            const validacion = /[a-zA-Z]/gim;
            if (!validacion.test(inputValue.trim())) {
                mensajeError.textContent = mensajeExito;
                mensajeError.style.color = 'red';
                return false;
            } else {
                mensajeError.textContent = '¡Datos enviados correctamente!';
                mensajeError.style.color = 'green';
                return true;
            }
        };

        let errores = [];

        // Validar propietario
        if (!validarDatos(propietarioInput, document.querySelector('#mensajeDatoPropietario'), 'El nombre del propietario es obligatorio.')) {
            errores.push('Error en el nombre del propietario.');
        }

        // Validar dirección
        if (!validarDatos(direccionInput, document.querySelector('#mensajeDatoDireccion'), 'La dirección es obligatoria.')) {
            errores.push('Error en la dirección.');
        }

        // Validar teléfono
        if (!telefonoInput.trim() || isNaN(telefonoInput)) {
            document.querySelector('#mensajeDatoTelefono').textContent = 'El teléfono debe contener solo números.';
            document.querySelector('#mensajeDatoTelefono').style.color = 'red';
            errores.push('Error en el teléfono.');
        } else {
            document.querySelector('#mensajeDatoTelefono').textContent = '¡Datos enviados correctamente!';
            document.querySelector('#mensajeDatoTelefono').style.color = 'green';
        }

        // Validar nombre de la mascota
        if (!validarDatos(nombreMascotaInput, document.querySelector('#mensajeDatoMascota'), 'El nombre de la mascota es obligatorio.')) {
            errores.push('Error en el nombre de la mascota.');
        }

        // Validar enfermedad
        if (!validarDatos(enfermedadInput, document.querySelector('#mensajeDatoEnfermedad'), 'La enfermedad es obligatoria.')) {
            errores.push('Error en la enfermedad.');
        }

        // Mostrar errores si los datos no son válidos
        if (errores.length > 0) {
            console.log('Se encontraron errores:', errores);
        } else {
            // Crear las instancias de las clases según el tipo de animal seleccionado
            let nuevoPropietario = new Propietario(propietarioInput, direccionInput, telefonoInput);
            console.log('Se creó una instancia de Propietario:', nuevoPropietario);

//5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse “Perro”.

            // Crear una instancia de Mascota según el tipo de animal seleccionado
            let nuevaMascota;
            switch (tipoSeleccionado) {
                case 'perro':
                    nuevaMascota = new Mascota(propietarioInput, direccionInput, telefonoInput, 'Perro', nombreMascotaInput, enfermedadInput);
                    break;
                case 'gato':
                    nuevaMascota = new Mascota(propietarioInput, direccionInput, telefonoInput, 'Gato', nombreMascotaInput, enfermedadInput);
                    break;
                case 'conejo':
                    nuevaMascota = new Mascota(propietarioInput, direccionInput, telefonoInput, 'Conejo', nombreMascotaInput, enfermedadInput);
                    break;
                default:
                    console.log('Tipo de animal no válido');
            }
            console.log('Se creó una instancia de Mascota:', nuevaMascota);

//6. Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario” cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get de las clases Animal y Mascota, concatenando todo en un solo mensaje.

            // Mostrar los datos del propietario y la mascota en la lista de resultados
            if (nuevaMascota) {
                const textoNuevaMascota = `* ${nuevaMascota.tipo}, ` +
                    `mientras que el nombre de la mascota es: ${nuevaMascota.nombre}, ` +
                    `y la enfermedad es: ${nuevaMascota.enfermedad}.`;

                // Agregar los elementos de lista al HTML
                resultadoLista.innerHTML += `<li>${nuevoPropietario.datosPropietario()}</li><li>${textoNuevaMascota}</li>`;
                resultadoLista.parentElement.classList.add('mostrar');
                formulario.reset();
            }
        }
    });
});
