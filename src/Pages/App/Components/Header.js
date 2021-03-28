import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            config: props.config,
            open: false
        }

        this.toggleModal = this.toggleModal.bind(this)
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

    toggleModal (evt) {
        evt.target.blur()
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const config = this.state.config
        const globalConfig = this.props.globalConfig

        const links = config.nav.links
        const modalClassName = this.state.open ? 'active' : ''
        const hamburguerButtonText = this.state.open ? 'fechar' : '☰'

        return (
            <header id="header" style={config.style}>
                <h1>{config.nav.title}</h1>
                
                { !this.props.closeNavbar ?
                    <nav className={modalClassName}>
                        { links.map((link,key) => (
                            <a key={key} href={link.href}>{link.text}</a>
                        )) }

                        <a className="icon" onClick={this.toggleModal}>{hamburguerButtonText}</a>
                    </nav>
                    :
                    <nav className="active">
                        <a href="/">Voltar</a>
                    </nav>
                }

            </header>
        )
    }
}

export default Header