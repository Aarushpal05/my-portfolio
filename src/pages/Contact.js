import react from 'react';
import "../css/Contact.css";

function contact(){
    return(
      <section id="contact" class="contact-section">
    <div class="contact-container">

        <div class="contact-info">
            <span class="contact-tag">Get In Touch</span>

            <h2>Let's Build Something Amazing Together</h2>

            <p>
                Have a project in mind or looking for a creative web developer?
                Feel free to reach out and let's discuss your ideas.
            </p>

            <div class="contact-details">
                <div class="detail-box">
                    <i class="bi bi-envelope-fill"></i>
                    <span>aarushpal876@gmail.com</span>
                </div>

                <div class="detail-box">
                    <i class="bi bi-telephone-fill"></i>
                    <span>+91 9876543210</span>
                </div>

                <div class="detail-box">
                    <i class="bi bi-geo-alt-fill"></i>
                    <span>India</span>
                </div>
            </div>
        </div>

        <div class="contact-form-box">
            <form>
                <div class="input-group">
                    <input type="text" placeholder="Your Name" required/>
                </div>

                <div class="input-group">
                    <input type="email" placeholder="Your Email" required/>
                </div>

                <div class="input-group">
                    <input type="text" placeholder="Subject" required/>
                </div>

                <div class="input-group">
                    <textarea rows="5" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" class="send-btn">
                    Send Message
                </button>
            </form>
        </div>

    </div>
</section>
    )
}

export default contact;