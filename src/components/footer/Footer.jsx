import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import {  AiFillYoutube } from "react-icons/ai";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        
                        <AiFillYoutube />
                    </span>
                </div>
                <ul className="menuItems">
                    <li className="menuItem">Conditons Of Use</li>
                    <li className="menuItem">Privacy & Policy</li>
                    <li className="menuItem">Press Room</li>
                </ul>
               
            </ContentWrapper>
            <span className="futer">© 2021 MovieBox by olawale olatona </span>
        </footer>
    );
};

export default Footer;
