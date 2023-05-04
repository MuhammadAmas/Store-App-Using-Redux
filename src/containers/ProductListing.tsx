import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { Row } from 'antd';
import ProductAPI from "../services/getProduct";

const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const [fetchedProducts, setFetchedProducts] = useState([]);

    const setProductsCallback = (data) => {
        setFetchedProducts(data);
    };

    return <>
        <ProductAPI setProductsCallback={setProductsCallback} />
        <Row
            wrap={true}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.3em",
                flexWrap: "wrap",
            }}>
            <ProductComponent />
        </Row>
    </>
}

export default ProductListing;