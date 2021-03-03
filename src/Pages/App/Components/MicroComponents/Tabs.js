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
        const config = this.props.config

        return (
            <section className="tab-container">
                <div className="tab">
                    <button className="tablinks" onClick={() => this.open(0)}>{config.content[0].title}</button>
                    <button className="tablinks" onClick={() => this.open(1)}>{config.content[1].title}</button>
                    <button className="tablinks" onClick={() => this.open(2)}>{config.content[2].title}</button>
                </div>
                
                {this.state.show == 0 &&
                    <div className="tabcontent" style={config.content[0].style}>
                        <h3>{config.content[0].title}</h3>
                        <p>{config.content[1].text}</p>
                    </div>
                }
                
                {this.state.show == 1 &&
                    <div className="tabcontent" style={config.content[1].style}>
                        <h3>{config.content[1].title}</h3>
                        <p>{config.content[1].text}</p>
                    </div>
                }

                {this.state.show == 2 &&
                    <div className="tabcontent" style={config.content[2].style}>
                        <h3>{config.content[2].title}</h3>
                        <p>{config.content[1].text}</p>
                    </div>
                }
            </section>
        )
    }
}

export default Tabs