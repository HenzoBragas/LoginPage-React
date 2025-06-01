# 🔐 Página de Login em React

![PáginaWebLogin](./LoginPage.png)

## 📌 Descrição

Este projeto é uma página de login moderna e animada, desenvolvida com React.js e baseada no estilo minimalista e suave inspirado no vídeo "**ASMR Programming - Animated Login Page - No Talking" do canal ASMR Prog**. O objetivo foi implementar uma interface agradável com diversos métodos de autenticação, incluindo:

- Google

- GitHub

- Facebook

- Microsoft

- Email e senha (padrão)

### 🚧 Status do Projeto
#### ⚠️ Em desenvolvimento — melhorias e correções em andamento.
### ⚠️ Avisos Importantes:
No momento, os métodos de login via **Microsoft** e **Facebook**, assim como as notificações via **React Toastify**, **não estão funcionando corretamente** devido a falhas nas APIs externas utilizadas. Estou trabalhando para resolver esses problemas e atualizar o projeto assim que possível.

### ⚠️ Atenção sobre uso de contas pessoais

Este projeto está em desenvolvimento e ainda pode apresentar instabilidades. Para evitar problemas, **não utilize contas pessoais reais nos testes** — use apenas contas destinadas a teste, com dados fictícios, para garantir a segurança e evitar bloqueios ou perda de dados.

Agradeço sua compreensão!

## ⚙️ Funcionalidades

#### 🔁 SPA (Single Page Application)

#### 🔑 Login com provedores via Firebase Authentication

#### 🆕 Tela de cadastro com animação usando CSS keyframes

#### 🔐 Recuperação de senha via email

#### 🔔 Feedback de ações com notificações toast (react-toastify)

#### 🧼 Privacidade garantida: dados apagados ao sair da aplicação




## 🔥 Integração com Firebase (Autenticação)

O projeto utiliza a Firebase Authentication, que permite autenticação segura e escalável sem a necessidade de um banco de dados local.

### 📁 Estrutura de Arquivos

Todos os métodos de autenticação estão separados em arquivos específicos e organizados como custom hooks, facilitando a manutenção e reutilização do código.

### 📌 Configuração Firebase

```js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "***************",
  authDomain: "**************",
  projectId: "loginpage-*********",
  storageBucket: "****************",
  messagingSenderId: "**************",
  appId: "******************",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const microsoftProvider = new OAuthProvider("microsoft.com");

export {
  firebaseApp,
  auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
  microsoftProvider,
};
```

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
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "***************",
  authDomain: "**************",
  projectId: "loginpage-*********",
  storageBucket: "****************",
  messagingSenderId: "**************",
  appId: "******************",
};

// Inicializando o Firebase com a configuração
const firebaseApp = initializeApp(firebaseConfig);

// Obter a instância de autenticação
const auth = getAuth(firebaseApp);
// Microsoft
const microsoftProvider = new OAuthProvider("microsoft.com");

export {
  firebaseApp,
  auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
  microsoftProvider,
};
```

## 🔒 Gerenciamento de Sessão

### Logout

Remove todos os dados da sessão para garantir privacidade do usuário.

```js
const logout = async () => {
  if (!user) {
    toast.error("Nenhum usuário autenticado.");
    return;
  }

  setLoading(true);
  try {
    //Remove os dados do firebase e dada sessão
    await deleteUser(user);
    localStorage.clear();
    sessionStorage.clear();

    toast.success("Você saiu com sucesso!", {
      position: "top-center",
      autoClose: 3000,
    });

    setTimeout(() => {
      navigate("/");
    }, 3000);
  } catch (error) {
    console.error(error);

    if (error.code === "auth/requires-recent-login") {
      toast.error("Reautentique para excluir a conta.", {
        position: "top-center",
        autoClose: 4000,
      });
    } else {
      toast.error("Erro ao sair. Tente novamente.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  } finally {
    setLoading(false);
  }
};
```

### Recuperação de Senha

Apenas para usuários autenticados por email e senha. O usuário recebe um email com um link para redefinir a senha.

```js
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const resetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Email de recuperação enviado!", {
        position: "top-center",
        autoClose: 3000,
        closeButton: true,
      });
    })
    .catch(() => {
      toast.error("Erro ao enviar email de recuperação!", {
        position: "top-center",
        autoClose: 3000,
        closeButton: true,
      });
    });
};
```

### 🌐 Deploy

🚀 Acesse a aplicação online:

#### 👉 [Página de Login em React](https://loginpage-react.vercel.app/)

## 🛤 Roadmap

- [ ] Consertar autenticação via Microsoft e Facebook
- [ ] Melhorar tratamento de erros
- [ ] Adicionar suporte a autenticação por LinkedIn
- [ ] Melhorar UI/UX das telas de login e cadastro
- [ ] Testes automatizados

## 🛠 Tecnologias Utilizadas

⚛️ React.js

🔥 Firebase Authentication

🍞 React Toastify

🎨 Fortawesome Icons

## ⚠️ Observação Importante

Todos os dados da sessão são automaticamente apagados ao sair da aplicação, garantindo total privacidade ao usuário.
