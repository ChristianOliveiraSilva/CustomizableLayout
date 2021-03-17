
import "./Style/SlideshowGallery.css";
import React, { useState } from 'react';

function Base(props) {
    const config = props.config
    console.log(config);
    const [index, setIndex] = useState(0);

    console.log(index)

    return (
        <div style={config.style} className="container-slideshow">

            { config.content.map(({img, legend}, key) => {
                const className = key == index ? 'mySlides-slideshow active-slideshow' : 'mySlides-slideshow'
                const style = key == index ? {display: 'block'} : {}
                return (
                    <div key={key} className={className} style={style}>
                        <div className="numbertext-slideshow">{key+1} / {config.content.length}</div>
                        <img src={img} title={legend} style={{width:'100%'}} />
                    </div>
                ) }
            ) }

            <a className="prev-slideshow">&#10094;</a>
            <a className="next-slideshow">&#10095;</a>

            <div className="caption-slideshow-container">
                <p id="caption">{config.content[index].legend}</p>
            </div>

            <div className="row-slideshow">
                { config.content.map(({img, legend}, key) =>
                    (
                        <div key={key} className="column-slideshow">
                            <img className="demo-slideshow cursor-slideshow" src={img} title={legend} style={{width:'100%'}} onClick={() => setIndex(key)} />
                        </div>
                    )
                ) }
            
            </div>
        </div>
    )
}

export default Base