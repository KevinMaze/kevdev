import React from "react";

export default function Social() {
    return (
        <div className="home__social">
            <a
                href="https://www.instagram.com/_kebinu_/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-instagram"></i>
            </a>
            <a
                href="https://github.com/KevinMaze"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/k%C3%A9vin-maze-0556b917a/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-linkedin"></i>
            </a>
        </div>
    );
}
