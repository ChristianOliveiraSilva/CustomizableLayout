import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            rules: this.props.rules
        }
    }


    render() {
        const rules = this.state.rules;

        return (
            <div className="current-list">
                <h2>Regras atuais</h2>
                <div style={{padding: '10px'}}>
                    {
                        rules.length == 0 && <p>Nenhuma regra aplicada ainda</p>
                    }
                    {
                        rules.map((item, key) => {
                                const style = {backgroundColor: item.color}
                                return (
                                    <p key={key} className="tag" style={style}>{item.name}</p>
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