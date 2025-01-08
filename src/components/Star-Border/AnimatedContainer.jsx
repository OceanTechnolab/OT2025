import React from "react";
import StarBorder from "../../components/StarBorder/StarBorder";

const AnimatedContainer = () => {
  return (
    <div>
      <StarBorder
        duration={500}
        style={{
          width: "100%",
          height: "142px",
          backgroundColor: "black",
        }}
      >
        <h1>Hello World</h1>
      </StarBorder>
    </div>
  );
};

export default AnimatedContainer;
