import React from 'react';
import feature from '../../Image/feature.png'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container">
            <div className="row d-flex mt-5">
                <div className="col-md-6">
                    <img style={{ width: '100%' }} src={feature} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Moments you won’t forget</h1>
                    <p>Congratulations,  you’re getting married! This is a time for joy, so definitely take it all in – pop some champagne, get all blessed out on your soon-to-be boo for life.</p>
                    <div class="svg">
                        <a class="button" href="/">
                            <svg>
                                <rect height="40" width="130" fill="transparent" />
                            </svg>
                            <span>Book Event</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;