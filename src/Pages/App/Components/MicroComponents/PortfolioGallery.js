
import "./Style/PortfolioGallery.css";

function Base(props) {
    const config = props.config
    return (
        <div id="PortfolioGallery" className="main-portfolio">
            <h1 className="title-portfolio">{config.title}</h1>
            <h3 className="title-portfolio">{config.subtitle}</h3>

            <div className="row-portfolio">
                { config.content.map(({title, subtitle, img, link}, key) =>
                    <a href={link} key={key}>
                        <div className="column-portfolio">
                            <div className="content-portfolio">
                                <img src={img} alt={title} style={{width:'100%'}} />
                                <h3>{title}</h3>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                    </a>
                ) }
            </div>
        </div>
    )
}

export default Base