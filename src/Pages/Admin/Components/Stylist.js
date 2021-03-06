import React from 'react'
import img from '../../../Assets/style.png'

import Modal from './MicroComponents/Modal'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            show: false,
            css: this.props.css,
        }

        this.changeInput = this.changeInput.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
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
        this.setState({
            show: true
        })
    }

    closeModal () {
        this.setState({
            show: false
        })
    }

    render() {

        return (
            <span>
                <img src={img} style={{cursor: 'pointer', verticalAlign: 'bottom'}} onClick={this.openModal} title={this.props.component}/>
                {this.state.show && <Modal closeModal={this.closeModal} />}
            </span>
        )
    }

}
export default Base