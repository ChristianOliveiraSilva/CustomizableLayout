import React from 'react'

import CurrentList from './CurrentList'
import RuleList from './RuleList'
import CurrentRule from './CurrentRule'
import rules from './Rules'

class Base extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rules: rules,
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
        let rules = this.state.rules
        rules[this.state.indexRule].value = value

        this.setState({
            rules: rules
        });
    }

    render() {
        const allRules = this.state.rules
        const currentListRules = allRules.filter((item) => item.value != '')
        const ruleListRules = allRules.filter((item) => item.value == '')
        const indexRule = this.state.indexRule
        const CurrentRuleRule = indexRule != null ? 
                                allRules[allRules.findIndex((item) => item.id == indexRule)] : null

        // console.log(allRules);
        return (
            <section className="modal">
                <section className="modal-content">
                    <span className="close" onClick={this.props.closeModal} title="clique para sair">&times;</span>
                    <h4>Regras</h4>

                    <section style={{padding:'10px'}}>
                        <CurrentList rules={currentListRules} changeIndexRule={this.changeIndexRule} />
                        <RuleList rules={ruleListRules} changeIndexRule={this.changeIndexRule} />
                        <CurrentRule rule={CurrentRuleRule} changeRuleValue={this.changeRuleValue} /> 
                    </section>
                    <button className="btn-close" onClick={this.props.closeModal} title="clique para sair">OK</button>
                </section>
            </section>
        )
    }

}
export default Base