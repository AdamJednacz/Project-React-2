import React from 'react';
import facebook   from "../assets/facebook.png"
import twiter from "../assets/twiter.png"
import instagram from "../assets/instagram.png"


const Form = () => {
    return (
        <section className="form">
            <div className="container">
                <div className="form_container">
                    <h1>Any<span> questions</span>?</h1>
                    <p>Get in touch we us!</p>
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="E-mail"/>
                        <textarea placeholder="Message" rows={7}/>
                        <button type="submit">Send</button>
                    </form>
                    <p>Here are our <span>socials</span>!</p>
                    <div className="icons_container">
                        <img src={facebook} alt="facebook"/>
                        <img src={twiter} alt="twiter"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;