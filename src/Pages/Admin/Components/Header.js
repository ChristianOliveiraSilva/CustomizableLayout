import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";
import axios from 'axios';

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
                aboveTheFold: this.props.template.components.aboveTheFold.component.slideshow.lead,
            }
        }

        this.changeInput = this.changeInput.bind(this)
        this.changeInputLink = this.changeInputLink.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.save = this.save.bind(this)
    }

    save () {
        
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

    addItem (component) {
        let value = {}

        switch (component) {
            case "links":
                value = {
                    text: "",
                    href: ""
                }                
                break;
            case "aboveTheFold":
                value = {
                    title: "asdsad",
                    subtitle: "asdasdsdsadsa 2",
                    imgPath: "/media/vazio.png",
                    link: "#",
                    style: {}
                }                
                break;
        }

        const currentComponent = this.state[component]
        this.setState({
            [component]: [...currentComponent, value]
        })
    }

    removeItem (component, index) {
        let value = this.state[component]
        value = value.filter((item, key) => {
            return index != key;
        })

        this.setState({
            [component]: value
        })
    }

    render() {

        return (
            <section>
                <h1 className="title-content">Configurações Genéricas <Stylist /></h1>
                <br />
                <label>Título da Pagina</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <label>Esconder menu ao rolar na Página?</label>
                <input type="checkbox" name="hideOnScroll" value={this.state.hideOnScroll} onChange={this.changeInput} />
                <br />

                <h1 className="title-content">Links do cabeçalho</h1>
                <button className="add" onClick={() => this.addItem("links")}>Adicionar</button>
                {this.state.links.length == 0 && <p>Sem links</p>}
                {this.state.links.map((item, key) => (
                    <div key={key} className="content-item">
                        <button className="remove" onClick={() => this.removeItem("links", key)}>Remover</button>
                        <table>
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
                    </div>
                ))}

                <h1 className="title-content">Imagens da primeira galeria <Stylist component="asdasdas" /></h1>
                <button className="add" onClick={() => this.addItem("aboveTheFold")}>Adicionar</button>
                {this.state.aboveTheFold.length == 0 && <p>Sem Imagens</p>}
                {this.state.aboveTheFold.map((item, key) => {
                    return (
                    <section key={key} className="content-item">
                        <button className="remove" onClick={() => this.removeItem("aboveTheFold", key)}>Remover</button>

                        <label>Título da Pagina</label>
                        <input type="text" placeholder="Título da Pagina" name="title" value={item.title} onChange={this.changeInput} />

                        <label>Subtítulo da Pagina</label>
                        <input type="text" placeholder="Subtítulo da Pagina" name="subtitle" value={item.subtitle} onChange={this.changeInput} />

                        <label>link</label>
                        <input type="text" placeholder="link" name="link" value={item.link} onChange={this.changeInput} />

                        <UploadableMedia img={item.imgPath} item={key} component="AboveTheFold" />
                    </section>
                )})}

                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base