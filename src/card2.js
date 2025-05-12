import React from 'react';
import ProductCard from './productCard';
const Card2 = () => {
  return (
    <div style={{ display: 'flex',flexWrap:'wrap' }} >   
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/OIP.asGTpltbthHq8YXloyoSuAHaEo?w=278&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        
        title="selling photo"
        price="$56.89"
      />
    </div>
   </div>
  );
};

export default Card2;