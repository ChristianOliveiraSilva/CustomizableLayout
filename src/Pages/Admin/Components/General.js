import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";
import { exporter } from '../../../Helper/Caller';


class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            siteName: '',
            logo: '',
            fonts: [],
            style: '',
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.config.title,
                siteName: this.props.template.config.siteName,
                logo: this.props.template.config.logo,
                fonts: this.props.template.config.fonts.map((i) => i.replace(/\&/g,"%26")),
                style: this.props.template.config.style,
            }            
        }

        this.changeInput = this.changeInput.bind(this)
        this.save = this.save.bind(this)
        this.changeFont = this.changeFont.bind(this)
        this.addFont = this.addFont.bind(this)
        this.removeFont = this.removeFont.bind(this)
    }

    save () {
        const {siteName, title, fonts} = this.state
        console.log(fonts);
        exporter({config: { siteName, title, fonts }})
    }

    changeInput (event) {
        const target = event.target
        this.setState({
          [target.name]: target.value
        })
    }

    changeFont (event, key) {
        const value = event.target.value.replace(/\&/g,"%26");
        let fonts = this.state.fonts
        fonts[key] = value
        
        console.log({fonts, value})
        this.setState({
            fonts: fonts
        })
    }

    addFont () {
        let fonts = this.state.fonts
        fonts.push("")
        this.setState({
            fonts: fonts
        })
    }

    removeFont (index) {
        let fonts = this.state.fonts
        fonts = fonts.filter((item, key) => {
            return index != key;
        })

        this.setState({
            fonts: fonts
        })
    }

    render() {

        return (
            <section>
                <h1>Configurações Genéricas <Stylist component="asdasdas" /></h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Nome da Página</label>
                <input type="text" placeholder="Nome da Página" name="siteName" value={this.state.siteName} onChange={this.changeInput} />

                <label>Logo da Página</label>
                <UploadableMedia img={this.state.logo} component="logo" />
                
                <label>Fontes da Página</label>
                <button className="add" onClick={this.addFont}>Adicionar</button>
                {this.state.fonts.map((item, key) => {
                    return (
                        <section key={key}>
                            <button className="remove" onClick={() => this.removeFont(key)}>Remover</button>
                            <p>Fonte {key+1}</p>
                            <input type="text" name="font" value={item.replace(/\%26/g,"&")} onChange={(evt) => this.changeFont(evt, key)}/>
                        </section>
                    )
                })}
                
                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base