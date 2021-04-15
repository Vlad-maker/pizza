import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="137" cy="145" r="125" />
        <rect x="0" y="284" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="321" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="420" rx="6" ry="6" width="91" height="35" /> 
        <rect x="150" y="415" rx="19" ry="19" width="130" height="40" /> 
      </ContentLoader>  
    );
}

export default LoadingBlock;
