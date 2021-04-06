import React from 'react'

import CurrentList from './CurrentList'
import RuleList from './RuleList'
import CurrentRule from './CurrentRule'
import roles from './Rules'

class Base extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rules: roles,
            indexRule: null
        }

        this.changeIndexRule = this.changeIndexRule.bind(this)
        this.changeRuleValue = this.changeRuleValue.bind(this)
    }

    changeIndexRule (value) {    
        this.setState({
            indexRule: value
        });
    }

    changeRuleValue (value) {
        let allRules = this.state.rules
        allRules[this.state.indexRule].value = value

        this.setState({
            rules: allRules
        });
    }

    render() {
        const allRules = this.state.rules
        const currentListRules = allRules.filter((item) => item.value != '')
        const ruleListRules = allRules.filter((item) => item.value == '')
        const indexRule = this.state.indexRule
        const currentRule = indexRule != null ? allRules[allRules.findIndex((item) => item.id == indexRule)] : null

        return (
            <section className="modal">
                <section className="modal-content">
                    <span className="close" onClick={this.props.closeModal} title="clique para sair">&times;</span>
                    <h4>Regras</h4>

                    <section style={{padding:'10px'}}>
                        <CurrentList rules={currentListRules} changeIndexRule={this.changeIndexRule} />
                        <RuleList rules={ruleListRules} changeIndexRule={this.changeIndexRule} />
                        <CurrentRule rule={currentRule} changeRuleValue={this.changeRuleValue} /> 
                    </section>
                    <button className="btn-close" onClick={this.props.closeModal} title="clique para sair">OK</button>
                </section>
            </section>
        )
    }

}
export default Base