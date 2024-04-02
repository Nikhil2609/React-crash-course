import React from 'react';
import { Formik, Form, Field } from 'formik';

const CreateProduct = () => {
    // Dummy categories for example
    const categories = ['Electronics', 'Clothing', 'Books', 'Toys'];

    // Dummy submit function
    const handleSubmit = (values) => {
        console.log("formik form values", values);
        // Handle form submission here

        // API CALLING //
    };

    return (
        <div>
            <h1>Add Product</h1>
            <Formik
                initialValues={{
                    name: '',
                    sku: '',
                    description: '',
                    category: '',
                    logo: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div>
                            <Field type="text" id="name" name="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <Field type="text" id="sku" name="sku" placeholder="Enter product sku number" />
                        </div>
                        <div>
                            <Field as="text" id="description" name="description" placeholder="Product Description" />
                        </div>
                        <div>
                            <Field as="select" id="category" name="category">
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div>
                            <Field type="text" id="llogo" name="logo" placeholder="Enter image URL" />
                        </div>
                        <button type="submit" style={{backgroundColor:"navy", color: "white"}}>Add Product</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateProduct;
