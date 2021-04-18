import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section>
            <div class="background">
                <div class="container">
                    <div className="mb-5 text-center">
                        <h1 class="app-title">Contact With Us</h1>
                    </div>
                    <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT FORM</span>
                                </div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">SEND MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;