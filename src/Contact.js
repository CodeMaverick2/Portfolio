import "./Contact.css";

function Contact(){
    return(
        <div className="contacts">
            <h1>Contacts</h1>
            <div className="contact-body">
                <div className="contact-form">
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Tejas Ghatule"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="tejasghatule12345@gmail.com"></input>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea placeholder="Type your message..."></textarea>
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
                <div className="contact-details">
                    <div>tejasghatule12345@gmail.com</div>
                    <div>+918766081731</div>
                    <div>Scaler School of Technology</div>
                </div>
            </div>
        </div>
    )
}
export default Contact;