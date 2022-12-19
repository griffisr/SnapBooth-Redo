
  class Button extends HTMLElement {
    constructor() {
      super();
      const text = this.getAttribute("text");
      this.innerHTML = `


      <!-- Navigation -->
                                    <nav class="site-nav js-site-nav" role="navigation" aria-label="navigation">

                                      <div class="site-nav__curtain js-nav-curtain"></div>

                                      <div class="wrapper wrapper--nav-area">

                                          <button class="menu-button js-menu-button" aria-expanded="false"
                                              aria-controls="menu" aria-label="Menu button">
                                              
                                              <span class="menu-button__lines">
                                                  <span class="menu-button__line"></span>
                                                  <span class="menu-button__line"></span>
                                                  <span class="menu-button__line"></span>
                                              </span>
                                              
                                              Menu
                                              
                                          </button>

                                          <ul class="site-nav__menu u-list-reset js-menu" id="menu">
                                              <li><a class="site-nav__link" href="testimonials.html">Testimonials</a></li>
                                              <li><a class="site-nav__link" href="FAQs.html">FAQs </a></li>
                                              <li><a class="site-nav__link" href="photo-booth-rental-guide.html">Rental Guide</a></li>
                                              <li><a class="site-nav__link" href="request-a-quote.html">Request Quote</a></li>
                                          </ul>

                                          <a class="logo" href="../">
                                              <img class="logo-img" src="https://s3.us-east-2.amazonaws.com/snapboothphotos.com/Images/Logos/sbpLogo.png">
                                            
                                          </a>
                                      </div>
                                  </nav>
        `;
    }
  }
    customElements.define("app-button", Button);