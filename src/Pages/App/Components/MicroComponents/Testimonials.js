
import "./Style/Testimonials.css";

function Base(props) {
    const config = props.config
    const content = config.content
    return (
        <section className="main-container-testimonials">
            <h1 className="main-title-testimonials">Depoimentos das clientes</h1>
            
            {content.map((item, key) => {
                    if (item.text && item.iframe) {
                        return <FullGrid key={key} item={item}/>
                    } else if (item.iframe) {
                        return <IframeGrid key={key} item={item}/>
                    } else {
                        return <TextGrid key={key} item={item}/>
                    }
                }
            )}
        </section> 
    )
}

function FullGrid(props) {
    return (
        <section className="container-testimonials row" style={props.item.style}>
            <section className="col-2">
                <img src={props.item.img} alt="Avatar" />
                <h3>{props.item.name}</h3>
                <p>"{props.item.text}"</p>
            </section>
            <section className="col-2">
                {/* src={props.item.iframe} */}
                <iframe src={props.item.iframe} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
        </section>
    )
}

function IframeGrid(props) {
    return (
        <section className="container-testimonials" style={props.item.style}>
            <section className="">
                <img src={props.item.img} alt="Avatar" />
                <h3 style={{margin: '5px'}}>{props.item.name}</h3>
                <iframe src={props.item.iframe} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
        </section>
    )
}

function TextGrid(props) {
    return (
        <section className="container-testimonials" style={props.item.style}>
            <section>
                <img src={props.item.img} alt="Avatar" />
                <h3>{props.item.name}</h3>
                <p>"{props.item.text}"</p>
            </section>
        </section>
    )
}


export default Base