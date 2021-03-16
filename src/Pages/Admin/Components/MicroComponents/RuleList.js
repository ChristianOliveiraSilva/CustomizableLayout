import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            rules: this.props.rules
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
        const rules = this.props.rules

        return (
            <div className="rule-list">
                <h3>Lista de regras Disponíveis</h3>
                <div style={{padding: '10px'}}>
                    {
                        rules.length == 0 && <p>Todas as regras foram aplicadas ou estão inexistentes</p>
                    }
                    {
                        rules.map((item, key) => {
                                const style = {backgroundColor: item.color}
                                return (
                                    <p key={key} className="tag" style={style} onClick={() => this.props.changeIndexRule(item.id)}>{item.name}</p>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }

}
export default Base