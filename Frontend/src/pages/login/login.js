import React, { useState } from "react";
import './login.css';
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import Input from "./components/input/Input";
import Roles from "./components/Roles/Roles";


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);

        } else {
            setPassword(value);
        }
    };

    function handleSubmit() {
        let account = { user, password };
        if (account) {
            console.log('Account', account);
        }
    };

    
    
    return (
        
        <header>




            <div className="login-container">

                <Title text="Bienvenido" /> 
                <Roles  text="Usuarios"/>             


                <Input
                    attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Ingrese Usuario'
                    }}
                    handleChange={handleChange}
                />

                <Label for="contra" text='Contraseña' />
                <Input id="contra"
                    attribute={{
                        id: 'contarseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Ingrese Contraseña'
                    }}
                    handleChange={handleChange}

                />


                <button className='boton' onClick={handleSubmit}>
                    Ingresar
                </button>
                <a href="#" className="recuContra">¿Olvido su Contraseña o Usuario?</a>

            </div>
            <div className="slogan"></div>
        </header>


    )
};

export default Login;
