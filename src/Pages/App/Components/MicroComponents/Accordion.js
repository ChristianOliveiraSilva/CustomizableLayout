import "./Style/Accordion.css";
import React from 'react';

class Accordion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: -1
        }

        this.open = this.open.bind(this) 
    }

    open(menu) {
        if (menu == this.state.show) {
            this.setState({
                show: -1
            })
        } else {
            this.setState({
                show: menu
            })
        }
    }

    render() {
        const config = this.props.config

        return (
            <section id="Accordion" className="tab-container" style={config.style}>
                <div style={{textAlign: 'center', padding: '8px'}}>
                    <h2 className="title-accordion">Esclareça Suas Dúvidas</h2>
                    <p className="subtitle-accordion">Ainda com dúvidas? Consulte nosso FAQ abaixo para saber todos os detalhes</p>
                </div>
                {
                    config.content.map((item, key) => (
                        <article key={key}>
                            <button className="accordion" onClick={() => this.open(key)}>{item.question}</button>
                            { this.state.show == key &&
                            <div className="panel" style={item.style}>
                                <p>{item.text}</p>
                            </div> } 
                        </article>
                    ))
                }
            </section>
        )
    }
}

export default Accordion