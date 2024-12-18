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
    text: "Ocean Technolabs mobile app expertise brought our ideas to life. The app design is sleek, functional, and exceeded all our expectations.",
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

  // Divide testimonials into two rows
  const half = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, half);
  const secondRow = testimonials.slice(half);

  return (
    <div className="marquee-container p-4 space-y-4">
      {[firstRow, secondRow].map((row, rowIndex) => (
        <div
          key={rowIndex}
          {...props}
          className={classNames(
            "marquee-row flex overflow-hidden items-center space-x-8",
            pauseOnHover && "group-hover:animation-play-state-paused"
          )}
          style={{
            animation: "scroll 20s linear infinite",
          }}
        >
          {row.map((testimonial, index) => (
            <div key={index} className="testimonial-item flex-shrink-0 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h6 className="font-bold text-gray-800">{testimonial.name}</h6>
                  <span className="text-sm text-gray-500">{testimonial.details}</span>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
