import Styled from 'styled-components';

export const HeadCon = Styled.div`
  display:flex;
  justify-content:space-between;
`;

export const Head = Styled.h1`
  font-size: 20px;
  font-weight:500;
  
`;
export const SortCon = Styled.div`
  padding:0px;
  display:flex;
  align-items:center;
  gap:5px;
`;

export const SortHead = Styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  outline:none;
  
`;
export const SortPa = Styled.p`
margin:2px 0px;
font-size:17px;
`;

export const Select = Styled.select`
  background-color:white;
  border:none;
  font-size:17px;
  color:black;
  margin-top:4px;
  cursor:pointer;
  outline:none;
`;

export const Option = Styled.option`
  padding:0px;
`;

export const UnOrderList = Styled.ul`
list-style:none;
padding-left:0px;
min-height:90vh;
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:21px;

@media (min-width:768px){
    justify-content:start;
}
`;

export const FilterAndProductCon = Styled.div`
    @media (min-width:768px){
      display:flex;
    }
`;

export const ProductsCon = Styled.div`
    padding:10px;
    @media (min-width:768px){
      width:75vw;;
    }
`;

export const PaginationCon = Styled.div`
  padding:0px;
  display:flex;
  align-items:center;
  gap:10px;
  justify-content:center;
`;

export const PaginationBtn = Styled.button`
  border:2px solid rgba(159, 231, 224, 1);
  color:rgba(159, 231, 224, 1);
  font-size:15px;
  background-color:white;
  padding-top:5px;
  border-radius:5px;

  &:hover{
    color:white;
    background-color:rgba(159, 231, 224, 1);
  }
`;

export const PaginationContent = Styled.p`
  font-size:19px;
  color:rgba(101, 99, 100, 0.8);
`;
export const PageSpan = Styled.span`
  font-weight:700;
  color:black;
`;

export const FilterCon = Styled.div`
  padding:10px;
  @media (min-width:768px){
    width:25vw;
    max-width:250px;
  }
`;
export const CategoryCon = Styled.div`
  padding:0px;
`;
export const CategoryH = Styled.h1`
  font-weight:500;
  font-size:19px
`;
export const CategoryList = Styled.ul`
   list-style:none;
   padding-left:0px;
`;
export const CategoryItem = Styled.li`
 cursor:pointer;
  font-size:17px;
  color:${(props) =>
    props.isActive ? 'rgba(15, 216, 218, 0.8)' : 'rgba(57, 57, 57, 0.8)'};
  &:hover{
    color:rgba(159, 231, 224, 1)
    }

`;
export const ClearBtn = Styled.button`
   background-color:transparent;
   border:1px solid rgba(159, 231, 224, 1);
   color:rgba(159, 231, 224, 1);
   font-size:17px;
   border-radius:5px;
   padding:5px 10px;

   &:hover{
    color:white;
    background-color:rgba(159, 231, 224, 1);
    
   }

`;
export const LoaderCon = Styled.div`
   min-height:90vh;
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
`;
