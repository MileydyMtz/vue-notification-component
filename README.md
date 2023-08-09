# Documentación del componente Notification
## Descripción:
Este componente es una notificación estilizada que puede mostrar diversos mensajes al usuario. Puede ser personalizado para mostrar diferentes tipos de notificaciones, los cuales son: info,  error,  warning, y  success. 

## Tecnologías usadas
A continuación, se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3
* Preprocesador SCSS
* Vue Test Utils
* Vitest
* Prettier
* ESLint

## Características del componente
### Props
El componente *Notification* tiene 4 propiedades:
* **type** (String): Define el tipo de notificación. Puede ser uno de los siguientes: *info*, *error*, *warning*, *success*. Cada tipo de notificación se muestra con un estilo visual diferente. El valor por defecto es *info*.
* **message** (String): Define el mensaje que se mostrará en la notificación. Esta propiedad es requerida.
* **autoClose** (Boolean): Si es true, la notificación se cerrará automáticamente después de un cierto tiempo. El valor por defecto es true.
* **autoCloseTime** (Number): Define el tiempo (en milisegundos) que durará la notificación antes de cerrarse automáticamente. El valor por defecto es *5000* (5 segundos). Esta propiedad solo tiene efecto si *autoClose* es *true*.

### Estilos
* Los estilos están definidos en la sección de <style> y usan la extensión .scss.
* Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.
* Los colores y estilos de las notificaciones varían en función del tipo de notificación. Las notificaciones de *info* son de color azul, las de  *error* son de color rojo, las de *warning* son de color amarillo y las de *success* son de color verde.
* También se incluyen estilos para los elementos internos de la notificación, como el contenido, el icono, el mensaje y el botón de cierre. 

### Métodos
El componente tiene un método:
* **closeNotification**: Se dispara al hacer clic en el botón de cierre y cierra la notificación.

### Nota
* Se deben copiar también los iconos que se encuentran dentro de la carpeta *assets* a su propio proyecto, para que las notificaciones se muestren correctamente.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *TheNotification.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 
Posteriormente se debe importar y luego usar la etiqueta <Notification/> en la plantilla HTML con las propiedades requeridas de *type* y *message*. 
Como opcional también se puede pasar la propiedad de *autoCloseTime*, para definir el tiempo en milisegundos en que la notificación tardara en cerrarse automáticamente; el valor predeterminado de este es **"5000"**. Si no se desea que la notificación se cierre automáticamente, puede definir la propiedad *:autoClose="false"*


A continuación, un ejemplo:

```vue 
<script setup>
import Notification from './components/TheNotification.vue';
</script>

<template>
  <main>
    <Notification 
      type = "success" 
      message="Success!"
      :autoClose="false"
    />
  </main>
</template>

```


## Demostración
La implementación de este componente se puede ver de la siguiente forma:

**Visualización de la notificación de tipo *info***

![notification info](https://github.com/MileydyMtz/vue-notification-component/assets/85470047/38f8a51d-3eb9-478a-998e-51e898d1ef8f)

**Visualización de la notificación de tipo *error***

![notification error](https://github.com/MileydyMtz/vue-notification-component/assets/85470047/fe1d442e-4d41-4fbb-ac95-f2c06da5e8d8)

**Visualización de la notificación de tipo *warning***

![notification warning](https://github.com/MileydyMtz/vue-notification-component/assets/85470047/1ab4bac1-0568-4540-87f4-351fe6b87cc1)

**Visualización de la notificación de tipo *success***

![notification success](https://github.com/MileydyMtz/vue-notification-component/assets/85470047/837eaeaa-c333-4a25-9015-c50a3c05e78d)


## Pruebas
Se utiliza la biblioteca Vitest para correr las pruebas y @vue/test-utils para montar el componente.

A continuación, se muestran las pruebas implementadas:
* **renders properly**: Esta prueba verifica si el componente se renderiza correctamente y si el mensaje pasado como propiedad se muestra en el componente.
* **renders different types of notifications**: Esta prueba verifica si los diferentes tipos de notificaciones (*info*, *warning*, *error*, *success*) se muestran correctamente en el componente.

* **auto closes after certain time**: Esta prueba verifica si la notificación se cierra automáticamente después del tiempo especificado en la propiedad autoCloseTime.

* **renders the correct icon for each notification type**: Esta prueba verifica si el icono correcto se muestra para cada tipo de notificación.

* **closes the notification when the close button is clicked**: Esta prueba verifica si la notificación se cierra correctamente cuando se hace clic en el botón de cerrar.
