import React from "react";
import { PageHeader } from 'antd';

const Header: React.FC = () => (
    <PageHeader
        className="site-page-header"
        title="Store App"
        style={{ border: '2px solid rgb(235, 237, 240)', marginBottom: '2em', padding: '1em', fontWeight: 'bold', fontSize: '2rem'}}
    />
);

export default Header;