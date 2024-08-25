import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Form = () => {
    return (
        <section id="contact" className="form">
            <div className="container">
                <div className="form_container">
                    <h1>Any<span> questions</span>?</h1>
                    <p>Get in touch with us!</p>
                    <form>
                        <input required={true} type="text" placeholder="Name" />
                        <input required={true} type="email" placeholder="E-mail" />
                        <textarea required={true} placeholder="Message" rows={7} />
                        <button type="submit">Send</button>
                    </form>
                    <p>Here are our <span>socials</span>!</p>
                    <div className="icons_container">
                        <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                        <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
