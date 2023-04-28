import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Card } from 'antd';
const { Meta } = Card;
import { Card, Col, Row, Button, Divider, notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
}

const ProductComponent = () => {
    const products: Product[] = useSelector((state: any) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Col key={id} md={8}>
                <Link to={`/product/${id}`} >
                    <Card
                        hoverable
                        style={{
                            padding: 7,
                            marginBottom: '6em',
                            minHeight: '580px',
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            borderRadius: '10px',
                            color: '#212121',
                        }}
                        cover={
                            <img
                                height='300px'
                                width='260px'
                                alt={title}
                                src={image}
                                style={{ objectFit: 'cover', margin: 'auto' }}
                            />
                        }
                    >
                        <Card.Meta
                            title={<h2>{title}</h2>}
                            description={category}
                        />
                        <br></br>
                        <Divider orientation='center' >Price</Divider>
                        <p
                            style={{
                                lineHeight: '24px',
                                fontSize: '32px',
                                color: '#2ecc71',
                                textAlign: 'center',
                            }}
                        >
                            {`$${price}`}
                        </p>
                    </Card>
                </Link>
            </Col>
        );
    });

    return <>
        {renderList}
    </>
}
    ;

export default ProductComponent;