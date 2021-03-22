import React from 'react';

import Header from "./Header";
import AboveTheFold from "./AboveTheFold";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Engine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            template: props.template
        }
    }

    componentDidMount() {
        const config = this.state.template.config
        document.title = config.title
    }
    
    render() {
        const { config, components } = this.state.template
        const { header, aboveTheFold, mainContent, footer } = components

        return (
            <div style={config.globalStyle}>
                <Header config={header} globalConfig={config} />
                <AboveTheFold config={aboveTheFold} globalConfig={config} />
                <MainContent config={mainContent} globalConfig={config} />
                <Footer config={footer} globalConfig={config} />
            </div>
        )
    }
}

export default Engine