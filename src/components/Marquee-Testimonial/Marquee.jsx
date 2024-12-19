import React, { useEffect, useState } from "react";
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
  {
    img: "/img/clients/4.jpg",
    name: "PathWell Clinic",
    details: "Healthcare Provider",
    text: "The Ocean Technolab team created a professional, easy-to-navigate website for our clinic. It’s been well-received by both patients and staff.",
  },
];

const Marquee = ({ className, pauseOnHover = false, ...props }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const half = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, half);
  const secondRow = testimonials.slice(half);

  return (
    <div className="marquee-container">
      {[firstRow, secondRow].map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={classNames(
            "marquee-row",
            rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
          )}
        >
          {row.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="image-container">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                />
              </div>
              <h6>{testimonial.name}</h6>
              <span className="author-details">{testimonial.details}</span>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
