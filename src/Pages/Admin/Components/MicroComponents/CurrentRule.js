import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
        }

        this.changeInput = this.changeInput.bind(this)
    }

    changeInput (event, type, info) {
        let value;

        if (!type) {
            value = event.target.value;
        }

        switch (type) {
            case 4:
                value = event.target.value
                break;
            case 5:
            case 9:
                let values = String(info.value).split(' ')
                values[info.part] = event.target.value
                value = values.join(' ')
                break;
        
            default:
                value = 1
                break;
        }
        this.props.changeRuleValue(value)
    }

    render() {
        if (!this.props.rule) {
            return (
                <div className="current-rule">
                    <p>Nenhuma regra selecionada</p>
                </div>
            )            
        }

        return (
            <div className="current-rule">
                <input type="text" placeholder="Regra escolhida" value={this.props.rule.name} readOnly disabled />
                <InputRule rule={this.props.rule} changeInput={this.changeInput} changeRuleValue={this.props.changeRuleValue} />
                <button className="opc" onClick={() => this.props.changeRuleValue(1)}>Deletar a regra</button>
            </div>
        )
    }
}

// TYPEs
// 1- TEXTO
// 2- NUMERICO
// 3- COR
// 4- RANGE
// 5- 4 VALORES
// 9- BORDA

function InputRule(props) {
    switch (props.rule.type) {
        case 1:
            return (
                <input type="text" name={props.rule.css} value={props.rule.value} onChange={props.changeInput} placeholder={props.rule.name} />
            )
        case 2:
            return (
                <input type="number" name={props.rule.css} value={props.rule.value} onChange={props.changeInput} placeholder={props.rule.name} />
            )
        case 3:
            return (
                <input type="color" value={props.rule.value} onChange={props.changeInput} placeholder={props.rule.name} />
            )
        case 4:
            return (
                <select value={props.rule.value} onChange={(evt) => props.changeInput(evt, 4)}>
                    {
                        props.rule.range.map((item, key) => {
                                return (
                                    <option key={key} value={item.value}>{item.name}</option>
                                )
                            }
                        )
                    }
                </select>
            )
        case 5:
            let values = String(props.rule.value).split(' ');
            let valueTop = values[0] ? values[0] : ''
            let valueRight = values[1] ? values[1] : ''
            let valueBottom = values[2] ? values[2] : ''
            let valueLeft = values[3] ? values[3] : ''
           
            return (
                <div>
                    <input type="text" value={valueTop} onChange={(evt) => props.changeInput(evt, 5, { value: String(props.rule.value), part: 0})} placeholder="Valor da regra [topo]" />
                    <input type="text" value={valueRight} onChange={(evt) => props.changeInput(evt, 5, { value: String(props.rule.value), part: 1})} placeholder="Valor da regra [direita]" />
                    <input type="text" value={valueBottom} onChange={(evt) => props.changeInput(evt, 5, { value: String(props.rule.value), part: 2})} placeholder="Valor da regra [abaixo]" />
                    <input type="text" value={valueLeft} onChange={(evt) => props.changeInput(evt, 5, { value: String(props.rule.value), part: 3})} placeholder="Valor da regra [esquerda]" />
                </div>
            )
        case 9:
            let valuesBorder = String(props.rule.value).split(' ')
            let width = valuesBorder[0] ? valuesBorder[0] : ''
            let border = valuesBorder[1] ? valuesBorder[1] : 'solid'
            let color = valuesBorder[2] ? valuesBorder[2] : ''
            
            return (
                <div>
                    <input type="number" value={width} placeholder="Pixels da borda" onChange={(evt) => props.changeInput(evt, 9, { value: String(props.rule.value), part: 0})} />
                    <select value={border} onChange={(evt) => props.changeInput(evt, 9, { value: String(props.rule.value), part: 1})}>
                        <option value="dotted">pontilhado</option>
                        <option value="dashed">tracejadas</option>
                        <option value="solid">sólido</option>
                        <option value="double">em dobro</option>
                        <option value="groove">sulco</option>
                        <option value="ridge">cume</option>
                        <option value="inset">inset</option>
                        <option value="outset">início</option>
                        <option value="none">Nenhum</option>
                        <option value="hidden">escondido</option>
                    </select>
                    <input type="color" value={color} placeholder="Cor da borda" onChange={(evt) => props.changeInput(evt, 9, { value: String(props.rule.value), part: 2})} />
                </div>
            )
        default:
            return (
                <input type="text" disabled placeholder="Essa propriedade não foi carregada" />
            )
    }
}

export default Base