import React from 'react';

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            config: props.config
        }
    }
    
    render() {
        const config = this.state.config
        const globalConfig = this.props.globalConfig

        return (
            <main id="MainContent" style={config.style}>
                {config.components.map((component, key) => {
                    return <h1 key={key}>dasdds</h1>
                })}
            </main>
        )
    }
}

export default MainContent