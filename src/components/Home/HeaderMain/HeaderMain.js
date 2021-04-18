import React from 'react';
import feature from '../../Image/feature.png'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container">
            <div className="row d-flex mt-5">
                <div className="col-md-6">
                    <img style={{ width: '100%', marginTop: '-80px' }} src={feature} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>You can find us 24/7</h1>
                    <p>Welcome,  you’re find here Premier Service! This is a time for joy, so definitely take it all in – pop some releax.</p>
                    <div class="svg">
                        <a class="button" href="/">
                            <svg>
                                <rect height="40" width="140" fill="transparent" />
                            </svg>
                            <span>Book Service</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;