import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore aliquam officiis illo cumque saepe laborum reiciendis dolores unde, doloremque, natus soluta? Animi incidunt tenetur dicta harum distinctio sunt ad.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by the Net Ninja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
