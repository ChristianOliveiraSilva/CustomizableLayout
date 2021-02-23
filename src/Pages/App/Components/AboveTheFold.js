import React from 'react';

import PortfolioGallery from "./MicroComponents/PortfolioGallery";
import SlideshowGallery from "./MicroComponents/SlideshowGallery";
import Tabs from "./MicroComponents/Tabs";
import Testimonials from "./MicroComponents/Testimonials";

class AboveTheFold extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            config: props.config,
            slide: 0
        }

        this.plusSlides = this.plusSlides.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
    }

    plusSlides(n) {
        this.setState({
            slide: this.state.slide + n
        });
    }
    
    currentSlide(n) {
        this.setState({
            slide: n
        });
    }
    
    render() {
        const config = this.state.config
        const globalConfig = this.props.globalConfig

        return (
            <section id="AboveTheFold" style={config.style}>
                <div className="slideshow-container">
                    { config.component.slideshow.lead.map((page,key) =>{
                        const {title, subtitle, imgPath, style} = page
                        const show = this.state.slide == key ? {display: 'block'} : {}
                        console.log(style, show);
                        return (
                            <div key={key} style={style, show} className="mySlides fade">
                                <div className="numbertext">{key+1} / 3</div>
                                <img src={imgPath} style={{width: '100%'}} />
                                <div className="text">{`${title} ${subtitle}`}</div>
                            </div>
                        )
                    }) }

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>

                <div style={{textAlign:'center'}}>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    <span className="dot" onClick={() => this.currentSlide(3)}></span>
                </div>
            </section>
        )
    }
}

export default AboveTheFold