import {Component} from 'react'
import config from '../config'
import app from 'firebase'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password : '',
            success : false,
            message : '',
            login : true
        }
    }
    changeValue = key => e => {
        this.setState({
            [key] : e.target.value
        })
    }

    changeLogin = () => {
        this.setState({
            login : !this.state.login,
            email: '',
            password : '',
            success : false,
            message : '',
        })
    }

    submit = async () => {
        try {
            const {email, password, login} = this.state
            const result = login ?
                await app.auth().signInWithEmailAndPassword(email, password) :
                await app.auth().createUserWithEmailAndPassword(email, password)

            this.setState({
                success : true,
                message : 'Successful'
            })
        }
        catch (e) {
            this.setState({
                success: false,
                message : e.message
            })
        }

    }

    render() {
        const {email, password, success, message, login} = this.state
        const color = success ? 'green' : 'red'
        const footer = login ? ' Don\'t have an account? ' : 'Have an account?'
        const action = login ? 'Sign Up' : 'Login'
        const header = !login ? 'Sign Up' : 'Login'
        return (
            <div>
                <h1>{header}</h1>
                {message && <div className={color}>{message}</div>}
                <br/>
                <div>
                    <input className='center w-1-3 p-5' placeholder='Email User' value={email} onChange={this.changeValue('email')}/>
                    <br />
                    <input className='center w-1-3 p-5 mt-10' placeholder='PassWord' value={password} onChange={this.changeValue('password')}/>
                    <br />
                    <button className='center submit mt-20 p-5' onClick={this.submit}>{header}</button>
                    <br />
                    <div className='center mt-10'>
                        {footer+ ' '} <a className='link' onClick={this.changeLogin}>{action}</a>.
                    </div>
                </div>

            </div>
        )

    }
}

export default Login