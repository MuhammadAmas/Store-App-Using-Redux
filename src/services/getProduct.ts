import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductAPI = ({ setProductsCallback }) => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response: any = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
        setProductsCallback(response.data); // call the callback function with the fetched data
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return null; // since this component is only used for fetching data, it doesn't need to render anything
};

export default ProductAPI;

