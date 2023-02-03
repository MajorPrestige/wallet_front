import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backdropFilter: 'blur(15px)',
        zIndex: '2',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4A56E2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
