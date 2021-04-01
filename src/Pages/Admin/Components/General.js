import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";
import axios from 'axios';

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            siteName: '',
            logo: '',
            style: '',
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.config.title,
                siteName: this.props.template.config.siteName,
                logo: this.props.template.config.logo,
                style: this.props.template.config.style,
            }            
        }

        this.changeInput = this.changeInput.bind(this)
        this.save = this.save.bind(this)
    }

    save () {
        axios.get('localhost:3001/', {
            // headers: {                  
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Headers": "Authorization", 
            //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            //     "Content-Type": "application/json;charset=UTF-8"                   
            // }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert(error);
        });
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
                <h1>Configurações Genéricas <Stylist component="asdasdas" /></h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Nome da Página</label>
                <input type="text" placeholder="Nome da Página" name="siteName" value={this.state.siteName} onChange={this.changeInput} />

                <label>Logo da Página</label>
                <UploadableMedia img={this.state.logo} item={0} component="logo" />
                
                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base