import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
// import EmailForm from '../../components/EmailForm/emailform'
import './contact.css'

export default function Contact() {
    return (
        <>
        <HeroSm header="Contact"/>

        <section className="row justify-content-center">
            <section className="col-9 thankyou">
                <h2>Thank You</h2>
                <p>Thank you for visiting my site today. <br/> Feel free to send me an email. <br/> You can also find links to my social pages, please connect! <br/> Have a great day and here's to creating something meaningful!</p>
                <a className="email-link" href = "mailto:iminhas@live.com.com"><strong>iminhas@live.com.com</strong></a>
                <br/>
                <br/>
                <a href="www.linkedin.com/in/inderjit-minhas-021879141">
                    <img className="sm-logos" src="./images/linkedin.png" alt="linkedinlogo" target="_blank"/>
                </a>
                <a href="https://github.com/indyminhas">
                    <img className="sm-logos" src="./images/github.png" alt="githublogo" target="_blank"/>
                </a>
            </section>
        </section>
        {/* <EmailForm /> */}
        </>
    )
}