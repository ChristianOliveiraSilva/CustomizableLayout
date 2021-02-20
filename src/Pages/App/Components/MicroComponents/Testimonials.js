
import "./Style/Testimonials.css";

function Base(props) {
    return (
        <section className="main-container-testimonials">
            <div className="container-testimonials">
                <img src="/media/teste/img (25).jpg" alt="Avatar" style={{width:'90px'}} />
                <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                <p>John Doe saved us from a web disaster.</p>
            </div>
            
            <div className="container-testimonials">
                <img src="/media/teste/img (26).jpg" alt="Avatar" style={{width:'90px'}} />
                <p><span >Rebecca Flex.</span> CEO at Company.</p>
                <p>No one is better than John Doe.</p>
            </div>
        </section> 
    )
}

export default Base