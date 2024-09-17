
import "./ProjectCard.css";
import * as projects from "../../assets/index.js"
export default function ProjectCard({ project, index }) {
  let i = 1;
  return (
    <>
 
        <img  src={projects[project.image]} alt={project.name} />
      
        <div style={{position: "relative", height: "100%", width: "100%", opacity: "0"}} className="project-text">
          <h4 className="">{project.name}</h4>

          <div >
            <p>{project.description}</p>
          </div>
        </div>
      
    </>
  );
}
