import "./Contact.css";

function Contact(){
    return(
        <div className="contacts" id='contacts'>
            <h1>Contacts</h1>
            <div className="contact-body">
                <div class="cont-tot">
                    <div class="contact-cont">
                        <form action="" class="contact-left">
                            <div class="contact-left-title">
                                <h2>Get in touch</h2>
                                <hr></hr>
                            </div>
                            <input type="text" name="name" placeholder="Your name" class="contact-inputs" required></input>
                            <input type="email" name="email" placeholder="Your email" class="contact-inputs" required></input>
                            <textarea name="message" placeholder="Your message" class="contact-inputs" required></textarea>
                            <button type="submit">Submit <img src='assets/arrow_icon.png' alt=""></img> </button>
                        </form>
                    </div>
                    <div class="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9197150448176!2d77.65459117507433!3d12.848461887455672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d39bc683cd5%3A0x51af52144352b21b!2sStanza%20Living%20Lisbon%20House%20%7C%20Coliving%20PG%20in%20Electronic%20City%20Phase%201!5e0!3m2!1sen!2sin!4v1717090067149!5m2!1sen!2sin" width="350" height="300" style={{ border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;