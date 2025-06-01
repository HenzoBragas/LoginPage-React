
const TogglePanel = ({ isActive, handleRegisterClick, handleLoginClick }) => (
  <div className="toggle-container">
    <div className="toggle">
      <div className={`toggle-panel toggle-left ${isActive ? "" : "hidden"}`}>
        <h1>Seja bem vindo</h1>
        <p>Insira seus dados para usar todos os recursos do site</p>
        <button onClick={handleLoginClick} className="btn-SignIn">Acesse sua conta</button>
      </div>
      <div className={`toggle-panel toggle-right ${isActive ? "hidden" : ""}`}>
        <h1>Bem vindo de volta!</h1>
        <p>Cadastre-se com seus dados para usar todos os recursos do site</p>
        <button onClick={handleRegisterClick} className="btn-SignUp">Cadastre-se</button>
      </div>
    </div>
  </div>
);

export default TogglePanel;
