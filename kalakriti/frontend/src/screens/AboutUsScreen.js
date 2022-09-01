import React from 'react';
export default function AboutUsScreen() {
    return (
        <div className="aboutscreen">
            <div className="about-section">

                <h1>WE ARE KALAKRITI</h1>
                <p>KALAKRITI was formed in 2020 with an idea of creating unique, distinct and pioneering designs in apparel and accessories. We started as a humble T-shirt company that brought in innovation in print-on-demand printing techniques which allowed us to introduce quirky prints in various niche and themes. Soon our love for product design went further and we started experimenting with off-beat Jeans and printed Shirts designs. Being passionate travellers ourselves, we were able to identify the shortcomings of conventional striped and checked shirts available in the market and decided to take the matter in our hands. It was during such travels that we realised the need for comfort clothing and that’s when we ventured into Kalakriti – The Everywhere wear for people who don’t want anything less than crazy.</p>
                <p>This is our story. It’s not much but we will soon update this page with insights into what made KALAKRITI a global brand that it has become today. Stay tuned!</p>
            </div>
            <h1 >Our Team</h1>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="/images/d10.jpg" alt="Rakshit"></img>
                        <div className="container">
                            <h2>Rakshit Mathur</h2>
                            <p className="title">CEO & Founder</p>
                            
                            <p>rakshitmathur60@gmail.com</p>
                            <p>Contact No.: 8619452403</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="/images/d9.jpeg" alt="Surbhi"></img>
                        <div className="container">
                            <h2>Surbhi Lodha</h2>
                            <p className="title">CEO & Founder</p>
                            
                            <p>surbhilodha1998@gmail.com</p>
                            <p>Contact No.: 9079770279</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    )
}