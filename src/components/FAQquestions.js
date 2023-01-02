import React from "react";

export default function FAQquestions(props) {
  return (
    <div>
      <div className="accordion my-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={`${props.id}-headingOne`}>
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.id}-collapseOne1`}
              aria-expanded="false"
              aria-controls={`${props.id}-collapseOne1`}
            >
              <h3>Question no 1</h3>
            </button>
          </h2>
          <div
            id={`${props.id}-collapseOne1`}
            className="accordion-collapse collapse "
            aria-labelledby={`${props.id}-headingOne`}
          >
            <div className="accordion-body generic-blockquote">
                <p>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`${props.id}-headingTwo`}>
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.id}-collapseTwo`}
              aria-expanded="false"
              aria-controls={`${props.id}-collapseTwo`}
            >
             <h3> Question no 2</h3>
            </button>
          </h2>
          <div
            id={`${props.id}-collapseTwo`}
            className="accordion-collapse collapse"
            aria-labelledby={`${props.id}-headingTwo`}
          >
            <div className="accordion-body generic-blockquote">
                <p>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`${props.id}-headingThree`}>
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.id}-collapseThree`}
              aria-expanded="false"
              aria-controls={`${props.id}-collapseThree`}
            >
              <h3>Question no 3</h3>
            </button>
          </h2>
          <div
            id={`${props.id }-collapseThree`}
            className="accordion-collapse collapse"
            aria-labelledby={`${props.id}-headingThree`}
          >
            <div className="accordion-body generic-blockquote">
                <p>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
