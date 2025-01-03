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
  {
    img: "/img/clients/4.jpg",
    name: "PathWell Clinic",
    details: "Healthcare Provider",
    text: " The Ocean Technolab team created a professional, easy-to-navigate website for our clinic. It’s been well-received by both patients and staff.",
  },
  {
    img: "/img/clients/4.jpg",
    name: "Zenith ERP",
    details: "ERP Solutions Provider",
    text: "Ocean Technolab’s ERP consulting services were exceptional. They provided us with tailored solutions that improved efficiency and productivity.",
  },
  {
    img: "/img/clients/4.jpg",
    name: "CityGrocer",
    details: "Ecommerce Store",
    text: "The ecommerce platform Ocean Technolab built was flawless. It has provided our customers with a much better online shopping experience.",
  },
];

const Marquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const cloneItems = () => {
      if (marqueeRef.current) {
        const containerWidth = marqueeRef.current.clientWidth;
        const rows = marqueeRef.current.children;

        Array.from(rows).forEach((row) => {
          const rowWdith = row.scrollWidth;
          const repeatCount = Math.ceil(containerWidth / rowWdith) + 3;

          row.setAttribute("data-repeat", repeatCount);
        });
      }
    };
    cloneItems();
    window.addEventListener("resize", cloneItems);
    return () => window.removeEventListener("resize", cloneItems);
  }, []);

  const handleHover = (hovering) => {
    setIsHovered(hovering);
  };

  const renderRow = (row, rowIndex) => {
    const repeatCount =
      parseInt(
        marqueeRef.current?.children[rowIndex]?.getAttribute("data-repeat")
      ) || 1;

    return (
      <div
        key={rowIndex}
        className={classNames(
          "marquee-row",
          rowIndex % 2 === 0 ? "marquee-left" : "marquee-right",
          { paused: isHovered }
        )}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {Array.from({ length: repeatCount }, (_, idx) =>
          row.map((item, i) => (
            <div key={`${i}-${idx}`} className="testimonial-item">
              <div className="image-cont">
                <img src={item.img} alt={item.name} />
              </div>
              <h6>{item.name}</h6>
              <span className="author-details">{item.details}</span>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </div>
    );
  };

  const half = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, half);
  const secondRow = testimonials.slice(half);

  return (
    <div className="marquee-container" ref={marqueeRef}>
      {renderRow(firstRow, 0)}
      {renderRow(secondRow, 1)}
    </div>
  );
};

export default Marquee;
