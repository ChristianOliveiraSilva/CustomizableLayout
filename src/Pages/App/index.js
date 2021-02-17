import React from 'react';

import Engine from "./Components/Engine";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            template: null,
            error: null,
        }

        this.fetchTemplate = this.fetchTemplate.bind(this)
    }

    fetchTemplate() {
        fetch('template/template.json')
        .then(res => res.json())
        .then(result => this.setState({template: result}))
        .catch(err =>  this.setState({error: err}));
    }

    componentDidMount () {
        this.fetchTemplate()
    }

    render() {
        if( !this.state.template || this.state.error)
            return (
                <div>
                    <h1>RODAR ANIMAÇÃO DE PAGINA CARREGANDO AQUI</h1>
                </div>
            )
        
        return <Engine template={this.state.template} />
    }
}

export default App