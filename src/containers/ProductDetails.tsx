import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { Card, Spin, Divider, Row, Col } from 'antd';
import ProductDetailsAPI from "../services/getProductDetails";


interface Props {
    productId: string;
}

interface Product {
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
}

const ProductDetails = () => {
    const product: Product = useSelector((state: any) => state.product);
    const { image, title, price, category, description } = product;
    const { productId }: any = useParams();

    return <>
        <ProductDetailsAPI productId={productId} />
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <Spin tip="Loading" size="large" />
            ) : (
                <>
                    <Card
                        hoverable
                        style={{
                            padding: 16,
                            marginBottom: '6em',
                            width: '90%',
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            borderRadius: '10px',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '2em',
                        }}
                        cover={
                            <img
                                height='340px'
                                width='280px'
                                alt={title}
                                src={image}
                                style={{ objectFit: 'cover', margin: 'auto' }}
                            />
                        }
                    >
                        <Col>
                            <Row >
                                <h2>{title}</h2>
                            </Row>
                            <Row>
                                <h3 style={{ opacity: '0.7' }}>{category}</h3>
                            </Row>
                        </Col>
                        <br></br>
                        <Divider orientation='center' style={{
                            textAlign: 'center',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            opacity: '0.8',
                            color: '#2ecc71'
                        }}>
                            ${price}
                        </Divider>
                        <p
                            style={{
                                fontSize: '1.2rem',
                                textAlign: 'center',
                            }}
                        >
                            {description}
                        </p>
                    </Card>
                </>
            )}
        </div>


    </>
}

export default ProductDetails;
