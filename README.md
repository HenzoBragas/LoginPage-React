# Login Page in React 
![PáginaWebLogin](./LoginPage.png)

 Descrição
Este projeto foi desenvolvido com base no estilo minimalista e suave inspirado pelo vídeo ASMR Programming - Animated Login Page - No Talking do canal ASMR Prog. O objetivo é criar uma experiência de login agradável e tranquila para o usuário, com animações suaves e transições elegantes.

A página é projetada para proporcionar uma sensação de fluidez e calma, utilizando animações e interações que seguem o princípio do design "menos é mais".

Funcionalidades
Formulário de Login: Permite que o usuário acesse sua conta com as credenciais fornecidas.
Formulário de Cadastro: Solicita os seguintes dados do usuário:
Nome
Email
Senha
Animações e Transições
A experiência do usuário é aprimorada com animações fluidas e transições suaves, criando uma sensação de calma ao interagir com os elementos da interface.

Ao pressionar o botão SIGN UP, a seção de cadastro muda de forma animada, utilizando keyframes do CSS.
As animações foram inspiradas no estilo ASMR, com foco em interações suaves e agradáveis.
Design e Estilo
O design é minimalista e focado na experiência do usuário. As cores e fontes foram escolhidas para criar uma interface tranquila e acolhedora, alinhada ao conceito de ASMR. As animações e transições são feitas de forma a não interromper o fluxo da navegação, proporcionando uma sensação contínua de movimento.

Integração com a API do Google (Autenticação)
Este projeto implementa a autenticação com a API de Login do Google (Google Sign-In) para permitir que os usuários façam login em suas contas Google diretamente no seu aplicativo.

Passos para a Integração:
Criar um Projeto no Console do Google Cloud:

Acesse Google Cloud Console.
Crie um novo projeto ou selecione um projeto existente.
Ative a Google Identity Platform e habilite a API de autenticação do Google.
Crie as credenciais OAuth 2.0 no painel de credenciais. Defina o tipo de aplicativo como Web e registre o domínio autorizado.
Instalar a Biblioteca de Autenticação do Google:

Para utilizar a autenticação com Google, você pode usar a biblioteca react-google-login:
bash
Copiar
Editar
npm install react-google-login
Configuração no React:

Importe o componente GoogleLogin em seu arquivo de login:
jsx
Copiar
Editar
```
import { GoogleLogin } from 'react-google-login';
Configure o botão de login com as credenciais obtidas no Google Console:
jsx
Copiar
Editar
const responseGoogle = (response) => {
  console.log(response);
  // Aqui você pode salvar o token e realizar a autenticação do usuário no seu backend
};


<GoogleLogin
  clientId="YOUR_GOOGLE_CLIENT_ID"
  buttonText="Login com Google"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
/>
```
Gerenciamento de Sessão:

Após a autenticação, o usuário pode acessar os dados da conta do Google. Para garantir a privacidade, ao sair do site, todos os dados de sessão são apagados. Isso pode ser feito removendo o token de autenticação e sessão de cookies.
Exemplo para destruir a sessão no logout:
jsx
Copiar
Editar
const logout = () => {
  // Limpar as credenciais
  localStorage.removeItem('userToken');
  sessionStorage.removeItem('userToken');
};
Trocar a Senha
Caso o projeto implemente a funcionalidade de troca de senha, será necessário usar o Firebase Authentication ou alguma outra API de autenticação para gerenciar a recuperação e mudança de senha.
Para utilizar o Firebase Authentication com email e senha, basta configurar o Firebase no seu projeto, habilitar o método de autenticação por Email/Password e criar funções para troca de senha:
javascript
Copiar
Editar
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();
const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Avisar o usuário que um email foi enviado
      alert('Email de recuperação enviado!');
    })
    .catch((error) => {
      alert(error.message);
    });
};

Tecnologias Utilizadas
React para a construção da interface
React Hooks (useState) para controle de estados
Google Identity Platform para login com Google
Firebase Authentication (opcional) para gerenciar usuários e autenticação
Como Rodar o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/usuario/repository-name.git
Instale as dependências:

bash
Copiar
Editar
npm install
Execute o projeto:

bash
Copiar
Editar
npm start
O projeto estará disponível em http://localhost:3000.

Acesse o Projeto Online 🚀🚀
Você pode acessar a versão online do projeto através deste link: Página de Login em React.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
