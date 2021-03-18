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
                        <img src={globalConfig.logo} alt={globalConfig.siteName} className="logo" width="180"/>
                    </div>
                    <div className="col">
                        <p>{config.content.text1}</p>
                        <p>{config.content.text2}</p>
                        <p>{config.content.text3}</p>
                        <p>{config.content.text4}</p>
                        <p>{config.content.text5}</p>
                    </div>
                    <div className="col">
                        <p>{config.content.text6}</p>
                        <p>{config.content.text7}</p>
                        <p>{config.content.text8}</p>
                        <p>{config.content.text9}</p>
                        <p>{config.content.text10}</p>
                    </div>
                </div>
                <p style={{textAlign: 'center'}}><small>{new Date().getFullYear()} |
                Todos os Direitos Reservados |
                Produzido por <a href="https://www.facebook.com/comoeuvimpararaki/">Christian</a></small></p>
            </footer>
        )
    }
}

export default Footer