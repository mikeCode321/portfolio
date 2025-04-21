import React from 'react';
import pic from '../img/deep-learning-soccer.pdf'

const DeepLearningSoccerPDF = () => {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
          <iframe src={pic} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default DeepLearningSoccerPDF;
