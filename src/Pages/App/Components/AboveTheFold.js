import React from 'react';

class AboveTheFold extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            config: props.config
        }
    }

    componentDidMount() {
        
    }
    
    render() {
        const config = this.state.config
        const globalConfig = this.props.globalConfig

        return (
            <section id="AboveTheFold" style={config.style}>
                { config.component.slideshow.lead.map((page,key) =>{
                    const {title, subtitle, imgPath, style} = page
                    return (
                        <div key={key}>
                            <p style={style}>{`${title} ${subtitle}`}</p>
                        </div>
                    )
                }) }
            </section>
        )
    }
}

export default AboveTheFold