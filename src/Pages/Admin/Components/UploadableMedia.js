import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.item = props.item
        this.id = Math.floor(Math.random() * 90000) + 1
        this.state = {
            img: props.img,
        }

        this.changeInput = this.changeInput.bind(this)
    }

    changeInput (event) {
        alert()
    }

    render() {
        const prefix = 'file'+this.id
        return (
            <section className="container">
                <label htmlFor={prefix}>
                    <img src={this.state.img} className="img-show" title="Selecione um arquivo"/>
                </label>
                <span className="middle">Selecione um arquivo</span>
                <input type="file" id={prefix} name={prefix} onChange={this.changeInput}/>
            </section>
        )
    }

}
export default Base