# api-project

CONFIGURACIÓN PARA USAR LA API

Para poder utilizar la api, se deberán seguir estos pasos:

    1. Crear una base de datos en mongodb con el nombre de 'trianafy'
    2. Instalar las dependencias, es decir: npm i
    3. Crear un archivo .env que contendrá la configuración especificada abajo
    4. Importar los tres archivos JSON (user, playlist, song) en sus respectivas colecciones (si se desea tener datos de ejemplos)

Los datos de ejemplos contienen dos listas de canciones, varias canciones y un usuario.

Para conseguir el token, se deberá loggear. El usuario de ejemplo es:

    {
        "username": "pablito"
        "pass": "12345678"
    }

He dejado algunas peticiones de usuario por si se quiere manejar algo fácilmente.

Por último, la configuración del archivo .env contendrá:

        PORT = 3000

        DB_URI=mongodb://localhost:27017/trianafy

        # Secreto para la encriptación
        JWT_SECRET=esteEsUnTokenQueNadiePuedeSaberJamas

        # Número de rondas utiliadas para el algoritmo de hashing de la contraseña
        BCRYPT_ROUNDS=12

        # Vida del token
        JWT_LIFETIME=1d

        # Algoritmo utilizado para el cifrado del token
        JWT_ALGORITHM=HS256

El puerto puede variar.
