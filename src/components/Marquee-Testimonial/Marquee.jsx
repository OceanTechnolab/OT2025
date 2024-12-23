import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const testimonials = [
  {
    img: "/img/clients/1.jpg",
    name: "True Fx Infotech",
    details: "Digital Marketing Company",
    text: "Ocean Technolab completely transformed our website into a stunning and user-friendly platform. Their expertise was outstanding. Highly recommended!",
  },
  {
    img: "/img/clients/2.jpg",
    name: "District98.org",
    details: "Non-Profit Club of Toastmasters International",
    text: "District98.org's website development with Ocean Technolab was seamless. They perfectly captured our organization's essence, delivering a modern website.",
  },
  {
    img: "/img/clients/3.jpg",
    name: "mightythread.com",
    details: "Clothing Store",
    text: "Ocean Technolab exceeded expectations with their creativity. The team's ecommerce expertise created a beautiful and intuitive online store for us.",
  },
  {
    img: "/img/clients/4.jpg",
    name: "GreenLight Ventures",
    details: "Startup Incubator",
    text: "Working with Ocean Technolab was a pleasure. Their custom software helped us streamline processes while boosting efficiency and scalability.",
  },
  {
    img: "/img/clients/4.jpg",
    name: "EduMentor",
    details: "EdTech Company",
    text: "Ocean Technolab's mobile app expertise brought our ideas to life. The app design is sleek, functional, and exceeded all our expectations.",
  },
];

const Marquee = ({ speed = 30 }) => {
  const rowRefs = useRef([]);

  useEffect(() => {
    rowRefs.current.forEach((ref) => {
      if (ref) {
        const clone = ref.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        ref.parentNode.appendChild(clone);
      }
    });
  }, []);

const half = Math.ceil(testimonials.length / 2)
const firstRow = testimonials.slice(0, half);
const secondRow = testimonials.slice(half);

 
      const renderRow = (row,rowIndex)=> (
        <div
          key={rowIndex}
          ref={(el) => (rowRefs.current[rowIndex] = el)}
          className={classNames(
            "marquee-row",
            rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
          )}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="testimonial-item">
              <div className="image-cont">
                <img src={item.img} alt={item.name} />
              </div>
              <h6>{item.name}</h6>
              <span className="author-details">{item.details}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      );

return (
  <div className="marquee-container">
    {renderRow(firstRow,0)}
    {renderRow(secondRow,1  )}
  </div>
);

};

export default Marquee;