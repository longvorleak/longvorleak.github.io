import React from "react"

export default function Info() {
    return (
        <section className="info-section">
        <img src="../assets/avatar.png" className="profile-pic"></img>
            <h1 className="name">Vorleak Hok</h1>
            <h3 className="role">Frontend Developer</h3>
            <a href="https//www.longvorleak.com" className="personal-website">longvorleak.com</a>
            <div className="button-container">
                <button className="email-button"><i class="fa-solid fa-envelope" ></i> Email</button>
                <button className="linkedin-button"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </section>
    )
}