import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Login from './src/screens/auth/Login';
import ForgetPassword from "./src/screens/auth/ForgetPassword";
import Register from "./src/screens/auth/Register";
export default function App(props) {
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];

  
  return (
    <ThemeProvider images={images}>
    {/*Reemplazar el componente para ver las distintas opciones de pantalla
      Login => pantalla de validacion de usuario
      ForgetPassword => pantalla para recuperar contraseña
      Register => pantalla para registrarse y crear nueva cuenta
    */}
        <Login/>
    </ThemeProvider>
  );
}
