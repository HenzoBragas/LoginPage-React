// Importando as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, OAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB43hI1u5qXuUE2aQcGeJIfCZDe97xINDg",
  authDomain: "loginpage-9c694.firebaseapp.com",
  projectId: "loginpage-9c694",
  storageBucket: "loginpage-9c694.firebasestorage.app",
  messagingSenderId: "627429700387",
  appId: "1:627429700387:web:890a21ea433e110a625296"
};

// Inicializando o Firebase com a configuração
const firebaseApp = initializeApp(firebaseConfig);

// Obter a instância de autenticação
const auth = getAuth(firebaseApp);

//Microsoft
const microsoftProvider = new OAuthProvider('microsoft.com');

// Exportando corretamente as funções e provedores
export { firebaseApp, auth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth, microsoftProvider};