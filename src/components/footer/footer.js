import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    return (
        <div>
                <div className="site-footer">
                    <div className="container">
                        <footer>
                        <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                            <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                            <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                        <a href="#home"> Pinky Banik</a>.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                            <li><a className="facebook" href="#home"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" href="#facebook"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="dribbble" href="#dribble"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a className="linkedin" href="#linkedin"><FontAwesomeIcon icon={faDribbble} /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </footer>
                </div>
                </div>
        </div>
    );
};

export default Footer;