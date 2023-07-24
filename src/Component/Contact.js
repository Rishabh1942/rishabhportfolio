import React from 'react'
import './Style.css'

function Contact() {
  return (
    <section id="contact">
    <h1 class="section-heading mb50px">
        <span>
            <i class="far fa-address-card"></i>
        </span>
        <span> Contact </span>
    </h1>
    <div id="contact-container">

        <div id="contact-form-container">
            <h3> Get In touch </h3>
            <form id="contact-form" action="https://formspree.io/f/mzbqwjpv"  method="POST">
                <input id="input-name" name="name" type="text" placeholder="Your Name"/>
                <input id="input-email" name="email" type="text" required placeholder="Your Email"/>
                <textarea id="input-message" name="message" rows="2" cols={40} placeholder="Message"></textarea>
                <button class="sub-btn" type="submit">SEND MESSAGE</button>
            </form>
        </div>
        <div id="my-details-container">
            <h3> My Address </h3>
            <div class="my-details-info-container">
                <i class="fas fa-map-marker-alt"></i>
                <span>Himachal Pradesh, India</span>
            </div>
            <div class="my-details-info-container">
                <i class="fas fa-mobile-alt"></i>
                <span>+91-(9816019763)</span>
            </div>
            <div class="my-details-info-container">
                <i class="far fa-envelope"></i>
                <span>rishabhbhardwaj8448@gmail.com</span>
            </div>
        </div>
        <div id="my-details-container">
        
            <h4> social-Links </h4>
            <ul class="horizontal-list-social">
            <li>
                <a href="https://www.linkedin.com/in/avinash-mishra-2174511b2/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>

            <li>
                <a href="https://github.com/avi112bala">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>

            <li>
                <a href="https://www.facebook.com/profile.php?id=100010325281863">
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
            </li>

            <li>
                <a href="https://www.quora.com/profile/Avinash-Mishra-856">
                    <i class="fa-brands fa-quora"></i>
                </a>
            </li>
        </ul>
           
        </div>
    </div>
</section>

  )
}

export default Contact