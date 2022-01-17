import React from "react";
import "./Contact.css";
import message from "../../Image/message.jpg";

const Contact = () => {
  return (
    <section className="mb-5 pb-5" id="contact" style={{backgroundColor: '#678983'}}>
      <div className="container">
      <h1 className="text-center my-5 pt-5 pb-5">Contact with us</h1>
        <div className="row align-items-center">
         
          <div className="col-md-6">
              <img src={message} alt="" className="img-responsive img-fluid w-100 h-100" />
          </div>
          <div className="col-md-6 shadow p-2 rounded border">
            <div class="form-floating mb-3">
            <label for="floatingInput">Email address</label>
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="shohoz@gmail.com"
              />
              
            </div>
            <div class="form-floating mb-3">
            <label for="floatingInput">Enter Name</label>
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Tanjin Ahamed"
              />
              
            </div>
           
              <div className="from-floating">
              <label for="floatingTextarea2">Comments</label>
              <textarea
                class="form-control"
                placeholder="Write yours opinion here"
                id="floatingTextarea"
              ></textarea>
              </div>
             <div className="d-flex justify-content-end mt-2"><button class="btn btn-primary" type="submit">Send</button></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
