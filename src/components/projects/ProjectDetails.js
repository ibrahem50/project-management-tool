const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis possimus hic dignissimos illum commodi. Neque mollitia incidunt ad repellat!</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by hema</div>
                    <div>2nd sep</div>
                </div>
                
            </div>
        </div>
     );
}
 
export default ProjectDetails;