import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: ''
        }

        this.login = 'boyd&MZu1@7Y'
        this.password = '6$wu&A8Y3SGx'

        this.authenticate = this.authenticate.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    componentDidMount() {
        document.title = "Logue no sistema"
    }

    authenticate (event) {
        event.preventDefault()

        if (this.state.login == this.login && this.state.password == this.password) {
            sessionStorage .logged = true
            this.props.changeLoggedState()
        } else {
            alert('Erro tente novamente')
        }
    
        this.setState({
            login: '',
            password: ''
        })
    }

    changeInput (event) {
        const target = event.target
    
        this.setState({
          [target.name]: target.value
        })
    }

    render() {
        return (
            <section className="login">
                <form className="login" onSubmit={this.authenticate}>
                    <div className="imgcontainer">
                        <img src="/media/avatar.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container-login">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" className="input" name="login" value={this.state.login} onChange={this.changeInput} />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" className="input" name="password" value={this.state.password} onChange={this.changeInput} />

                        <button className="login" type="submit">Login</button>
                    </div>
                </form>
            </section>
        )
    }

}
export default Login