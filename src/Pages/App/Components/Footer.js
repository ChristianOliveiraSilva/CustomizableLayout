import React from 'react';

class Footer extends React.Component {

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
            <footer id="footer" className="container" style={config.style}>
                <div className="row">
                    <div className="col">
                        <h1>{globalConfig.siteName}</h1>
                        <img src={globalConfig.logo} alt={globalConfig.siteName} width="180"/>
                    </div>
                    <div className="col">
                        <h3>{config.content.text1}</h3>
                        <h3>{config.content.text2}</h3>
                        <h3>{config.content.text3}</h3>
                        <h3>{config.content.text4}</h3>
                        <h3>{config.content.text5}</h3>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer