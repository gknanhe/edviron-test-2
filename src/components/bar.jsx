import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const initialHeight = 0; // Initial height of 0%

const Bar = ({height}) => {
 
  const barData = [30, 50, 70, 90]; 

  
  const [barHeight, setBarHeight] = useState(initialHeight);

  
  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setBarHeight(height);
    }, 300); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    
      <BarDiv style={{ height: `${barHeight}%` }}></BarDiv>
      
  );
};

const BarDiv = styled.div`
  border-radius: 8px;
  background-color: #F2EFFF;
  transition: height 0.5s ease; 
`;

export default Bar;
