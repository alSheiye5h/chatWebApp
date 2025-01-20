import { useState } from "react"


import Input from "./compos/Input"
import { Login } from '../services/userServices'

const url = "127.0.0.1:3001/api/v1/login"
const method = "POST"
const headers = {
    'Content-Type': 'application/json',
}

function LoginForm() {

    let [username, setUsername] = useState("")
    let [password, setpassword] = useState("")
    


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await Login(url, method, headers, {username, password}).await
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    function usernameInp(event) {
        setUsername(event.target.value)
    }

    function passwordInp(event) {
        setpassword(event.target.value)
    }

    return (
        <form className="loginForm">
            <h1>AlloOui</h1>
            <Input type="text" placeholder="username" className="userInp" value={username} onChange={usernameInp} />
            <Input type="password" placeholder="password" className="userInp" value={password} onChange={passwordInp} />
            <Input type="submit" className="loginSub" value="login" onClick={handleSubmit}/>
        </form>
    )
}

export default LoginForm