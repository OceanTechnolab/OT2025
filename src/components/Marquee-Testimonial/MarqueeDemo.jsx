import React from "react";
import reviews from "./Reviews";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="review-card">
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
  return (
    <div className="marquee-container">
      <div className="marquee">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee reverse">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>
    </div>
  );
}
