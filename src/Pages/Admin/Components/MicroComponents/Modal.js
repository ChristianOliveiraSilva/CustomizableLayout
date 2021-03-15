import React from 'react'

import CurrentList from './CurrentList'
import RuleList from './RuleList'
import CurrentRule from './CurrentRule'
import rules from './Rules'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            rules: rules
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

        const currentListRules = this.state.rules
        const ruleListRules = this.state.rules

        return (
            <section className="modal">
                <section className="modal-content">
                    <span className="close" onClick={this.props.closeModal} title="clique para sair">&times;</span>
                    <h4>Regras</h4>

                    <section style={{padding:'10px'}}>
                        <CurrentList rules={currentListRules}/>
                        <RuleList rules={ruleListRules}/>
                        <CurrentRule /> 
                    </section>
                    <button className="btn-close" onClick={this.props.closeModal} title="clique para sair">OK</button>
                </section>
            </section>
        )
    }

}
export default Base