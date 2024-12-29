import React, { useState, useEffect, useRef } from "react";
import reviews from "./Reviews";

// ReviewCard component (same as before)
const ReviewCard = ({ img, name, username, body, onHover, onLeave }) => {
  return (
    <figure
      className="review-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="review-header">
        <img className="avatar" src={img} alt={name} />
        <div>
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  const [pausedRow, setPausedRow] = useState(null);
  const marqueeRef = useRef(null);

  // Split reviews dynamically into two rows
  const halfLength = Math.ceil(reviews.length / 2);
  const rows = [
    reviews.slice(0, halfLength), // First row
    reviews.slice(halfLength), // Second row
  ];

  // Handle hover to pause the respective row
  const handleMouseEnter = (rowIndex) => {
    setPausedRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setPausedRow(null);
  };

  // Handle cloning and adjusting based on container width
  useEffect(() => {
    const cloneItems = () => {
      if (marqueeRef.current) {
        const containerWidth = marqueeRef.current.clientWidth;
        const rows = marqueeRef.current.children;

        // Make sure each row has enough clones to loop infinitely
        Array.from(rows).forEach((row) => {
          const rowWidth = row.scrollWidth;
          const repeatCount = Math.ceil(containerWidth / rowWidth) + 3;

          row.setAttribute("data-repeat", repeatCount);
        });
      }
    };

    cloneItems();
    window.addEventListener("resize", cloneItems);
    return () => window.removeEventListener("resize", cloneItems);
  }, []);

  return (
    <div className="marquee-container" ref={marqueeRef}>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`marquee ${index === 1 ? "reverse" : ""} ${
            pausedRow === index ? "paused" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: Math.ceil(row.length / 2) + 2 }, (_, idx) => (
            <React.Fragment key={idx}>
              {row.map((review) => (
                <ReviewCard
                  key={review.username}
                  {...review}
                  onHover={() => handleMouseEnter(index)}
                  onLeave={handleMouseLeave}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      ))}
      {/* Fade Overlay */}
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>
    </div>
  );
}
