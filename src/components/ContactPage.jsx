import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-section bg-black" id="contact">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa fa-phone"></i>
              <h4 className="text-uppercase">Phone</h4>
              <div>(123) 456-7890</div> {/* Replace with your actual phone number */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa fa-envelope"></i>
              <h4 className="text-uppercase">Email</h4>
              <div>email@example.com</div> {/* Replace with your actual email */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
