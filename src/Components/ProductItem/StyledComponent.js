import Styled from 'styled-components';

export const ProductImg = Styled.img`
  width:270px;
  height:270px;
  border-radius:8px;

  @media (min-width:499px){
    width:285px;
    height:285px;
  }

  @media (min-width:568px){
    width:255px;
    height:255px;
  }
  
  @media (min-width:768px){
    width:245px;
    height:245px;
  }
`;
export const ProductCon = Styled.li`
  padding:0px;
  max-width:350px;
  list-style:none;

`;
export const ProductHead = Styled.h1`
    font-size:20px;
    font-weight:600;
    
    color:rgba(6, 35, 42, 1);
    @media (min-width:499px){
      width:285px;
      font-size:22px;
    }
  
    @media (min-width:568px){
      width:255px;
      font-size:19px;
    }
    
    @media (min-width:768px){
      width:245px;
      font-size:17px;
      height:35px;
    }
`;
export const ProductBrand = Styled.p`
   font-size:17px;
   font-weight:400;
   color:rgba(102, 105, 152, 0.8);
`;

export const ProductDes = Styled.p`
  font-size:14px;
  height:37px;
  overflow:hidden;
  width:285px;
  @media (min-width:499px){
    width:285px;
    font-size:14px;
  }

  @media (min-width:568px){
    width:255px;
    font-size:13px;
  }
  
  @media (min-width:768px){
    width:245px;
    font-size:12px;
    height:35px;
  }
`;

export const ProductDetails = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  

`;
export const Price = Styled.p`
  font-size:20px;
  font-weight:500;
  margin:3px 0px;
  `;

export const RatingCon = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:rgba(159, 231, 224, 1);
  width:70px;
  border-radius:10px;
  gap:0px;
`;
export const StarImg = Styled.img`
  width:20px
`;

export const Rating = Styled.p`
  color:white;
  margin:7px 5px;
`;
