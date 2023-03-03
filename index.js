class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar fixed-top navbar-expand-lg bg-parcel-plus">
            <div class="container-fluid px-2">
            <div>
                <a href="/index.html#top" class="navbar-brand d-flex justify-content-between align-items-center rounded">
                    <img class="me-3 navbar-logo" src="/assets/images/parcelplus-logo.png" height="30" width="100%" alt="">
                    <span class="navbar-logo-text-small-screen">Parcel Plus Sugar Land</span>
                </a>
            </div>
            <button 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            class="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="/" class="nav-link">
                            Home
                        </a>
                    </li>
                    <li class="nav-item active d-none">
                        <a href="/pages/about.html" class="nav-link">
                            About
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/pages/tracking.html" class="nav-link">
                            Tracking
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/pages/specials.html" class="nav-link">
                            Specials
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/pages/contactus.html" class="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
          `
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <section class="footer footer-bg">
        <div class="row m-0 px-5 pt-4">
            <p class="tracking-sub-headers text-light-blue lh-1 m-0">Parcel Plus</p>
            <p class="tracking-sub-headers text-light-blue lh-1 mb-3">DHL Express Service Point</p>
        </div>
        <div class="row m-0 px-5 pt-1 pb-3">
            <div class="col-lg-4 col-md-6">
                <p class="address-sub-headers text-light-blue">Store Hours</p>
                    <p class="fw-bold mb-0 text-white">Store Hours M-F : 9:00am - 6:00pm</p>
                    <p class="fw-bold text-white">Store Hours M-F : 9:00am - 6:00pm</p></div>
            <div class="col-lg-4 col-md-6">
                <p class="address-sub-headers text-light-blue">Address</p>
                <p class="fw-bold mb-0 text-white">Address here, 1234</p>
                <p class="fw-bold text-white">Line 2 , Big Address</p>
            </div>
            <div class="col-lg-4 col-md-6">
                <p class="address-sub-headers text-light-blue">Contact information</p>
                    <p class="fw-bold mb-0 text-white">Phone : (123) 525-6542</p>
                    <p class="fw-bold mb-0 text-white">Fax : (123) 525-6542</p>
                    <p class="fw-bold text-white">Email : abc@xyz.com</p>
            </div>
        </div>
        <div className="row w-100">
            <p class="text-white m-0 p-4 d-flex justify-content-center align-items-center">PARCEL PLUS - DHL Express Service Point © All Rights Reserved.</p>
        </div>
    </section>
  
        `
      
    }
  }
  
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);