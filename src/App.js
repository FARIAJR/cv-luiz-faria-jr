import React from 'react';
import { About, Awards, Education, Experience, Interests, Nav, Skills} from './components/Layout'
import $ from 'jquery'

function App() {
  function jQuery () {
    // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  }
  return (
    <div className="container-fluid p-0">
      <Nav/>
      <About/>
      <hr className="m-0"/>
      <Experience/>  
      <hr className="m-0"/>
      <Education/>
      <hr className="m-0"/>
      <Skills/>
      <hr className="m-0"/>
      <Interests/>
      {/* <hr className="m-0"/> */}
      {/* <Awards/> */}
    </div>
  );
}

export default App;
