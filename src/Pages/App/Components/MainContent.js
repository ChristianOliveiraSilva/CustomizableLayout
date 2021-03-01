import React from 'react';

import PortfolioGallery from './MicroComponents/PortfolioGallery'
import SlideshowGallery from './MicroComponents/SlideshowGallery'
import Tabs from './MicroComponents/Tabs'
import Testimonials from './MicroComponents/Testimonials'

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        const config = this.props.config
        const globalConfig = this.props.globalConfig

        return (
            <main id="MainContent" style={config.style}>
                <PortfolioGallery config={config.components[0]}/>
                <SlideshowGallery config={config.components[1]}/>
                <Tabs config={config.components[2]}/>
                <Testimonials config={config.components[3]}/>
            </main>
        )
    }
}

export default MainContent