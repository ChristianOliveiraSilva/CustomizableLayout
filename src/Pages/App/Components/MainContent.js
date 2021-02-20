import React from 'react';

import PortfolioGallery from './MicroComponents/PortfolioGallery'
import SlideshowGallery from './MicroComponents/SlideshowGallery'
import Tabs from './MicroComponents/Tabs'
import Testimonials from './MicroComponents/Testimonials'

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
                <PortfolioGallery />
                <SlideshowGallery />
                <Tabs />
                <Testimonials />
                este component ainda está em teste
            </main>
        )
    }
}

export default MainContent