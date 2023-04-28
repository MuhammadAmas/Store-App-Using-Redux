import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;


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
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <Card
                        hoverable
                        style={{
                            border: '1px solid #e8e8e8',
                            borderRadius: '7px',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '350px'
                        }}
                        bordered={true}
                        cover={<img alt={title} src={image} style={{ maxWidth: 150 }} />}
                    >
                        <Meta title={title} description={category} avatar={price} />
                    </Card>
                </Link>
            </div>
        );
    });

    return <>
        {renderList}
    </>
}
    ;

export default ProductComponent;