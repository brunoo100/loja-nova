import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from './login.module.css'

export default function Login() {
     const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={styles.container}>
            
            <section className={styles.principal}>
                <div className={styles.card}>
                   <form className={styles.form}  >
                   <h1 className={styles.titulo}>login</h1>
                   <label>email</label>
                   <input 
                   type='email'
                   placeholder='email'
                    />
                    <label>senha</label>
               <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
                   <button  >Entrar</button>
                   <p>esqueceu a senha</p>
                   </form>
                </div>
            </section>
            
            <section className={styles.secudaria}>

            </section>
        
        </div>
    );
}