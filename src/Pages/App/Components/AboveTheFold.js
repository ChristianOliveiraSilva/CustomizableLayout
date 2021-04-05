import React from 'react';

class AboveTheFold extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slide: 0,
            intervalID: null,
            intervalDots: null,
            showDots: true,
        }

        this.plusSlides = this.plusSlides.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
        this.hoverAbove = this.hoverAbove.bind(this)
    }

    componentDidMount() {
        let intervalID = setInterval(() => this.plusSlides(1), 4000)
        let intervalDots = setTimeout(() => { this.setState({ showDots: false }) }, 1000)
        this.setState({
            intervalID: intervalID,
            intervalDots: intervalDots
        })

    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID)
    }

    plusSlides(n) {
        const slide = this.state.slide + n
        const maxSize = this.props.config.component.slideshow.lead.length - 1

        if (slide >= 0 && slide <= maxSize) {
            this.setState({
                slide: slide
            })
        } else {
            this.setState({
                slide: 0
            })
        }
    }
    
    currentSlide(n) {
        const slide = n
        const maxSize = this.props.config.component.slideshow.lead.length - 1

        if (slide >= 0 && slide <= maxSize) {
            this.setState({
                slide: slide
            });
        }
    }

    hoverAbove () {
        clearInterval(this.state.intervalDots)
        let intervalDots = setTimeout(() => { this.setState({ showDots: false }) }, 2000)
        this.setState({ showDots: true, intervalDots: intervalDots })
    }
    
    render() {
        const config = this.props.config
        const globalConfig = this.props.globalConfig

        return (
            <section id="AboveTheFold" style={config.style} onMouseMove={this.hoverAbove}>
                <div className="slideshow-container">
                    { config.component.slideshow.lead.map((page,key) =>{
                        const {title, subtitle, img, style, link} = page
                        const show = this.state.slide == key ? {display: 'block'} : {}
                        const description = `${title}: ${subtitle}`

                        return (
                            <div key={key} style={style, show} className="mySlides fade">
                                <a href={link}>
                                    <div className="numbertext">{key+1} / {config.component.slideshow.lead.length}</div>
                                    <img src={img} alt={description} title={description} />
                                    <div className="text" title={description}>{description}</div>
                                </a>
                            </div>
                        )
                    }) }

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
                
                { this.state.showDots &&
                    <div className="dots" style={{textAlign:'center', zIndex:'2'}}>
                        <span className="dot" onClick={() => this.currentSlide(0)}></span>
                        <span className="dot" onClick={() => this.currentSlide(1)}></span>
                        <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    </div>
                }
            </section>
        )
    }
}

export default AboveTheFold