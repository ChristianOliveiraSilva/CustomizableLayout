import React from 'react'

import General from "./General";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class Configuration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: 2
        }

        this.pages = [
            General,
            Header,
            Content,
            Footer
        ]
        this.changeContent = this.changeContent.bind(this)
    }

    componentDidMount() {
        document.title = "Altere o sistema"
    }

    changeContent(n) {
        this.setState({
            content: n
        })
    }

    render() {
        const WrappedContent = this.pages[this.state.content]

        return (
            <section id="admin-system">
                <div className="sidenav">
                    <a onClick={() => this.changeContent(0)}>Configurações Genéricas</a>
                    <a onClick={() => this.changeContent(1)}>Cabeçalho</a>
                    <a onClick={() => this.changeContent(2)}>Gerir Conteúdo</a>
                    <a onClick={() => this.changeContent(3)}>Rodapé</a>
                </div>
                
                <div className="main-admin-content">
                    <WrappedContent template={this.props.template} />
                </div>
            </section>
        )
    }

}
export default Configuration