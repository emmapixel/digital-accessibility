import React from 'react';
import "./AboutUs.css";
import Footer from "../Footer";
import Header from "../Header";

export default function AboutUs() {
    return (
        <>
            <Header />
            <h3 className="breadcrumbs">Om oss</h3>
            <main className='aboutUsPageContainer'>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/hHIikHJV9fI" title="Secrets Of Successful Teamwork: Insights From Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </main>
            <Footer />
        </>
    );
}