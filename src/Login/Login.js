import {Component} from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <br/>
                <div>
                    <input className='center w-1-3 p-5' placeholder='Email User'/>
                    <br />
                    <input className='center w-1-3 p-5 mt-10' placeholder='PassWord'/>
                    <br />
                    <button className='center submit mt-10 p-5'>Login</button>
                </div>

            </div>
        )

    }
}

export default Login