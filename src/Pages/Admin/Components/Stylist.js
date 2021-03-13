import React from 'react'
import img from '../../../Assets/style.png'


class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            css: {},
        }

        this.changeInput = this.changeInput.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    changeInput (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    openModal () {
        alert('clicado')
    }

    render() {

        return (
            <span>
                <img src={img} onClick={this.openModal} />
                {/* <input type="checkbox" name="hideOnScroll" value={this.state.hideOnScroll} onChange={this.changeInput} /> */}
            </span>
        )
    }

}
export default Base