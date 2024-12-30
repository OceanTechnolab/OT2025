import React, { useState, useEffect, useRef } from "react";
import reviews from "./Reviews";

const ReviewCard = ({ img, name, username, body, onHover, onLeave }) => (
  <figure className="review-card" onMouseEnter={onHover} onMouseLeave={onLeave}>
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

export default function MarqueeDemo() {
  const [pausedRow, setPausedRow] = useState(null);
  const marqueeRef = useRef(null);

  const halfLength = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, halfLength), reviews.slice(halfLength)];

  const handleMouseEnter = (rowIndex) => setPausedRow(rowIndex);
  const handleMouseLeave = () => setPausedRow(null);

  useEffect(() => {
    const cloneItems = () => {
      if (marqueeRef.current) {
        const rowElements = marqueeRef.current.children;
        Array.from(rowElements).forEach((row) => {
          const rowWidth = row.scrollWidth;
          const containerWidth = marqueeRef.current.clientWidth;
          const repeatCount = Math.ceil(containerWidth / rowWidth) + 2;
          row.style.setProperty("--repeat-count", repeatCount);
        });
      }
    };

    cloneItems();
    window.addEventListener("resize", cloneItems);
    return () => window.removeEventListener("resize", cloneItems);
  }, []);

  return (
    <div className="marquee-container" ref={marqueeRef}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee ${rowIndex % 2 ? "reverse" : ""} ${
            pausedRow === rowIndex ? "paused" : ""
          }`}
        >
          {[...row, ...row, ...row].map((review, idx) => (
            <ReviewCard
              key={`${review.username}-${idx}`}
              {...review}
              onHover={() => handleMouseEnter(rowIndex)}
              onLeave={handleMouseLeave}
            />
          ))}
        </div>
      ))}
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>
    </div>
  );
}
