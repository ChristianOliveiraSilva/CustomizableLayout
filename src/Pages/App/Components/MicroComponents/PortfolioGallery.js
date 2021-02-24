
import "./Style/PortfolioGallery.css";

function Base(props) {
    const config = props.config
    return (
        <div className="main-portfolio">
            <h1 className="title-portfolio">{config.title}</h1>
            <h3 className="title-portfolio">{config.subtitle}</h3>

            <div className="row-portfolio">
                { config.gridItens.map(({title, subtitle, img}, key) =>
                    <div key={key} className="column-portfolio">
                        <div className="content-portfolio">
                            <img src={img} alt={title} style={{width:'100%'}} />
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Base