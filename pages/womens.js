import React from 'react'
import Layout from "../src/component/Layout/Layout";
import CardOne from '../src/component/CardOne/cardOne';
import data from '../data/womensPageData.json'


const CardOnepanData = data.womens;

const Womens = (props) => {
    return (
        <Layout titleTag="Womens Page">
            <div className="womens">
                <div className="intro">
                    <div className="container">
                        <div className="intro_txt">
                            <h1>Womens Products</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <main>
                    <CardOne CardOnepan={CardOnepanData} />
                </main>
            </div>
        </Layout>
    )
}

export default Womens



