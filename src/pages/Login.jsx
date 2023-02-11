import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatsito</span>
        <span className="title">Ingreso de Usuario</span>
        <form onSubmit={handleSubmit}>
       
          <input type="email" placeholder="correo electronico" />
          <input type="password" placeholder="contraseña" />
         
          <button>Registrarse</button>
          {err && <span>Algo Salio Mal</span>}
        </form>
        <p>Aun no tiene Cuenta? <Link to="/register">Registrar</Link></p>
      </div>
    </div>
  );
};

export default Login;
