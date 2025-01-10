import React from 'react';
import Spline from '@splinetool/react-spline';

const Jenga = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}> {/* Full screen container */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            height: 50vh; /* Adjust height for mobile view */
          }
        }
      `}</style>
      <Spline scene="https://prod.spline.design/vv1UGO7jVbcHCd5g/scene.splinecode" />
    </div>
  );
};

export default Jenga;
