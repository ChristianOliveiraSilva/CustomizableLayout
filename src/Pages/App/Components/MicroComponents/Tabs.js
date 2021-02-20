import "./Style/Tabs.css";
import React from 'react';

class Tabs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: 0
        }

        this.open = this.open.bind(this) 
    }

    open(menu) {
        this.setState({
            show: menu
        })
    }

    render() {
        return (
            <section className="tab-container">
                <div className="tab">
                    <button className="tablinks" onClick={() => this.open(0)}>London</button>
                    <button className="tablinks" onClick={() => this.open(1)}>Paris</button>
                    <button className="tablinks" onClick={() => this.open(2)}>Tokyo</button>
                </div>
                
                {this.state.show == 0 &&
                <div className="tabcontent">
                    <h3>Londossssn</h3>
                    <p>London is the capital city of England.</p>
                </div>
                }
                
                {this.state.show == 1 &&
                <div className="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>
                }

                {this.state.show == 2 &&
                <div className="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
                }
            </section>
        )
    }
}

export default Tabs