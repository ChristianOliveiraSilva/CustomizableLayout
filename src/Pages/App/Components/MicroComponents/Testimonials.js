
import "./Style/Testimonials.css";

function Base(props) {
    const config = props.config
    const content = config.content
    return (
        <section className="main-container-testimonials">
            <h1 className="main-title-testimonials">Depoimentos das clientes</h1>
            
            {content.map((item, key) => (
                <section key={key} className="container-testimonials row" style={item.style}>
                    <section className="col-2">
                        <img src={item.img} alt="Avatar" />
                        <h3>{item.name}</h3>
                        <p>"{item.text}"</p>
                    </section>
                    <section className="col-2">
                        <iframe src={item.iframe} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
                </section>
            ))}
        </section> 
    )
}

export default Base