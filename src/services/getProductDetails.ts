// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
// import axios from "axios";

// // const { image, title, price, category, description } = product;


// export default function ProductDetailsAPI({ setProductDetailsCallback }) {

//     const dispatch = useDispatch();
//     const { productId }: any = useParams();
//     // console.log(product)

//     const fetchProductDetails = async () => {
//         const response: any = await axios
//             .get(`https://fakestoreapi.com/products/${productId}`)
//             .catch((err) => {
//                 console.log("Err: ", err);
//             });
//         dispatch(selectedProduct(response.data));
//         setProductDetailsCallback(response.data);
//     }

//     useEffect(() => {
//         if (productId && productId !== "") fetchProductDetails();
//         return () => {
//             fetchProductDetails();
//             dispatch(removeSelectedProduct())
//         }
//     }, [productId])
// }


import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";

interface Product {
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
}

interface ProductAPIProps {
    productId: string;
}

const ProductDetailsAPI = ({ productId }: ProductAPIProps) => {
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response: any = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails();
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [dispatch, productId]);

    return null;
};

export default ProductDetailsAPI;
