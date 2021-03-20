import React from 'react'
import UploadableMedia from "./UploadableMedia";

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            hideOnScroll: '',
            links: [],
            aboveTheFold: {},
        }

        if (this.props.template) {
            this.state = {
                title: this.props.template.components.header.nav.title,
                hideOnScroll: this.props.template.components.header.nav.hideOnScroll,
                links: this.props.template.components.header.nav.links,
                aboveTheFold: this.props.template.components.aboveTheFold,
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

                {this.state.links.map((item, key) => (
                    <table key={key}>
                        <tbody>
                                <tr>
                                    <td>
                                        <p>Nome do link</p>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Nome do link" name="text" value={item.text} onChange={(event) => this.changeInputLink(event, key)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Link</td>
                                    <td>
                                        <input type="text" placeholder="Link" name="href" value={item.href} onChange={(event) => this.changeInputLink(event, key)} />
                                        <small><span className="muted">{item.href}</span> Use esse codigo para conseguir linkar na pagina</small>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                ))}

                <h3>Imagens da primeira galeria</h3>
                {this.state.aboveTheFold.component.slideshow.lead.map((item, key) => (
                    <section key={key} style={{marginTop:'20px', border: '1px solid black'}}>
                        
                        <label>Título da Pagina</label>
                        <input type="text" placeholder="Título da Pagina" name="title" value={item.title} onChange={this.changeInput} />

                        <label>Subtítulo da Pagina</label>
                        <input type="text" placeholder="Subtítulo da Pagina" name="subtitle" value={item.subtitle} onChange={this.changeInput} />

                        <label>link</label>
                        <input type="text" placeholder="link" name="link" value={item.link} onChange={this.changeInput} />

                        <UploadableMedia img={item.imgPath} item={key} component="AboveTheFold" />
                    </section>
                ))}

                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base