import "./CardStackingPortfolio.css";

export default function ProjectCard({ project, index }) {
    let i = 1;
  return (
   <>
    <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
      <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
        <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
          <div className="yellow-circle"></div>
          <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
            {project.name}
          </span>
        </span>
      </div>

      <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
        {project.name}
      </h4>

      <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
        <p>
          {project.description}
        </p>
      </div>
    </div>

    <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
      <span className="fw-medium">{index} </span>
    </div>
</>
);
}
