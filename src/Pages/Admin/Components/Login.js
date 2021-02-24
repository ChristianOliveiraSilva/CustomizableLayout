import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: ''
        }

        this.authenticate = this.authenticate.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    componentDidMount() {
        document.title = "Logue no sistema"
    }

    authenticate (event) {
        event.preventDefault()

        if (this.state.login == 'admin' && this.state.password == 'admin') {
            this.props.changeLoggedState()
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
                        <img src="media/img_avatar2.png" alt="Avatar" className="avatar" />
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