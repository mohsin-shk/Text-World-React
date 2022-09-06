import React from "react";

export default function About(props) {
  

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#225380" : "white",
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h1>About</h1>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOn"
              style={myStyle}
            >
              <strong> Analyzie Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExampl"
          >
            <div className="accordion-body" style={myStyle}>
              TextWorld helps you to analyse your text in a very immersive way.
              It creates a user friendly atmosphere to manipulate edit and
              analyze your text Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Similique, dolorum velit ipsum itaque sunt
              accusantium?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExampl"
          >
            <div className="accordion-body" style={myStyle}>
              TextWorld is free to use. you heard it correct it is the most
              useful text editing and anlyzing tool and free on all devices
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, dolorum velit ipsum itaque sunt accusantium?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Its is supported by all the modern browsers and a wide range of
              devices and gives its user freedom of dvices Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Similique, dolorum velit ipsum
              itaque sunt accusantium?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
