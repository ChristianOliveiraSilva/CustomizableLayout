
import "./Style/PortfolioGallery.css";

function Base(props) {
    return (
        <div className="main-portfolio">

            <h1>MYLOGO.COM</h1>
            <h2>PORTFOLIO</h2>
            <p>Resize the browser window to see the responsive effect.</p>

            <div className="row-portfolio">
                <div className="column-portfolio">
                    <div className="content-portfolio">
                        <img src="media/teste/img (50).jpg" alt="img" style={{width:'100%'}} />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column-portfolio">
                    <div className="content-portfolio">
                        <img src="media/teste/img (51).jpg" alt="img" style={{width:'100%'}} />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column-portfolio">
                    <div className="content-portfolio">
                        <img src="media/teste/img (49).jpg" alt="img" style={{width:'100%'}} />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column-portfolio">
                    <div className="content-portfolio">
                        <img src="media/teste/img (53).jpg" alt="img" style={{width:'100%'}} />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>

            <div className="content-portfolio">
                <img src="media/teste/img (54).jpg" alt="img" style={{width:'100%'}} />
                <h3>Some Other Work</h3>
                <p>Lorem ipsum..</p>
            </div>

        </div>
    )
}

export default Base