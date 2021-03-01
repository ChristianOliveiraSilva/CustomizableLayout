
import "./Style/Testimonials.css";

function Base(props) {
    const config = props.config
    const content = config.content
    return (
        <section className="main-container-testimonials">
            <h1 className="main-title-testimonials">Mensagens de nossos clientes</h1>
            {content.map((item, key) => (
                <div key={key} className="container-testimonials" style={item.style}>
                    <img src={item.img} alt="Avatar" style={{width:'80px'}} />
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                </div>
            )
            )}
        </section> 
    )
}

export default Base