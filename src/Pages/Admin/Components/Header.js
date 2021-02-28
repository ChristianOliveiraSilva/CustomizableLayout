import React from 'react'

class Base extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section>
                <h2>Teste do cabeçalho</h2>
            </section>
        )
    }

}
export default Base