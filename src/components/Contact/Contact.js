import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact-section" class="section-center">
      <p>i Want To Hear From You</p>
      <h2 class="section-heading blog-posts-heading text-white">Contact Me</h2>
      <form action="" id="contact-form">
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" required autocomplete="name" />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" required autocomplete="email" />
        </div>
        <div class="form-control">
          <label for="mesage">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div class="form-control form-btn-field">
          <button type="submit" class="btn contact-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
