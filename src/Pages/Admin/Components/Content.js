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
        console.log(this.state.components);
        return (
            <section>
                <h1>Galeria de portfólio</h1>

                <label>Título da Galeria</label>
                <input type="text" placeholder="Título da Galeria" name="title" value={this.state.components[0].title} onChange={this.changeInput} />

                <label>SubTítulo da Galeria</label>
                <input type="text" placeholder="SubTítulo da Galeria" name="SubTitle" value={this.state.components[0].subtitle} onChange={this.changeInput} />

                {
                    this.state.components[0].content.map((item, key) => (
                        <div key={key} className="bordered">
                            <UploadableMedia img={item.img} item={key} />
                            
                            <label>Título desta Imagem</label>
                            <input type="text" placeholder="Título da IMG" name="Title" value={this.state.components[0].subtitle} onChange={this.changeInput} />
                            
                            <label>SubTítulo desta Imagem</label>
                            <input type="text" placeholder="SubTítulo da IMG" name="SubTitle" value={this.state.components[0].subtitle} onChange={this.changeInput} />
                        </div>
                    ))
                }
                
                
                <h1>Galeria de apresentação de slides</h1>

                
                
                <h1>Abas</h1>

                
                
                <h1>Testemunhos</h1>

            </section>
        )
    }

}
export default Base