import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('foo') === 'bar') {
            navigate('/home')
        }
    }, [])

    const handle = () => {
        if (!username || !password) {
            alert('Please enter username and password');
            return;
        }
        if(username !=='foo' || password !=='bar'){
            alert('Please enter valid username and password')
        }
        if (username === 'foo' && password === 'bar') {
            navigate('/home')
            localStorage.setItem(username, password)
        }

    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '6rem' }}>
            <div className="" style={{ border: "solid 1px grey", borderRadius: '10px', padding: '20px', width: '50rem', }}>
                <form className="ui form">
                    <div className="field">
                        <label>Enter username</label>
                        <input type="text" name="username" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Enter password</label>
                        <input type="text" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="ui primary button" type="submit" onClick={handle}>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;