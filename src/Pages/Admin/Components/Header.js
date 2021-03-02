import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            hideOnScroll: '',
            links: [],
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.components.header.nav.title,
                hideOnScroll: this.props.template.components.header.nav.hideOnScroll,
                links: this.props.template.components.header.nav.links,
            }            
        }

        this.changeInput = this.changeInput.bind(this)
        this.changeInputLink = this.changeInputLink.bind(this)
    }

    changeInput (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    changeInputLink(event, id) {
        const target = event.target;
        const value = target.value;

        let links = this.state.links
        links[id] = {text: value, href: links[id].href}

        this.setState({
            links: links
        });
    }

    render() {

        return (
            <section>
                <h1>Configurações Genéricas</h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Esconder menu ao rolar na Página?</label>
                <input type="checkbox" name="hideOnScroll" value={this.state.hideOnScroll} onChange={this.changeInput} />
                <br />

                <table>
                    <tbody>
                        {this.state.links.map((item, key) => (
                            <tr key={key}>
                                <td>
                                    <input type="text" placeholder="Nome do link" name="title" value={item.text} onChange={(event) => this.changeInputLink(event, key)} />
                                </td>
                                <td className="muted">{item.href}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base