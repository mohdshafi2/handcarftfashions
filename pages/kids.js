import React from 'react'
import Layout from "../src/component/Layout/Layout";
import CardTwo from '../src/component/CardTwo/cardTwo';
import data from '../data/kidsPageData.json'


const CardTwopanData = data.kids;

const Kids = (props) => {
    return (
        <Layout titleTag="Kids Page">
            <div className="kids">
                <div className="intro">
                    <div className="container">
                        <div className="intro_txt">
                            <h1>Kids Products</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <main>
                    <CardTwo CardTwopan={CardTwopanData} />
                </main>
            </div>
        </Layout>
    )
}

export default Kids



