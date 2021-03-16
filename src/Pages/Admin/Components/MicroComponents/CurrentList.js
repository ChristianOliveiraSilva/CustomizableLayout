import React from 'react'

class Base extends React.Component {

    render() {
        const rules = this.props.rules

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