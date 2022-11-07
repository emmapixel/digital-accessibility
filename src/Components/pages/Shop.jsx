import React from 'react';
import ProductCard from '../ProductCard';
import styles from './Shop.css'
import Footer from "../Footer";
import Header from "../Header";

export default function Shop() {
    return (
        <>
            <Header />
            <h3 className="breadcrumbs">Butik / Produkter / Lampor</h3>
            <main className="shopPage">
                <section className="shopItemsContainer">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </main>
            <Footer />
        </>
    );
}