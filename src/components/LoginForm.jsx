import Input from "./compos/Input"
import { Login } from '../services/userServices'

const url = "local"

function LoginForm() {


    function handleSubmit() {
        Login()
    }



    return (
        <form className="loginForm">
            <h1>AlloOui</h1>
            <Input type="text" placeholder="username" className="userInp" />
            <Input type="password" placeholder="password" className="userInp" />
            <Input type="submit" className="loginSub" value="login" onClick={handleSubmit}/>
        </form>
    )
}

export default LoginForm