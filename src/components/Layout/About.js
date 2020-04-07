import React from 'react';

function About(){
    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">Luiz
                    <span className="text-primary"> Faria Jr.</span>
                </h1>
                <div className="subheading mb-5">Rua Antonio Bernardes Pinto, 2964 - Vila Chico Julio, Franca SP - 14405-233 - +55 16 99190-0711
                    <a href="mailto:luiz.fariajr@outlook.com"> luiz.fariajr@outlook.com</a>
                </div>
                <p className="lead mb-5">In construction.</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/luiz-faria-junior-a6515813b/" target="__blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/FARIAJR/" target="__blank">
                        <i className="fab fa-github"></i>
                    </a>
                    {/* <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a> */}
                </div>
            </div>
        </section>
    )
}

export default About;