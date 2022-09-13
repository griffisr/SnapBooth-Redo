
  class Button extends HTMLElement {
    constructor() {
      super();
      const text = this.getAttribute("text");
      this.innerHTML = `


      <!------------------------------Small Nav Bar--------------------------------------------------->
      <header class="fl-page-header fl-page-header-fixed fl-page-nav-right fl-page-nav-toggle-icon fl-page-nav-toggle-visible-mobile"  role="banner">
          <div class="fl-page-header-wrap">
              <div class="fl-page-header-container container">
                  <div class="fl-page-header-row row">

      <!--Header logo for scrolled nav bar-->
<div class="col-sm-12 col-md-3 fl-page-logo-wrap">
<div class="fl-page-header-logo">
  <a href=""><img loading="false" data-no-lazy="1" class="fl-logo-img" itemscope itemtype="https://schema.org/ImageObject" src="https://s3.us-east-2.amazonaws.com/snapboothphotos.com/Images/Logos/sbpLogoDark.png"  data-retina="Images/Logos/sbpLogo.png" title="" alt= "Photo Booth Near Me" /></a>
</div>
</div>

<div class="col-sm-12 col-md-9 fl-page-fixed-nav-wrap">
<div class="fl-page-nav-wrap">

  <nav class="fl-page-nav fl-nav navbar navbar-default navbar-expand-md" aria-label="Header Menu" role="navigation">

    <button src="https://s3.us-east-2.amazonaws.com/snapboothphotos.com/Images/Logos/sbpLogo.png"type="button" class="navbar-toggle navbar-toggler" data-toggle="collapse" data-target=".fl-page-nav-collapse">
      
      <span><i class="fa fa-bars" aria-hidden="true"></i><span class="sr-only"><img src="https://s3.us-east-2.amazonaws.com/snapboothphotos.com/Images/Logos/sbpLogo.png" alt= "Photo Booth Near Me"></img></span></span>
    </button>

    <div class="fl-page-nav-collapse collapse navbar-collapse">
      <ul id="menu-maintop" class="nav navbar-nav navbar-right menu fl-theme-menu">
        
        <li id="menu-item-24645" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24645 nav-item"><a href="photo-booth-rental-guide.html" class="nav-link" title="Rental Guide">Rental Guide</a></li>


       <li id="menu-item-24402" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24402 nav-item"><a href="testimonials.html" class="nav-link" title="Testimonials">Testimonials</a></li>
        <!--Dropdown-->
        <li id="menu-item-24404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24645 nav-item"><a href="FAQs.html" class="nav-link" title="FAQs">FAQs</a></li>
        <li id="menu-item-24403" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24403 nav-item"><a href="RatesAvailability.html" class="nav-link" title="Request Quote">Request Quote</a></li>
      </ul>							
    </div>
  </nav>

</div>
</div>


</div>
</div>
</div>
      </header><!-- .fl-page-header-fixed -->



       <!------------------------------Large Nav Bar--------------------------------------------------->
      <header class="fl-page-header fl-page-header-primary fl-page-nav-right fl-page-nav-toggle-icon fl-page-nav-toggle-visible-mobile" itemscope="itemscope"   role="banner">
          <div class="fl-page-header-wrap">
              <div class="fl-page-header-container container" style="padding-top: 0%;">
                  <div class="fl-page-header-row row">
      
                      <div class="col-sm-12 col-md-4 fl-page-header-logo-col">
                          <div class="fl-page-header-logo" itemscope="itemscope" itemtype="https://schema.org/Organization">
                              <a href="http://snapboothphotos.com/" itemprop="url"><img  src="https://s3.us-east-2.amazonaws.com/snapboothphotos.com/Images/Logos/sbpLogo.png" title=" " alt= "Photo Booth Near Me" style="width: 70%;"/></a>	
                          </div>
                      </div>

                      <div class="col-sm-12 col-md-8 fl-page-nav-col" style="padding-top: 20px;">
                          <div class="fl-page-nav-wrap">
                              <nav class="fl-page-nav fl-nav navbar navbar-default navbar-expand-md" aria-label="Header Menu" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement" role="navigation">

                                  <button type="button" class="navbar-toggle navbar-toggler" data-toggle="collapse" data-target=".fl-page-nav-collapse">
                      
                      <!--CHANGE THE HAMBURGER MENU ICON-->
                                      <span><span class="sr-only" style="position: relative;"><img src="../Images/menu.png" style="height: 55px; width: auto;" alt= "Photo Booth Near Me"></img></span>
                                  </button>

                                  <div class="fl-page-nav-collapse collapse navbar-collapse">
                                      <ul id="menu-maintop-1" class="nav navbar-nav navbar-right menu fl-theme-menu">
                      
                      
                                           <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24645 nav-item"><a href="photo-booth-rental-guide.html" class="nav-link" title ="Rental Guide">Rental Guide</a></li>
                                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24402 nav-item"> <a href="testimonials.html" class="nav-link" title="Testimonials">Testimonials</a></li>
                                          <li id="menu-item-24404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24645 nav-item"><a href="FAQs.html" class="nav-link" title="FAQs">FAQs</a></li>
                                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24403 nav-item"><a href="RatesAvailability.html" class="nav-link" title="Request Quote">Request Quote</a></li>
                                      </ul>							
                                  </div>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header><!-- .fl-page-header -->
        `;
    }
  }
    customElements.define("app-button", Button);