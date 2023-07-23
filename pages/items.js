import React from 'react';
import Head from 'next/head';
import styles from '../styles/Styles.module.css'
import Image from 'next/image';
import img2 from '../assets/img2.png';
import img6 from '../assets/img6.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import pi1 from '../assets/pi1.jpg';
import pi2 from '../assets/pi2.jpg';
import pi3 from '../assets/pi3.jpg';
import pi4 from '../assets/pi4.jpg';


function Items() {
    return (
        <>
            <Head>
                <title>This is using bootstrap</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <div className={`container ${styles.cardContainer}`}>
                <div className={`card ${styles.card}`}>
                    <Image
                        src={img6}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">VEG Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$105</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
                {/* Add more card items here */}
                {/* <div className={`container ${styles.cardContainer}`}> */}
                <div className={`card ${styles.card}`}>
                    <Image
                        src={img2}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">VEG Burger</h5>
                        <h5 className="card-title fw-semibold text-xl">$50</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <Image
                        src={img5}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">Margarita Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$150</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <Image
                        src={pi1} height={200} width={200}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">Cheese Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$80</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <Image
                        src={pi2} height={200} width={200}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">Cheese Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$99</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <Image
                        src={pi3} height={200} width={200}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl">Cheese Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$80</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <Image
                        src={pi4} height={200} width={200}
                        className="card-img-top"
                        alt="VEG Burger"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-xl"> speical Pizza</h5>
                        <h5 className="card-title fw-semibold text-xl">$120</h5>
                        <p className="card-text">random description about the item</p>
                        <a href="#" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>




            </div>

        </>
    );
}

export default Items;
