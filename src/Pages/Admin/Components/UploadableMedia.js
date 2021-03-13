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
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            const file = new FileReader();
            file.onload = function(e) {
                this.setState({
                    img: e.target.result
                })
            }
            file.onload = file.onload.bind(this);
            file.readAsDataURL(event.target.files[0]);
            
            const formData = new FormData();
            formData.append("img", event.target.files[0]); 
            formData.append("key", this.props.key); 
            formData.append("component", this.props.component); 

            const ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if (this.readyState == 4) {
            		console.log(this);
                }
            }

            ajax.open('POST',"localhost:3001",true);
            ajax.send(formData);
        }
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