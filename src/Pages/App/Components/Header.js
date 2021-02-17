import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            config: props.config
        }
    }

    componentDidMount() {
        if (this.state.config.nav.hideOnScroll) {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("header").style.top = "0";
                } else {
                    document.getElementById("header").style.top = "-500px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    render() {
        const config = this.state.config
        const globalConfig = this.props.globalConfig

        return (
            <header id="header" style={config.style}>
                <h1>{config.nav.title}</h1>
                <nav>
                    {config.nav.links.map((link,key) => (
                        <a key={key} href={link.href}>{link.text}</a>
                    ))}
                </nav>
            </header>
        )
    }
}

export default Header