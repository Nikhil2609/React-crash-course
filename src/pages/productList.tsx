import React, { useState } from 'react';
import { UserType } from '../utils/constant';

const products: any[] = [
    { name: 'p1', sku: 'sku1', description: 'd1', category: 'c1', source: UserType.Admin },
    { name: 'p2', sku: 'sku2', description: 'd3', category: 'c2', source: UserType.User },
    { name: 'p3', sku: 'sku3', description: 'd3', category: 'c3', source: UserType.Admin },
    { name: 'p4', sku: 'sku4', description: 'd4', category: 'c4', source: UserType.Admin },
  ]

const ProductList = () => {
    const [productList, setProductList] = useState(products)
    const [filterCategory, setFilterCategory] = useState('');
    const [filterSource, setFilterSource] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilterChange = event => {
        setFilterCategory(event.target.value);
        setSearchTerm('');

        const filterValue = event.target.value;
        const productsData = productList.filter(product => {
            if (product.category.toLowerCase().includes(filterValue.toLowerCase())) {
                return product;
            }
        }
        );
        setProductList(productsData);
    };

    const handleFilterSource = event => {
        setFilterSource(event.target.value);
        setSearchTerm('');

        const filterValue = event.target.value;
        const productsData = productList.filter(product => {
            if (product.source.toLowerCase() === filterValue.toLowerCase()) {
                return product;
            }
        }
        );
        setProductList(productsData);
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setFilterCategory('');
        setFilterSource('');

        const searchValue = event.target.value;
        const productsData = products.filter(product =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.sku.toLowerCase().includes(searchValue.toLowerCase())
        );
        setProductList(productsData);
    };

    return (
        <div>
            <h2>Product List</h2>
            <div>
                <label>Filter by Category:</label>
                <select value={filterCategory} onChange={handleFilterChange}>
                    <option value="">ALL</option>
                    <option value="c1">c1</option>
                    <option value="c2">c2</option>
                    <option value="c3">c3</option>
                    <option value="c4">c4</option>
                    {/* Add options for different categories */}
                </select>

                <label>Filter by Source:</label>
                <select value={filterSource} onChange={handleFilterSource}>
                    <option value="">ALL</option>
                    <option value={UserType.Admin}>Admin</option>
                    <option value={UserType.User}>User</option>
                </select>
            </div>
            <div>
                <label>Search:</label>
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Source</th>
                        {/* Add more table headers for additional attributes */}
                    </tr>
                </thead>
                <tbody>
                    {productList.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.source}</td>
                            {/* Add more table cells for additional attributes */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
