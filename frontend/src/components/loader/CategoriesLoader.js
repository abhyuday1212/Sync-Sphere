import React from 'react';
import '../loader/CategoriesLoader.css';
const CategoriesLoader = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:"100%"

        }}>
            <div id='loader1'></div>
        </div>
    );
};

export default CategoriesLoader;
