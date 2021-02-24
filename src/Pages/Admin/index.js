import React from 'react'
import Login from "./Components/Login";
import Configuration from "./Components/Configuration";
import './Style/style.css'

class Admin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            template: {},
            error: ''
        }
        this.authenticate = this.authenticate.bind(this)
        this.fetchTemplate = this.fetchTemplate.bind(this)
    }

    fetchTemplate() {
        fetch('template/template.json')
        .then(res => res.json())
        .then(result => this.setState({template: result}))
        .catch(err => this.setState({error: 'Erro ao carregar o JSON, contate christian'}));
    }

    componentDidMount () {
        this.fetchTemplate()
    }

    authenticate() {
        this.setState({ logged: true })
    }
    
    render() {
        // atenção essa parte sera mocakada
        if (this.state.logged) { 
            return <Login changeLoggedState={this.authenticate}/>
        }
        if (this.state.error == '') {
            return <Configuration template={this.state.template} />
        }
        return <h1 className="error-system">{this.state.error}</h1>
    }
}



export default Admin