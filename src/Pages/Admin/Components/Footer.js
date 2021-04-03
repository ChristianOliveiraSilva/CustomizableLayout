import React from 'react'
import Stylist from "./Stylist";
import { exporter } from '../../../Helper/Caller';


class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: '',
            link2: '',
            link3: '',
            link4: '',
            link5: '',
            facebook: '',
            instagram: '',
        }

        if (this.props.template)
            this.state = {
                text1: this.props.template.components.footer.content.text1,
                text2: this.props.template.components.footer.content.text2,
                text3: this.props.template.components.footer.content.text3,
                text4: this.props.template.components.footer.content.text4,
                text5: this.props.template.components.footer.content.text5,
                link2: this.props.template.components.footer.content.link2,
                link3: this.props.template.components.footer.content.link3,
                link4: this.props.template.components.footer.content.link4,
                link5: this.props.template.components.footer.content.link5,
                facebook: this.props.template.components.footer.facebook,
                instagram: this.props.template.components.footer.instagram
            }
        this.changeInput = this.changeInput.bind(this)
        this.save = this.save.bind(this)
    }

    save () {
        const {text1, text2, text3, text4, text5, link2, link3, link4, link5} = this.state
        const content = {text1, text2, text3, text4, text5, link2, link3, link4, link5}
        const {facebook, instagram} = this.state

        let footer = {content: content, facebook: facebook, instagram: instagram}
        let obj = {components: {footer: footer}}
        exporter(obj)
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
                <h3>Rodapé <Stylist /></h3>

                <label>Texto Maior</label>
                <input type="text" placeholder="Texto Maior" name="text1" value={this.state.text1} onChange={this.changeInput} />

                <table>
                    <tbody>
                        <tr>
                            <td>

                                <label>Texto 1</label>
                                <input type="text" placeholder="Texto 1" name="text2" value={this.state.text2} onChange={this.changeInput} />

                                <label>Texto 2</label>
                                <input type="text" placeholder="Texto 2" name="text3" value={this.state.text3} onChange={this.changeInput} />

                                <label>Texto 3</label>
                                <input type="text" placeholder="Texto 3" name="text4" value={this.state.text4} onChange={this.changeInput} />
                            
                                <label>Texto 4</label>
                                <input type="text" placeholder="Texto 4" name="text5" value={this.state.text5} onChange={this.changeInput} />
                            
                                <label>Facebook</label>
                                <input type="text" placeholder="Facebook" name="facebook" value={this.state.facebook} onChange={this.changeInput} />
                            </td>
                            <td>
                                <label>Link 1</label>
                                <input type="text" placeholder="Link 1" name="link2" value={this.state.link2} onChange={this.changeInput} />

                                <label>Link 2</label>
                                <input type="text" placeholder="Link 2" name="link3" value={this.state.link3} onChange={this.changeInput} />

                                <label>Link 3</label>
                                <input type="text" placeholder="Link 3" name="link4" value={this.state.link4} onChange={this.changeInput} />

                                <label>Link 4</label>
                                <input type="text" placeholder="Link 4" name="link5" value={this.state.link5} onChange={this.changeInput} />
                            
                                <label>Instagram</label>
                                <input type="text" placeholder="Instagram" name="instagram" value={this.state.instagram} onChange={this.changeInput} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn-submit" onClick={this.save}>Salvar</button>
            </section>
        )
    }

}
export default Base