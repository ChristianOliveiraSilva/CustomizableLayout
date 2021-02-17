import React from 'react';

class Header extends React.Component {

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
            <header id="header" style={config.style}>
                <h1>{config.nav.title}</h1>
                <nav>
                    <ul>
                        {config.nav.links.map((link,key) => (
                            <li key={key}><a href={link.href}>{link.text}</a></li>
                            ))}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header