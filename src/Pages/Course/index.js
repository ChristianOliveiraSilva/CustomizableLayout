import React from 'react';

import Header from '../App/Components/Header'
import "./style.css"
import { withRouter } from "react-router";

class Course extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            template: null,
            error: null,
        }

        this.fetchTemplate = this.fetchTemplate.bind(this)
    }

    fetchTemplate() {
        fetch('/template/template.json')
        .then(res => res.json())
        .then(result => {
            this.setState({template: result})
            const {config} = result
            document.title = config.title
            
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = config.logo
        })
        .catch(err => this.setState({error: err}));
    }

    componentDidMount () {
        this.fetchTemplate()
    }

    render() {
        if( !this.state.template || this.state.error)
            return <div className="rotate">{this.state.error}</div>

        const { config, components } = this.state.template
        const { header } = components
        const listCourses = components.mainContent.components[0]

        const id = this.props.match.params.id;
        if (id && listCourses.content[id])
            return <SpecificCourse header={header} config={config} component={listCourses.content[id]} />
        
        return (
            <div>
                <Header config={header} globalConfig={config} closeNavbar />
                <main className="course container row m-5">
                    <div className="col-2">
                        <img src={config.logo} alt={config.siteName} className="logo"/>
                    </div>              
                    <div className="col-2">
                        <h1>Escolha um curso para continuar</h1>
                        
                        { listCourses.content.map(({title, subtitle, img, link}, key) =>
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
                </main>
            </div>
        )
    }
}

function SpecificCourse(props) {

    const course = props.component

    return (
         <div>
            <Header config={props.header} globalConfig={props.config} closeNavbar />
            <main className="course container row m-5">
                <div className="col-2">
                    <img src={course.img} className="thumbnail" />
                </div>              
                <div className="col-2"> 
                    <h1>{course.title}</h1>
                    <h3>{course.subtitle}</h3>
                    <p>{course.description || "Sem descrição"}</p>

                    <a>
                        <button type="button" className="buy">Compre agora</button>
                    </a>
                </div>              
            </main>
        </div>
    )
}

export default withRouter(Course)