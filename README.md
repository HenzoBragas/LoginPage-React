# Login Page in React
![PáginaWebLogin](./LoginPage.png)

## Descrição
Este projeto foi desenvolvido com base no estilo minimalista e suave inspirado pelo vídeo **ASMR Programming - Animated Login Page - No Talking** do canal **ASMR Prog**. O objetivo foi implementar métodos de login, como: Google, GitHub, Facebook, Microsoft e método padrão (email e senha). A aplicação foi desenvolvida com **React Js**.
### Status do Projeto
**9Fase final de desenvolvimento** <br>
- [ ] Correção de alguns bugs da aplicação Toast <br>
- [x] Documentação 

## Funcionalidades
A página foi desenvolvida como uma aplicação **SPA (Single Page Application)**.  
As principais funcionalidades incluem os métodos de login com a utilização da API do **Google Firebase**. A página é composta por duas seções: **Login** e **Cadastro**.  
Ao pressionar o botão **SIGN UP**, a seção de cadastro muda de forma animada, utilizando **keyframes** do CSS.  
A aplicação apresenta a funcionalidade de **recuperar senha** com validação de email. A recuperação é feita através do envio de um link para a troca da senha, e após a troca, a aplicação retorna à página principal.  
Antes da conclusão de qualquer método de login ou cadastro, o usuário é informado, por meio de um **toast**, se a ação foi um sucesso ou não. Para isso, utilizamos a biblioteca **react-toastify**.

## Integração com a API Firebase (Autenticação)
Este projeto utiliza a **API Firebase da Google**, que permite trabalhar sem um banco de dados local e sem a necessidade de criar funções para garantir a segurança dos dados inseridos.  

### Estrutura de arquivos
Todos os métodos de login foram desenvolvidos em arquivos separados e implementados com **custom hooks** no componente principal.

### Atenção ⚠️⚠️
**Todos os dados são excluídos quando o usuário sai da aplicação para garantir a privacidade dos dados.**

### Passos para a Integração:
#### Criar um Projeto no Console do Google Cloud:
1. Acesse o **Google Cloud Console**.
2. Crie um novo projeto ou selecione um projeto existente.
3. Ative a **Google Identity Platform** e habilite a **API de autenticação** (por exemplo, Google).
4. Crie as **credenciais OAuth 2.0** no painel de credenciais. Defina o tipo de aplicativo como **Web** e registre o domínio autorizado.

#### Configurar o arquivo Firebase SDK:
```js
// Importando as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, OAuthProvider} from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "***************",
  authDomain: "**************",
  projectId: "loginpage-*********",
  storageBucket: "****************",
  messagingSenderId: "**************",
  appId: "******************"
};

// Inicializando o Firebase com a configuração
const firebaseApp = initializeApp(firebaseConfig);

// Obter a instância de autenticação
const auth = getAuth(firebaseApp);
// Microsoft
const microsoftProvider = new OAuthProvider('microsoft.com');

export { firebaseApp, auth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth, microsoftProvider };
```
## Gerenciamento de Sessão:
### Logout
Após a autenticação, o usuário pode acessar os dados da conta do Google. Para garantir a privacidade, ao sair do site, todos os dados de sessão são apagados. Isso pode ser feito removendo o token de autenticação e sessão de cookies.
```js
const logout = () => {
  // Limpar as credenciais
  localStorage.removeItem('userToken');
  sessionStorage.removeItem('userToken');
};
```
### Troca de  Senha
O projeto implemente a funcionalidade de troca de senha, com método de envio de email para efetuar a troca da senha. A página da troca da senha totalmente personalizada com as cores da aplicação. Ao efetuar a troca da senha e validação a página recarrega para sessão principal. So é possivel trocar a senha pelo método email e senha.

```js
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();
const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Avisar o usuário que um email foi enviado
      toast.success('Email de recuperação enviado!', {
        position: "top-center",
        autoClose: 3000,
        closeButton: true,
      });
    })
    .catch((error) => {
      toast.error("Erro ao enviar email de recuperação!", {
        position: "top-center",
        autoClose: 3000,
        closeButton: true,
      })
    });
};
```
### Acesse o Projeto Online 🚀🚀
**Você pode acessar a versão online do projeto através deste link**
### 👉 [Página de Login em React](https://loginpage-react.vercel.app/)

## Tecnologias Utilizadas
Para construção da aplicação utilizei os seguintes frameworks e biliotecas e APIs <br> 
- #### React JS 
- #### Toastify
- #### Firebase API
- #### Fortawesome



