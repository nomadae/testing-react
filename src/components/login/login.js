import './style.css'
import logo from'../../assets/img/logo.svg'


// Component for login handle.
const LoginComponent = (props) => {

    const handleSend = (e) => {
        console.log("Clicked submit")
    }
    const handleForgotPassword = (e) => {
        console.log("Clicked Forgot password")
    }

    return (<div className='login'>
        <img src={logo} alt="logo pospay" className="item logo" />
        <input className="login-input item" type="text" placeholder="Correo o Usuario"/>
        <input className="login-input item" type="password" placeholder="Contraseña"/>
        <button className="login-input item send" onClick={ handleSend }>  Ingresar </button>
        <button className="login-forgot item"> Olvidé mi contraseña </button>
    </div>)
}

export default LoginComponent;
