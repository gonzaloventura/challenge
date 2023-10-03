Este proyecto es una prueba técnica para la empresa Acronex

## Clonar
Primero, debe clonar el repositorio en una carpeta local, para ello debe iniciar el comando:

```bash
git clone https://github.com/gonzaloventura/challenge.git
```

## Ejecutar en modo desarrollo
Para ejecutar el proyecto clonado en modo desarrollo debe instalar los paquetes del mismo dentro de la carpeta.

Para instalar los paquetes se debe ejecutar el siguiente comando:

```bash
npm install
```

Cambiar el nombre del archivo "ejemplo.env.local" a ".env.local"

Una vez completado el proceso, se puede iniciar el proyecto en modo desarrollo con el comando:
```bash
npm run dev
```

Luego se ejecutará por defecto en el puerto 3000, donde se puede ingresar con la siguiente URL: [http://localhost:3000](http://localhost:3000) 


## Ejecutar en modo producción
Para ejecutarlo en producción se debe compilar previamente con las siguientes líneas de código:

```bash
npm run build
```

Y luego se ejecuta con el comando
```bash
npm start
```
