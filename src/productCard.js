import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px red;
  display: flex;
  flex-direction: column;
  align-items: center;
  backround-color:pink;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
  border-radius: 8px;
  margin-bottom: 16px;
  backround-color:red;
 `;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  color: #27ae60;
  font-weight: 500;
`;

const ProductCard = ({ image, title, price }) => {
  return (
    <Card>
      <Image image={image} />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Card>
  );
};

export default ProductCard;