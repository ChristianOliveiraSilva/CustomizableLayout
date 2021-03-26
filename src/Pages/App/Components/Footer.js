import React from 'react';
import facebookImg from '../../../Assets/facebook.png'
import instagramImg from '../../../Assets/instagram.png'

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
                    <div className="col-3">
                        <img src={globalConfig.logo} alt={globalConfig.siteName} className="logo" width="180"/>
                    </div>
                    <div className="col-3">
                        <h3>{config.content.text1}</h3>
                        <a href={config.content.link2}>
                            <p>{config.content.text2}</p>
                        </a>
                        <a href={config.content.link3}>
                            <p>{config.content.text3}</p>
                        </a>
                        <a href={config.content.link4}>
                            <p>{config.content.text4}</p>
                        </a>
                        <a href={config.content.link5}>
                            <p>{config.content.text5}</p>
                        </a>
                    </div>
                    <div className="col-3">
                        <h3>Siga-nos</h3>
                        <a href={config.facebook}>
                            <img src={facebookImg} className="social-icon" alt="Acesse nosso facebook" title="Acesse nosso facebook"/>
                        </a>
                        <a href={config.instagram}>
                            <img src={instagramImg} className="social-icon" alt="Acesse nosso instagram" title="Acesse nosso instagram"/>
                        </a>
                    </div>
                    <div className="backtop" title="Volte ao topo" onClick={() => window.scrollTo(0, 0)}></div>
                </div>

                <p style={{marginTop: '15px', textAlign: 'center'}}><small>{new Date().getFullYear()} | Todos os Direitos Reservados | Produzido por <a href="https://www.facebook.com/comoeuvimpararaki/">Christian</a></small></p>
            </footer>
        )
    }
}

export default Footer