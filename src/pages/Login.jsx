import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatsito</span>
        <span className="title">Registro de Usuario</span>
        <form>
       
          <input type="email" placeholder="correo electronico" />
          <input type="password" placeholder="contraseña" />
         
          <button>Registrarse</button>
        </form>
        <p>Aun no tiene Cuenta? Registrar</p>
      </div>
    </div>
  );
};

export default Login;
