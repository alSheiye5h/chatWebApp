import Input from "./compos/Input"


function LoginForm() {




    return (
        <form className="loginForm">
            <h2>AlloOui</h2>
            <Input type="text" placeholder="username" className="userInp" />
            <Input type="password" placeholder="password" className="userInp" />
            <Input type="submit" className="loginSub" value="login"/>
            
        </form>
    )
}

export default LoginForm