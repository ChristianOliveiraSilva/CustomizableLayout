import React from 'react'
import UploadableMedia from "./UploadableMedia";

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
    }

    changeInput (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
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
                <h1 className="title-content">Galeria de portfólio</h1>

                <label>Título da Galeria</label>
                <input type="text" placeholder="Título da Galeria" name="title" value={portfolioGallery.title} onChange={this.changeInput} />

                <label>SubTítulo da Galeria</label>
                <input type="text" placeholder="SubTítulo da Galeria" name="SubTitle" value={portfolioGallery.subtitle} onChange={this.changeInput} />

                {
                    portfolioGallery.content.map((item, key) => (
                        <div key={key} className="bordered">
                            <UploadableMedia img={item.img} item={key} component="PortfolioGallery" />
                            
                            <label>Título desta Imagem</label>
                            <input type="text" placeholder="Título da IMG" name="Title" value={portfolioGallery.subtitle} onChange={this.changeInput} />
                            
                            <label>SubTítulo desta Imagem</label>
                            <input type="text" placeholder="SubTítulo da IMG" name="SubTitle" value={portfolioGallery.subtitle} onChange={this.changeInput} />
                        </div>
                    ))
                }
                
                <h1 className="title-content">Galeria de apresentação de slides</h1>
                <label>Título da Galeria</label>
                <input type="text" placeholder="Título da Galeria" name="title" value={slideshowGallery.caption} onChange={this.changeInput} />


                <h1 className="title-content">Abas</h1>
                {
                    accordion.content.map((item, key) => (
                        <div key={key} className="bordered">
                            <label>Questão</label>
                            <input type="text" placeholder="Questão" name="question" value={item.question} onChange={this.changeInput} />
                        
                            <label>Texto</label>
                            <input type="text" placeholder="Texto" name="text" value={item.text} onChange={this.changeInput} />
                        </div>
                    ))
                }
                
                <h1 className="title-content">Testemunhos</h1>
                {
                    testimonials.content.map((item, key) => (
                        <div key={key} className="bordered">
                            <label>Nome</label>
                            <input type="text" placeholder="Nome" name="name" value={item.name} onChange={this.changeInput} />
                            <UploadableMedia img={item.img} item={key} component="Testimonials" />
                        
                            <label>Texto</label>
                            <input type="text" placeholder="Texto" name="text" value={item.text} onChange={this.changeInput} />
                        
                            <label>Youtube link</label>
                            <input type="text" placeholder="Youtube link" name="iframe" value={item.iframe} onChange={this.changeInput} />
                        </div>
                    ))
                }  

            </section>
        )
    }

}
export default Base