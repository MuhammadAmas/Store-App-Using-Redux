import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { Row } from 'antd';


const ProductListing = () => {
    // const products = useSelector((state => state))
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
        {/* <div className="ui grid container">
            <ProductComponent />
        </div> */}
        <Row wrap={true} 
        style={{
            // margin: "auto"
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1em",

        }}>
            <ProductComponent />
        </Row>
    </>
}

export default ProductListing;