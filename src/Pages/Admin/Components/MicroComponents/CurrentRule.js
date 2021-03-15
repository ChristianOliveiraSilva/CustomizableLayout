import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
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
            <div className="current-rule">
                <input type="text" name="" placeholder="Regra escolhida" readOnly />
                <input type="text" name="" placeholder="Valor da regra" />
                <button className="opc">Deletar a regra</button>
            </div>
        )
    }

}
export default Base