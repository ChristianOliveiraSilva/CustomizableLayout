import React from 'react'
import UploadableMedia from "./UploadableMedia";
import Stylist from "./Stylist";
import { exporter } from '../../../Helper/Caller';


class Base extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            components: []
        }

        if (this.props.template) {
            this.state = {
                components: this.props.template.components.mainContent.components
            }
        }
        
        this.changeInput = this.changeInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.save = this.save.bind(this)
    }

    save () {
        const components = this.state.components
        exporter({components: {mainContent: {components: components}}})
    }

    addItem (component) {
        let value = {}
        let index = 0

        switch (component) {
            case "portfolioGallery":
                index = 0
                value = {
                    title: "",
                    subtitle: "",
                    link: "",
                    img: "media/vazio.png"
                }
                break;
            case "slideshowGallery":
                index = 1
                value = {
                    img: "media/vazio.png",
                    link: "",
                    legend: ""            
                }  
                break;
            case "accordion":
                index = 2
                value = {
                    question: "",
                    text: "",
                    style: {}                
                }  
                break;
            case "testimonials":
                index = 3
                value = {
                    name: "",
                    img: "media/vazio.png",
                    text: "",
                    iframe: "",
                    style: {}                
                }  
                break;
        }

        const currentComponent = this.state.components
        currentComponent[index].content.push(value)

        this.setState({
            components: currentComponent
        })
    }

    removeItem (keyInComponent, index) {
        let value = this.state.components
        value[keyInComponent].content = value[keyInComponent].content.filter((item, key) => {
            return index != key;
        })

        this.setState({
            components: value
        })
    }

    changeInput (event, idComponent, key) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let components = this.state.components

        if (typeof key !== 'undefined') {
            console.log();
            components[idComponent].content[key][name] = value
        } else {
            components[idComponent][name] = value
        }
    
        this.setState({
            components: components
        });
    }

    render() {
        if (!this.state.components) {
            return <p>Erro ao carregar o component</p>;
        }

        const portfolioGallery = this.state.components[0]
        const slideshowGallery = this.state.components[1]
        const accordion = this.state.components[2]
        const testimonials = this.state.components[3]

        return (
            <section>
                <h1>Gerir Conteúdo</h1>
                <h1 className="title-content">Galeria do portfólio <Stylist /></h1>

                <label>Título da Galeria</label>
                <input type="text" placeholder="Título da Galeria" name="title" value={portfolioGallery.title} onChange={(e) => this.changeInput(e, 0)} />

                <label>SubTítulo da Galeria</label>
                <input type="text" placeholder="SubTítulo da Galeria" name="subtitle" value={portfolioGallery.subtitle} onChange={(e) => this.changeInput(e, 0)} />

                <h3 className="">Imagens do portfólio</h3>
                <button className="add" onClick={() => this.addItem("portfolioGallery")}>Adicionar</button>
                { portfolioGallery.content.length == 0 && <p>Sem imagens</p> }
                {
                    portfolioGallery.content.map((item, key) => (
                        <div key={key} className="content-item">
                            <button className="remove" onClick={() => this.removeItem(0, key)}>Remover</button>
                            
                            <label>Título deste Curso</label>
                            <input type="text" placeholder="Título do curso" name="title" value={item.title} onChange={(e) => this.changeInput(e, 0, key)} />
                            
                            <label>SubTítulo deste Curso</label>
                            <input type="text" placeholder="SubTítulo do curso" name="subtitle" value={item.subtitle} onChange={(e) => this.changeInput(e, 0, key)} />
                            
                            <label>Descrição deste Curso</label>
                            <input type="text" placeholder="Descrição deste Curso" name="description" value={item.description} onChange={(e) => this.changeInput(e, 0, key)} />

                            <label>Link deste Curso <small>(cuidado ao alterar os links)</small></label>
                            <input type="text" placeholder="Link deste Curso" name="link" value={item.link} onChange={(e) => this.changeInput(e, 0, key)} />

                            <UploadableMedia img={item.img} item={key} component="PortfolioGallery" />
                        </div>
                    ))
                }
                
                <h1 className="title-content">Galeria de apresentação de slides <Stylist /></h1>
                <button className="add" onClick={() => this.addItem("slideshowGallery")}>Adicionar</button>
                { slideshowGallery.content.length == 0 && <p>Sem Slides</p> }
                {
                    slideshowGallery.content.map((item, key) => (
                        <div key={key} className="content-item">
                            <button className="remove" onClick={() => this.removeItem(1, key)}>Remover</button>
                            <label>Legenda</label>
                            <input type="text" placeholder="Texto" name="legend" value={item.legend} onChange={(e) => this.changeInput(e, 1, key)} />

                            <label>link</label>
                            <input type="text" placeholder="link" name="link" value={item.link} onChange={(e) => this.changeInput(e, 1, key)} />

                            <UploadableMedia img={item.img} item={key} component="SlideshowGallery" />
                        </div>
                    ))
                }

                <h1 className="title-content">Abas <Stylist /></h1>
                <button className="add" onClick={() => this.addItem("accordion")}>Adicionar</button>
                { accordion.content.length == 0 && <p>Sem questões</p> }
                {
                    accordion.content.map((item, key) => (
                        <div key={key} className="content-item">
                            <button className="remove" onClick={() => this.removeItem(2, key)}>Remover</button>
                            <label>Questão</label>
                            <input type="text" placeholder="Questão" name="question" value={item.question} onChange={(e) => this.changeInput(e, 2, key)} />
                        
                            <label>Texto</label>
                            <input type="text" placeholder="Texto" name="text" value={item.text} onChange={(e) => this.changeInput(e, 2, key)} />
                        </div>
                    ))
                }
                
                <h1 className="title-content">Testemunhos <Stylist /></h1>
                <button className="add" onClick={() => this.addItem("testimonials")}>Adicionar</button>
                { testimonials.content.length == 0 && <p>Sem Testemunhos</p> }
                {
                    testimonials.content.map((item, key) => (
                        <div key={key} className="content-item">
                            <button className="remove" onClick={() => this.removeItem(3, key)}>Remover</button>
                            <label>Nome</label>
                            <input type="text" placeholder="Nome" name="name" value={item.name} onChange={(e) => this.changeInput(e, 3, key)} />
                            <UploadableMedia img={item.img} item={key} component="Testimonials" />
                        
                            <label>Texto</label>
                            <input type="text" placeholder="Texto" name="text" value={item.text} onChange={(e) => this.changeInput(e, 3, key)} />
                        
                            <label>Youtube link</label>
                            <input type="text" placeholder="Youtube link" name="iframe" value={item.iframe} onChange={(e) => this.changeInput(e, 3, key)} />
                        </div>
                    ))
                }  

                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base