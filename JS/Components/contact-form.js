
  class contactForm extends HTMLElement {
    constructor() {
      super();
      const text = this.getAttribute("text");
      this.innerHTML = `


      <form id="contact-form" method="POST">
      <label>Name</label>
      <input
      id="name-input"
      class="input-field" 
      type="text" 
      name="name">

      <label>Email</label>
      <input id="email-input" 
      class="input-field" 
      type="text" 
      name="email">

      <label>Event Date</label>
      <input id="subject-input" 
      class="input-field" 
      type="date" 
      name="subject"
      onchange   = "quoteFormStarted('EventDate');"
      onpaste    = "this.onchange();">

      <div id="frm_field_13604_container" class="form-field  frm_required_field  frm_top_container">
        <label class="frm_pos_ frm_primary_label">* Event City &amp; State
            <span class="frm_required">*</span>
        </label>
        <input 
        type="text" 
        id="citySTATE" 
        name="citySTATE" 
        value=""  
        data-reqmsg="Please enter" />  
    </div>


      <div id="frm_field_19733_container"
        class="frm_form_field form-field  frm_required_field frm_top_container">
        <label for="eventDesc" class="frm_primary_label">* Event Type/Description
          <span class="frm_required">*</span>
        </label>
        <input 
        type="text" 
        id="eventDesc" 
        name="eventDesc" 
        value=""
        data-reqmsg="This field cannot be blank."
        placeholder="(i.e., Wedding, Corporate Party, etc.)" />
      </div>

      <div id="frm_field_13606_container" class="form-field  frm_required_field  frm_top_container">
        <label class="frm_pos_ frm_primary_label">* Number of Guests
            <span class="frm_required">*</span>
        </label>
        <br>
        <select name="guestCount" id="guestCount"  data-reqmsg="Please select" style="width: 100%;" >
        <option value=""  selected="selected"> </option>
            <option value="Less than 50" >Less than 50</option>
            <option value="Approximately 50-75" >Approximately 50-75</option>
            <option value="Approximately 75-100" >Approximately 75-100</option>
            <option value="Approximately 100-150" >Approximately 100-150</option>
            <option value="Approximately 150-200" >Approximately 150-200</option>
            <option value="Approximately 200-250" >Approximately 200-250</option>
            <option value="Approximately 250-350" >Approximately 250-350</option>
            <option value="Approximately 350-500" >Approximately 350-500</option>
            <option value="Approximately 500-1,000" >Approximately 500-1,000</option>
            <option value="More than 1,000" >More than 1,000</option>
        </select>
    
        
    </div>


      <input type="hidden" name="frm_action" value="create" />
      <input type="hidden" name="form_id" value="461" />
      <input type="hidden" name="frm_hide_fields_461" id="frm_hide_fields_461" value="" />
      <input type="hidden" name="form_key" value="caxvs" />
      <input type="hidden" name="item_meta[0]" value="" />
      <input type="hidden" id="frm_submit_entry_461" name="frm_submit_entry_461"
        value="ee485a3d3a" /><input type="hidden" name="_wp_http_referer" value="/contact-us/" />

      <div id="frm_field_13605_container" class="form-field  frm_required_field  frm_top_container">
        <label class="frm_pos_ frm_primary_label">* How Did You Find Us?
          <span class="frm_required">*</span>
        </label>
        <select name="item_meta[13605]" id="field_t1zhai"
          data-reqmsg="How Did You Find Us? can&#039;t be blank" style="width: 100%;">
          <option value="" selected="selected"> </option>
          <option value="Google Search">Google Search</option>
          <option value="Other Search Engine">Other Search Engine</option>
          <option value="Bridal Show">Bridal Show</option>
          <option value="Facebook/Instagram">Facebook/Instagram</option>
          <option value="The Knot">The Knot</option>
          <option value="WeddingWire.com">WeddingWire.com</option>
          <option value="Referred by a wedding/event planner">Referred by a wedding/event planner
          </option>
          <option value="Referred by a photographer">Referred by a photographer</option>
          <option value="Referred by an event venue/location">Referred by an event venue/location
          </option>
          <option value="Referred by someone else">Referred by someone else</option>
          <option value="Saw you at a wedding I attended">Saw you at a wedding I attended</option>
          <option value="Saw you at an event I attended">Saw you at an event I attended</option>
        </select>


      </div>


      <div id="frm_field_13607_container" class="form-field   frm_top_container">
        <label class="frm_pos_ frm_primary_label">How can we help you? (optional)
          <span class="frm_required"></span>
        </label>
        <textarea name="item_meta[13607]" id="message-input" rows="5"></textarea>


      </div>

      <br>
      <a href="/thank-you.html">
        <input id="submit-btn" type="submit" value="Request Quote Now" onclick="submitToAPI(event); requestedQuote()"
          style="width: 100%;">
      </a>


    </form>


        `;
    }
  }
    customElements.define("contact-form", contactForm);