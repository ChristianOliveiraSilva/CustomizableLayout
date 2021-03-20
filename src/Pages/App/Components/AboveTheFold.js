import React from 'react';

class AboveTheFold extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slide: 0,
            intervalID: null
        }

        this.plusSlides = this.plusSlides.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
    }

    componentDidMount() {
        let intervalID = setInterval(() => this.plusSlides(1), 4000)
        this.setState({
            intervalID: intervalID
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
    
    render() {
        const config = this.props.config
        const globalConfig = this.props.globalConfig

        return (
            <section id="AboveTheFold" style={config.style}>
                <div className="slideshow-container">
                    { config.component.slideshow.lead.map((page,key) =>{
                        const {title, subtitle, imgPath, style, link} = page
                        const show = this.state.slide == key ? {display: 'block'} : {}
                        const description = `${title} ${subtitle}`

                        return (
                            <div key={key} style={style, show} className="mySlides fade">
                                <a href={link}>
                                    <div className="numbertext">{key+1} / {config.component.slideshow.lead.length}</div>
                                    <img src={imgPath} alt={description} title={description} />
                                    <div className="text" title={description}>{description}</div>
                                </a>
                            </div>
                        )
                    }) }

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>

                <div className="dots" style={{textAlign:'center', zIndex:'2'}}>
                    <span className="dot" onClick={() => this.currentSlide(0)}></span>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                </div>
            </section>
        )
    }
}

export default AboveTheFold