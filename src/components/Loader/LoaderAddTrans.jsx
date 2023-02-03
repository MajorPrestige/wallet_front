import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const LoaderAddTrans = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
          // top:'2%',
          // left: '50%',
          // transform: 'translateX(-50%)',
        }}
      >
        <ThreeDots
          height="50"
          width="50"
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

export default LoaderAddTrans;
