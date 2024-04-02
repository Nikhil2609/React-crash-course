import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ThemeContext } from "../App";
import CommonTextField from "../component/common/commonTextField";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
});

const LoginPage = () => {
    // Context : use context using useContext hook

    const { theme, setTheme } = useContext(ThemeContext);
    console.log("theme", theme)
    const toggleTheme = () => {
        setTheme(preTheme => preTheme === "dark" ? "light" : "dark");
    }
    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <div className="login">
                        <span>Login User</span>
                        <br></br>
                        <br></br>
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                {/* <span>Email</span> */}
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                {/* <span>Password</span> */}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                {/* Click on submit button to submit the form */}
                                <button type="submit" onClick={toggleTheme}>Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>

            <br></br>
            <br></br>
            <br></br>

            <CommonTextField
                id="name"
                name="name"
                fullWidth={false}
                value={5}
                variant="outlined"
                lable="lable"
            />

            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default LoginPage;