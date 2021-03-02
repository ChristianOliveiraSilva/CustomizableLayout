import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: '',
            text6: '',
            text7: '',
            text8: '',
            text9: '',
            text10: '',
        }

        if (this.props.template)
            this.state = {
                text1: this.props.template.components.footer.content.text1,
                text2: this.props.template.components.footer.content.text2,
                text3: this.props.template.components.footer.content.text3,
                text4: this.props.template.components.footer.content.text4,
                text5: this.props.template.components.footer.content.text5,
                text6: this.props.template.components.footer.content.text6,
                text7: this.props.template.components.footer.content.text7,
                text8: this.props.template.components.footer.content.text8,
                text9: this.props.template.components.footer.content.text9,
                text10: this.props.template.components.footer.content.text10
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
        console.log(this.state);
        return (
            <section>
                <h3>Rodapé</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Texto 1</label>
                                <input type="text" placeholder="Texto 1" name="text1" value={this.state.text1} onChange={this.changeInput} />

                                <label>Texto 2</label>
                                <input type="text" placeholder="Texto 2" name="text2" value={this.state.text2} onChange={this.changeInput} />

                                <label>Texto 3</label>
                                <input type="text" placeholder="Texto 3" name="text3" value={this.state.text3} onChange={this.changeInput} />

                                <label>Texto 4</label>
                                <input type="text" placeholder="Texto 4" name="text4" value={this.state.text4} onChange={this.changeInput} />

                                <label>Texto 5</label>
                                <input type="text" placeholder="Texto 5" name="text5" value={this.state.text5} onChange={this.changeInput} />
                            </td>
                            <td>
                                <label>Texto 6</label>
                                <input type="text" placeholder="Texto 6" name="text6" value={this.state.text6} onChange={this.changeInput} />

                                <label>Texto 7</label>
                                <input type="text" placeholder="Texto 7" name="text7" value={this.state.text7} onChange={this.changeInput} />

                                <label>Texto 8</label>
                                <input type="text" placeholder="Texto 8" name="text8" value={this.state.text8} onChange={this.changeInput} />

                                <label>Texto 9</label>
                                <input type="text" placeholder="Texto 9" name="text9" value={this.state.text9} onChange={this.changeInput} />

                                <label>Texto 10</label>
                                <input type="text" placeholder="Texto 10" name="text10" value={this.state.text10} onChange={this.changeInput} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn-submit">Salvar</button>
            </section>
        )
    }

}
export default Base