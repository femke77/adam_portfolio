import "./CardStacking.css";

export default function ProjectCard({ project }) {
  return (
   <>
    <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
      <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
        <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
          <div className="yellow-circle"></div>
          <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
            Step 1
          </span>
        </span>
      </div>

      <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
        Understand your business &amp; scaling potential{" "}
        {project.name}
      </h4>

      <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
        <p>
          We establish the foundation for success. Aligning activity
          with the business data helps us ensure we achieve the most
          important goal; Growing in a sustainable &amp; profitable
          rate.
        </p>
      </div>
    </div>

    <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
      <span className="fw-medium">01 </span>
    </div>
</>
);
}
