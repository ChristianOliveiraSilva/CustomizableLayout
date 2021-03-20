
import "./Style/SlideshowGallery.css";
import React, { useState } from 'react';

function Base(props) {
    const config = props.config
    const [index, setIndex] = useState(0);

    function changeIndex(value) {
        const newValue = value + index
        if (newValue >= 0 && newValue < config.content.length) {
            setIndex(newValue)
        }
    }

    return (
        <div id="SlideshowGallery" style={config.style} className="container-slideshow">

            { config.content.map(({img, legend, link}, key) => {
                const className = key == index ? 'mySlides-slideshow active-slideshow' : 'mySlides-slideshow'
                const style = key == index ? {display: 'block'} : {}
                return (
                    <div key={key} className={className} style={style}>
                        <a href={link}>
                            <div className="numbertext-slideshow">{key+1} / {config.content.length}</div>
                            <img src={img} title={legend}/>
                        </a>
                    </div>
                ) }
            ) }

            <a className="prev-slideshow" onClick={() => changeIndex(-1)}>&#10094;</a>
            <a className="next-slideshow" onClick={() => changeIndex(1)}>&#10095;</a>

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