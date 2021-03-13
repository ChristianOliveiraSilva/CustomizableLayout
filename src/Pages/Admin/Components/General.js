import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            siteName: '',
            logo: '',
            globalStyle: '',
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.config.title,
                siteName: this.props.template.config.siteName,
                logo: this.props.template.config.logo,
                globalStyle: this.props.template.config.globalStyle,
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

        return (
            <section>
                <h1>Configurações Genéricas <Stylist /></h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Nome da Página</label>
                <input type="text" placeholder="Nome da Página" name="siteName" value={this.state.siteName} onChange={this.changeInput} />

                <label>Logo da Página</label>
                <UploadableMedia img={this.state.logo} item={0} component="logo" />
                
                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base