import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { Row } from 'antd';


const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response: any = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return <>
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