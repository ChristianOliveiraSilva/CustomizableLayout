
import "./Style/SlideshowGallery.css";

function Base(props) {
    const config = props.config

    return (
        <div style={config.style} className="container-slideshow">
            <div className="mySlides-slideshow active-slideshow">
                <div className="numbertext-slideshow">1 / 6</div>
                <img src="media/teste/img (10).jpg" style={{width:'100%'}} />
            </div>

            <div className="mySlides-slideshow" style={{display:'block'}}>
                <div className="numbertext-slideshow">2 / 6</div>
                <img src="media/teste/img (11).jpg" style={{width:'100%'}} />
            </div>

            <div className="mySlides-slideshow">
                <div className="numbertext-slideshow">3 / 6</div>
                <img src="media/teste/img (12).jpg" style={{width:'100%'}} />
            </div>

            <div className="mySlides-slideshow">
                <div className="numbertext-slideshow">4 / 6</div>
                <img src="media/teste/img (13).jpg" style={{width:'100%'}} />
            </div>

            <div className="mySlides-slideshow">
                <div className="numbertext-slideshow">5 / 6</div>
                <img src="media/teste/img (14).jpg" style={{width:'100%'}} />
            </div>

            <div className="mySlides-slideshow">
                <div className="numbertext-slideshow">6 / 6</div>
                <img src="media/teste/img (15).jpg" style={{width:'100%'}} />
            </div>

            <a className="prev-slideshow" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next-slideshow" onclick="plusSlides(1)">&#10095;</a>

            <div className="caption-slideshow-container">
                <p id="caption">{config.caption}</p>
            </div>

            <div className="row-slideshow">
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (16).jpg" style={{width:'100%'}} onclick="currentSlide(1)" alt="The Woods" />
                </div>
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (16).jpg" style={{width:'100%'}} onclick="currentSlide(2)" alt="Cinque Terre" />
                </div>
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (18).jpg" style={{width:'100%'}} onclick="currentSlide(3)" alt="Mountains and fjords" />
                </div>
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (19).jpg" style={{width:'100%'}} onclick="currentSlide(4)" alt="Northern Lights" />
                </div>
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (20).jpg" style={{width:'100%'}} onclick="currentSlide(5)" alt="Nature and sunrise" />
                </div>
                <div className="column-slideshow">
                    <img className="demo-slideshow cursor-slideshow" src="media/teste/img (21).jpg" style={{width:'100%'}} onclick="currentSlide(6)" alt="Snowy Mountains" />
                </div>
            </div>
        </div>
    )
}

export default Base