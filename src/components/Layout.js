import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    const { children, pageContext } = props
    console.log(props, pageContext)
    return (<>
        <Header />
        {children}
        <Footer />
    </>)
}