import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { auth, handleError } from './index.js';

// Auth API
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => handleError(registerMessages, error));
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => handleError(loginMessages, error));
}

export function logout() {
  return signOut(auth);
}

// Messages
const registerMessages = {
  'auth/email-already-in-use': 'Ya existe una cuenta con este email',
};

const loginMessages = {
  'auth/user-not-found': 'El email es incorrecto',
  'auth/wrong-password': 'La contraseña es incorrecta',
};
