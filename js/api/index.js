import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { firebaseConfig } from './config.js';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export function handleError(messages, error) {
  if (error.name === 'FirebaseError') {
    Promise.reject({
      code: error.code,
      message: messages[error.code] || error.message,
    });
  }

  Promise.reject(error);
}
