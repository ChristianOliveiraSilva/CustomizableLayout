import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            siteName: '',
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.config.title,
                siteName: this.props.template.config.siteName,
            }            
        }

        this.changeInput = this.changeInput.bind(this)
    }

    changeInput (event) {
        const target = event.target
        this.setState({
          [target.name]: target.value
        })
    }

    render() {
        console.log();
        return (
            <section>
                <h1>Configurações Genéricas</h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Nome da Página</label>
                <input type="text" placeholder="Nome da Página" name="siteName" value={this.state.siteName} onChange={this.changeInput} />


                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base