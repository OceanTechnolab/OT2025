import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {

    const [isClient,setIsClient] = useState(false);

    useEffect(()=>{
      setIsClient(true);
    },[]);

    if(!isClient) return null;

    
  return (
    <div
      {...props}
      className={classNames(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        "--duration": "40s",
        "--gap": "1rem",
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={classNames("flex shrink-0 justify-around", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:animation-play-state-paused": pauseOnHover,
              "animation-direction-reverse": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
