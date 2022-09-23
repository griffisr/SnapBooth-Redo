
  class CTABar extends HTMLElement {
    constructor() {
      super();
      const text = this.getAttribute("text");
      this.innerHTML = `


      <div class="apply-cta-bar">

      <div class="container">
        <div class="row">
    
          <div class="nine columns">
    
            <h4 class="cta-tag">Capture the smiles and laughter of your guests with a photo booth rental from Snap Booth Photos.</h4>
    
            <div class="cta-btn-wrapper">
              <a href="RatesAvailability.html" class="apply-cta">Get a Quote Today</a>
              <h2 class="cta-phone"><a href="tel:">(734)-707-7794</a></h2>
            </div>
            
    
          </div>           
    
        </div>
      </div>
    
    </div>


        `;
    }
  }
    customElements.define("cta-bar", CTABar);