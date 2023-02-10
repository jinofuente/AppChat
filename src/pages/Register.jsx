import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatsito</span>
        <span className="title">Registro de Usuario</span>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="correo electronico" />
          <input type="password" placeholder="contraseña" />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Agregar un Avatar</span>
          </label>
          <button>Registrarse</button>
        </form>
        <p>ya tiene cuenta? Ingresar</p>
      </div>
    </div>
  );
};

export default Register;
