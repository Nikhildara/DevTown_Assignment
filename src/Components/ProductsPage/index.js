import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BallTriangle } from 'react-loader-spinner';
import { TbMenuDeep } from 'react-icons/tb';
import Navbar from '../Navbar';
import ProductItem from '../ProductItem';
import {
  HeadCon,
  Head,
  UnOrderList,
  ProductsCon,
  PaginationCon,
  PaginationBtn,
  PaginationContent,
  PageSpan,
  SortCon,
  SortPa,
  SortHead,
  Select,
  Option,
  FilterCon,
  CategoryH,
  CategoryCon,
  CategoryList,
  CategoryItem,
  ClearBtn,
  FilterAndProductCon,
  LoaderCon,
} from './StyledComponent';

const categoryItems = [
  { id: 1, value: 'smartphones', displayText: 'Smartphones' },
  { id: 2, value: 'laptops', displayText: 'Laptops' },
  { id: 3, value: 'fragrances', displayText: 'Fragrances' },
  { id: 4, value: 'groceries', displayText: 'Groceries' },
  { id: 5, value: 'home-decoration', displayText: 'Home decoration' },
  { id: 6, value: 'furniture', displayText: 'Furniture' },
  { id: 7, value: 'sunglasses', displayText: 'Sunglasses' },
  { id: 8, value: 'womens-dresses', displayText: 'Womens' },
  { id: 9, value: 'mens-shirts', displayText: 'Mens' },
  { id: 10, value: 'automotive', displayText: 'Automotive' },
];

const priceSorting = [
  { id: 1, value: false, disPlayText: 'Price(Low-High)' },
  { id: 2, value: true, disPlayText: 'Price(High-Low)' },
];

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [filter, setFilter] = useState(false);
  const [category, setCategory] = useState('');
  const [loader, setLoader] = useState(false);

  const offset = (page - 1) * 10;

  const toBack = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const toForward = () => {
    if (page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  const getData = async () => {
    setLoader(true);
    const response = await fetch(
      `https://dummyjson.com/products${
        filter ? `/category/${category}` : ''
      }?limit=10&skip=${offset}`
    );
    const data = await response.json();
    setProductsData(data.products);
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, [page, category, filter]);

  console.log(productsData);

  if (!sortByPrice) {
    productsData.sort((a, b) => a.price - b.price);
    console.log(productsData);
  } else {
    productsData.sort((a, b) => b.price - a.price);
    console.log(productsData);
  }

  const renderFilters = () => (
    <FilterCon>
      <CategoryCon>
        <CategoryH>Category</CategoryH>
        <CategoryList>
          {categoryItems.map((e) => (
            <CategoryItem
              key={e.id}
              isActive={e.value === category}
              onClick={() => {
                setCategory(e.value);
                setFilter(true);
              }}>
              {e.displayText}
            </CategoryItem>
          ))}
        </CategoryList>
      </CategoryCon>
      <ClearBtn
        onClick={() => {
          setFilter(false);
          setCategory('');
        }}>
        Clear Filter
      </ClearBtn>
    </FilterCon>
  );

  const renderLoader = () => (
    <LoaderCon>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgba(159, 231, 224, 1)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle=""
        visible={true}
      />
    </LoaderCon>
  );

  return (
    <div>
      <Navbar />

      <FilterAndProductCon>
        {renderFilters()}
        <ProductsCon>
          <HeadCon>
            {!filter ? <Head>All Products</Head> : <Head>Products</Head>}
            <SortCon>
              <SortHead>
                <TbMenuDeep />
                <SortPa>Sort by:</SortPa>
              </SortHead>
              <Select
                value={sortByPrice}
                onChange={(e) => {
                  setSortByPrice((prev) => !prev);
                  console.log(e.target.value);
                }}>
                {priceSorting.map((e) => (
                  <Option
                    key={e.id}
                    value={e.value}>
                    {e.disPlayText}
                  </Option>
                ))}
              </Select>
            </SortCon>
          </HeadCon>
          {!loader ? (
            <UnOrderList>
              {productsData.map((e) => (
                <ProductItem
                  key={e.id}
                  productData={e}
                />
              ))}
            </UnOrderList>
          ) : (
            renderLoader()
          )}
          {!filter ? (
            <PaginationCon>
              <PaginationBtn onClick={toBack}>
                <AiOutlineArrowLeft />
              </PaginationBtn>
              <PaginationContent>
                Page <PageSpan>{page}</PageSpan> of <PageSpan>10</PageSpan>
              </PaginationContent>
              <PaginationBtn onClick={toForward}>
                <AiOutlineArrowRight />
              </PaginationBtn>
            </PaginationCon>
          ) : null}
        </ProductsCon>
      </FilterAndProductCon>
    </div>
  );
};

export default ProductPage;
