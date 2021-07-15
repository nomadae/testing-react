import './style.css'
import logo from'../../assets/img/logo.svg'


// Component for login handle.
const LoginComponent = (props) => {

    const handleSend = (e) => {
        console.log("hola")
    }

    return (<div className='login'>
        <img src={logo} alt="logo pospay" className="item logo" />
        <input className="login-input item" type="text" placeholder="Correo o Usuario"/>
        <input className="login-input item" type="password" placeholder="Contraseña"/>
        <button className="login-input item send" onClick={ handleSend }>Ingresar</button>
    </div>)
}

export default LoginComponent;
