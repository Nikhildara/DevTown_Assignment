import {
  ProductImg,
  ProductCon,
  ProductHead,
  ProductBrand,
  Price,
  RatingCon,
  StarImg,
  Rating,
  ProductDetails,
  ProductDes,
} from './StyledComponent';

const ProductItem = (props) => {
  const { productData } = props;
  const { title, brand, thumbnail, rating, price, description } = productData;

  return (
    <ProductCon className="product-item">
      <ProductImg
        src={thumbnail}
        alt="product"
      />
      <ProductHead>{title}</ProductHead>
      <ProductBrand>by {brand}</ProductBrand>
      <ProductDes>{description}</ProductDes>
      <ProductDetails>
        <Price>Rs {price}00/-</Price>
        <RatingCon>
          <Rating>{rating}</Rating>
          <StarImg
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </RatingCon>
      </ProductDetails>
    </ProductCon>
  );
};
export default ProductItem;
