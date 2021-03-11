import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            img: '',
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

        return (
            <section>
                
                <label>Esconder menu ao rolar na Página?</label>
                <input type="checkbox" name="hideOnScroll" value={this.state.hideOnScroll} onChange={this.changeInput} />
                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base