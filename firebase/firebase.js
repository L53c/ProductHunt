import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Registra un usuario
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        })
    }

    // Inicia sesión del usuario
    async login(email, password){
        const validarUsuario = await this.auth.signInWithEmailAndPassword(email, password);
        return await validarUsuario;
    }

    // Cierra la sesión del usuario
    async cerrarSesion(){
        await this.auth.signOut();
        console.log('sesión cerrada');
    }
}

export const firebase = new Firebase();
// export default firebase;