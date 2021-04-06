import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";
import { exporter } from '../../../Helper/Caller';


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
        const {title, hideOnScroll, links, aboveTheFold} = this.state
        const nav = {title, hideOnScroll, links}
        const header = {nav}
        const leads = {component: { slideshow: {lead: aboveTheFold}}}
        const components = {header, aboveTheFold: leads}

        console.log({components});
        exporter({components})
    }


    changeInput (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    changeInputLink(event, id, obj) {
        const target = event.target;
        const value = target.value;

        let input = this.state[obj]
        input[id] = Object.assign(input[id], {[target.name]: value});

        this.setState({
            [obj]: input
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
                    title: "teste",
                    subtitle: "teste",
                    img: "/media/vazio.png",
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
        const fixedValues = `use:
        #PortfolioGallery -> para galeria de cursos
        #SlideshowGallery -> para slideshow de fotos
        #Accordion -> para FAQ
        #Testimonials -> para os testemunhos`;
        return (
            <section>
                <h1 className="title-content">Cabeçalho <Stylist /></h1>
                <br />
                <label>Título do Menu</label>
                <input type="text" placeholder="Título da Pagina" name="title" value={this.state.title} onChange={this.changeInput} />

                <br /><br />
                <label>Esconder menu ao rolar na Página?</label>
                <input type="checkbox" name="hideOnScroll" checked={this.state.hideOnScroll} onChange={this.changeInput} />
                <br />

                <h1 className="title-content">Links do cabeçalho</h1>
                <button className="add" onClick={() => this.addItem("links")}>Adicionar</button>
                {this.state.links.length == 0 && <p>Sem links</p>}
                {this.state.links.map((item, key) => (
                    <div key={key} className="content-item">
                        <button className="remove" onClick={() => this.removeItem("links", key)}>Remover</button>
                        <button className="remove" style={{backgroundColor: '#d9c466'}} onClick={() => alert(fixedValues)}>Ver valores fixos</button>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Nome do link</p>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Nome do link" name="text" value={item.text} onChange={(event) => this.changeInputLink(event, key, "links")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Link</td>
                                    <td>
                                        <input type="text" placeholder="Link" name="href" value={item.href} onChange={(event) => this.changeInputLink(event, key, "links")} />
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
                        <input type="text" placeholder="Título da Pagina" name="title" value={item.title} onChange={(event) => this.changeInputLink(event, key, "aboveTheFold")} />

                        <label>Subtítulo da Pagina</label>
                        <input type="text" placeholder="Subtítulo da Pagina" name="subtitle" value={item.subtitle} onChange={(event) => this.changeInputLink(event, key, "aboveTheFold")} />

                        <label>link</label>
                        <input type="text" placeholder="link" name="link" value={item.link} onChange={(event) => this.changeInputLink(event, key, "aboveTheFold")} />

                        <UploadableMedia img={item.img} item={key} component="aboveTheFold" />
                    </section>
                )})}

                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base