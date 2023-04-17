import { Link, Outlet } from "react-router-dom"
var UserCheckout = () => {
    return (<div>
      <div className="pageWrapper">
  {/* Promotion Bar */}
  <div className="notification-bar mobilehide d-none">
    <a href="#" className="notification-bar__message">20% off your very first purchase, use promo code: diva fashion</a>
    <span className="close-announcement icon an an-times" />
  </div>
  {/* End Promotion Bar */}
  {/* Search Form Drawer */}
  <div className="search">
    <div className="search__form">
      <form className="search-bar__form" action="#">
        <button className="go-btn search__button" type="submit"><i className="icon an an-search" /></button>
        <input className="search__input" type="search" name="q" defaultValue placeholder="Search for products, brands..." aria-label="Search" autoComplete="off" />
      </form>
      <button type="button" className="search-trigger close-btn" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"><i className="icon an an-times" /></button>
    </div>
  </div>
  {/* End Search Form Drawer */}
  {/* Main Header */}
  <div className="header-section classicHeader clearfix animated hdr-sticky">
    {/* Desktop Header */}
    <div className="header-1 classic-style">
      {/* Top Header */}
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-sm-8 col-md-7 col-lg-4">
              <div className="currency picker float-start">
                <select className="nice-select" name="currency">
                  <option value="USD">USD</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
              <div className="language picker float-start">
                <select className="nice-select" name="language">
                  <option value="EN">English</option>
                  <option value="AR">Arabic</option>
                  <option value="FR">French</option>
                  <option value="DE">German</option>
                  <option value="JA">Japanese</option>
                  <option value="ES">Spanish</option>
                </select>
              </div>
              <p className="phone-no float-start"><i className="icon an an-phone me-1" /><a href="tel:+4400(111)044833">+440 0(111) 044 833</a></p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-md-none d-lg-block">
              <div className="text-center">
                <p className="top-header_middle-text">Free Ground Shipping Over $250</p>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-none d-sm-block d-md-block d-lg-block">
              <div className="header-social">
                <ul className="justify-content-end list--inline social-icons">
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"><i className="icon an an-facebook" /> <span className="icon__fallback-text">Facebook</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter"><i className="icon an an-twitter" /> <span className="icon__fallback-text">Twitter</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Pinterest"><i className="icon an an-pinterest-p" /> <span className="icon__fallback-text">Pinterest</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram"><i className="icon an an-instagram" /> <span className="icon__fallback-text">Instagram</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="YouTube"><i className="icon an an-youtube" /> <span className="icon__fallback-text">YouTube</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-block d-sm-none d-md-none d-lg-none">
              {/* Mobile User Links */}
              <div className="user-menu-dropdown">
                <span className="user-menu"><i className="an an-user-alt" /></span>
                <ul className="customer-links list-inline" style={{"display":"none"}}>
                  <li className="item"><a href="login.html">Login</a></li>
                  <li className="item"><a href="register.html">Register</a></li>
                  <li className="item"><a href="my-account.html">Orders</a></li>
                  <li className="item"><a href="compare.html">Compare</a></li>
                </ul>
              </div>
              {/* End Mobile User Links */}
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header */}
      {/* Header */}
      <div className="header-wrap d-flex">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-4 col-sm-4 col-md-4 col-lg-8 d-block d-lg-none">
              <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Menu"><i className="icon an an-times" /><i className="icon an an-bars" /></button>
              {/* Mobile Search */}
              <div className="site-header__search d-block d-lg-none mobile-search-icon">
                <button type="button" className="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><i className="icon an an-search" /></button>
              </div>
              {/* End Mobile Search */}
            </div>
            {/* Desktop Logo */}
            <div className="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
              <a href="index.html"><img src="theme/assets/images/logo.png" alt="Diva Multipurpose Html Template" title="Diva Multipurpose Html Template" /></a>
            </div>
            {/* End Desktop Logo */}
            {/* Desktop Navigation */}
            <div className="col-2 col-sm-3 col-md-3 col-lg-8 d-none d-lg-block">
              {/* Desktop Menu */}
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="d-flex flex-wrap site-nav medium center hidearrow">
                  <li className="lvl1 parent dropdown">
                    <a href="#">Layout <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="index.html" className="site-nav">Layout 1 - Classic 01</a></li>
                      <li><a href="home2-default.html" className="site-nav">Layout 2 - Default</a></li>
                      <li><a href="home3-classic.html" className="site-nav">Layout 3 - Classic 02</a></li>
                      <li><a href="home4-fullwidth.html" className="site-nav">Layout 4 - Full Width</a></li>
                      <li><a href="home5-boxed.html" className="site-nav">Layout 5 - Boxed</a></li>
                      <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax  Banner</a></li>
                      <li><a href="home7-creative.html" className="site-nav">Layout 7 - Creative</a></li>
                      <li><a href="home8-simple.html" className="site-nav">Layout 8 - Simple</a></li>
                      <li><a href="home9-simple2.html" className="site-nav">Layout 9 - Simple 2</a></li>
                      <li><a href="home10-minimal.html" className="site-nav">Home 10 - Minimal</a></li>
                      <li><a href="home11-modern.html" className="site-nav">Layout 11 - Modern</a></li>
                      <li><a href="home12-category.html" className="site-nav">Layout 12 - Category</a></li>
                      <li><a href="home13-dark.html" className="site-nav">Layout 13 - Dark</a></li>
                      <li><a href="home14.html" className="site-nav last">Layout 14 <span className="lbl nm_label1">New</span></a></li>
                    </ul>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Shop <i className="an an-angle-down" /></a>
                    <div className="megamenu style1">
                      <div className="row">
                        <div className="lvl-1 col-12 col-md-9 col-lg-9">
                          <ul className="row grid--uniform mmWrapper">
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1">Shop Pages</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-fullwidth.html" className="site-nav">No Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-sidebar-drawer.html" className="site-nav">Sidebar Drawer</a></li>
                                <li className="lvl-2"><a href="shop-listview-sidebar.html" className="site-nav">Sidebar Products List</a></li>
                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav">Sidebar Products Slider</a></li>
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite Scroll</a></li>
                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
                                <li className="lvl-2"><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a></li>
                                <li className="lvl-2"><a href="product-labels.html" className="site-nav">Product Labels</a></li>
                                <li className="lvl-2"><a href="collection-3columns.html" className="site-nav last">Collection 3 Columns</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1">Shop Pages</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Category Slideshow</a></li>
                                <li className="lvl-2"><a href="shop-grid-2.html" className="site-nav">2 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav">3 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-4.html" className="site-nav">4 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-5.html" className="site-nav">5 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav">6 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-listview.html" className="site-nav">List View</a></li>
                                <li className="lvl-2"><a href="shop-listview-sidebar.html" className="site-nav">List View Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav">Pagination - Number</a></li>
                                <li className="lvl-2"><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
                                <li className="lvl-2"><a href="collection-4columns.html" className="site-nav last">Collection 4 Columns</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1 menu-title">Shop Other Page</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="wishlist.html" className="site-nav">My Wishlist Page Style1</a></li>
                                <li className="lvl-2"><a href="wishlist-style2.html" className="site-nav">My Wishlist Page Style2</a></li>
                                <li className="lvl-2"><a href="compare.html" className="site-nav">Compare Page Style1</a></li>
                                <li className="lvl-2"><a href="compare-style2.html" className="site-nav last">Compare Page Style2</a></li>
                                <li className="lvl-2"><a href="cart.html" className="site-nav">Cart Page Style1</a></li>
                                <li className="lvl-2"><a href="cart-style2.html" className="site-nav">Cart Page Style2</a></li>
                                <li className="lvl-2"><a href="checkout.html" className="site-nav">Checkout Page Style1</a></li>
                                <li className="lvl-2"><a href="checkout-style2.html" className="site-nav">Checkout Page Style2</a></li>
                                <li className="lvl-2"><a href="checkout-success.html" className="site-nav">Checkout Success</a></li>
                                <li className="lvl-2"><a href="shop-search-results.html" className="site-nav">Search Results</a></li>
                                <li className="lvl-2"><a href="collection-5columns.html" className="site-nav last">Collection 5 Columns</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="lvl-1 col-12 col-md-3 col-lg-3 product-menu">
                          <a href="#" className="site-nav lvl-1 text-center">Best Seller</a>
                          <div className="grid-products text-center">
                            <div className="product-image">
                              <a href="product-layout1.html" className="grid-view-item__link"><img src="theme/assets/images/megamenu/megamenu-product.jpg" alt="image" title /></a>
                            </div>
                            <div className="product-details text-center">
                              <div className="product-name">
                                <a href="product-layout1.html">J B Crepe multi Color Top</a>
                              </div>
                              <div className="product-price">
                                <span className="price">$800.00</span>
                              </div>
                              <div className="product-review mt-1">
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star-half-alt" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 imageCol">
                          <div className="row mm2-banner">
                            <div className="col-12 col-md-6 col-lg-6">
                              <a href="shop-left-sidebar.html"><img src="theme/assets/images/megamenu/megamenu-bg2.jpg" alt="image" /></a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <a href="shop-listview-sidebar.html"><img src="theme/assets/images/megamenu/megamenu-bg3.jpg" alt="image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Features <i className="an an-angle-down" /> <span className="navLbl">Hot</span></a>
                    <div className="megamenu style2 megabgfull">
                      <ul className="row mmWrapper">
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Page</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">Product Layout1</a></li>
                            <li className="lvl-2"><a href="product-layout2.html" className="site-nav">Product Layout2</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Product Layout3</a></li>
                            <li className="lvl-2"><a href="product-layout4.html" className="site-nav">Product Layout4</a></li>
                            <li className="lvl-2"><a href="product-layout5.html" className="site-nav">Product Layout5</a></li>
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Product Layout6</a></li>
                            <li className="lvl-2"><a href="product-layout7.html" className="site-nav">Product Layout7</a></li>
                            <li className="lvl-2"><a href="product-layout8.html" className="site-nav last">Product Layout8</a></li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Types</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-accordian.html" className="site-nav">Product Accordian</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Product Tabs Left</a></li>
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Product Tabs Center</a></li>
                            <li className="lvl-2"><a href="product-standard.html" className="site-nav">Standard Product</a></li>
                            <li className="lvl-2"><a href="product-variable.html" className="site-nav">Variable Product</a></li>
                            <li className="lvl-2"><a href="product-grouped.html" className="site-nav">Grouped Product</a></li>
                            <li className="lvl-2"><a href="product-pre-orders.html" className="site-nav">Product Pre-orders</a></li>
                            <li className="lvl-2"><a href="product-call-for-price.html" className="site-nav last">Product Call for Price</a></li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Types</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">New Product</a></li>
                            <li className="lvl-2"><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
                            <li className="lvl-2"><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
                            <li className="lvl-2"><a href="product-external-affiliate.html" className="site-nav">External / Affiliate Product</a></li>
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">Variable Image</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Variable Select</a></li>
                            <li className="lvl-2"><a href="product-360-degree-view.html" className="site-nav last">360 Degree view</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Pages <i className="an an-angle-down" /><span className="navLbl new">New</span></a>
                    <div className="megamenu style2">
                      <ul className="row mmWrapper">
                        <li className="col-12 menuCol">
                          <ul className="row">
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">My Account</a>
                              <ul className="subLinks">
                                <li><a href="login.html" className="site-nav">Login</a></li>
                                <li><a href="my-account.html" className="site-nav">My Account</a></li>
                                <li><a href="register.html" className="site-nav">Register</a></li>
                                <li><a href="forgot-your-password.html" className="site-nav">Forgot Password</a></li>
                                <li><a href="empty-cart.html" className="site-nav last">Empty cart</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">About Us</a>
                              <ul className="subLinks">
                                <li><a href="about-us-style1.html" className="site-nav">About Us 01</a></li>
                                <li><a href="about-us-style2.html" className="site-nav">About Us 02</a></li>
                                <li><a href="about-us-style3.html" className="site-nav">About Us 03</a></li>
                                <li><a href="cms-page.html" className="site-nav">CMS Page</a></li>
                                <li><a href="empty-category.html" className="site-nav last">Empty category</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">Others Pages</a>
                              <ul className="subLinks">
                                <li><a href="contactus-style1.html" className="site-nav">Contact Us 01</a></li>
                                <li><a href="contactus-style2.html" className="site-nav">Contact Us 02</a></li>
                                <li><a href="faqs-style1.html" className="site-nav">FAQs 01</a></li>
                                <li><a href="faqs-style2.html" className="site-nav">FAQs 02</a></li>
                                <li><a href="empty-compare.html" className="site-nav last">Empty compare</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">Others Pages</a>
                              <ul className="subLinks">
                                <li><a href="404.html" className="site-nav">404 Error</a></li>
                                <li><a href="size-guide.html" className="site-nav">Size Guide</a></li>
                                <li><a href="privacy-policy.html" className="site-nav">Privacy Policy</a></li>
                                <li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
                                <li><a href="empty-search.html" className="site-nav last">Empty search</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav  lvl-1">Others Pages</a>
                              <ul>
                                <li><a href="coming-soon-style1.html" className="site-nav">Coming soon 01</a></li>
                                <li><a href="coming-soon-style2.html" className="site-nav">Coming soon 02</a></li>
                                <li><a href="coming-soon-style3.html" className="site-nav">Coming soon 03</a></li>
                                <li><a href="coming-soon-style4.html" className="site-nav">Coming soon 04</a></li>
                                <li><a href="empty-wishlist.html" className="site-nav last">Empty wishlist</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="col-12 imageCol">
                          <a href="#"><img src="theme/assets/images/megamenu/megamenu-bg4.jpg" alt="image" /></a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">Lookbook <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="lookbook-2columns.html" className="site-nav">2 Columns</a></li>
                      <li><a href="lookbook-3columns.html" className="site-nav">3 Columns</a></li>
                      <li><a href="lookbook-4columns.html" className="site-nav">4 Columns</a></li>
                      <li><a href="lookbook-5columns.html" className="site-nav">5 Columns + Fullwidth</a></li>
                      <li><a href="lookbook-shop.html" className="site-nav last">Lookbook Shop</a></li>
                    </ul>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">Blog <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                      <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                      <li><a href="blog-grid-view.html" className="site-nav">Grid View</a></li>
                      <li><a href="blog-list-view.html" className="site-nav">List View</a></li>
                      <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
                      <li><a href="blog-masonry.html" className="site-nav">Masonry</a></li>
                      <li><a href="blog-single-post.html" className="site-nav last">Single Post</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* End Desktop Menu */}
            </div>
            {/* End Desktop Navigation */}
            {/* Right Side */}
            <div className="col-4 col-sm-4 col-md-4 col-lg-2">
              <div className="right-action d-flex-align-center justify-content-end">
                {/* Search */}
                <div className="item site-header__search d-none d-lg-block">
                  <button type="button" className="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><i className="icon an an-search" /></button>
                </div>
                {/* End Search */}
                {/* User Links */}
                <div className="item user-menu-dropdown d-none d-sm-block d-md-block d-lg-block">
                  <span className="user-menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account"><i className="icon an an-user-alt" /></span>
                  <ul className="customer-links list-inline" style={{"display":"none"}}>
                    <li className="item"><a href="login.html">Login</a></li>
                    <li className="item"><a href="register.html">Register</a></li>
                    <li className="item"><a href="my-account.html">Orders</a></li>
                    <li className="item"><a href="compare.html">Compare</a></li>
                  </ul>
                </div>
                {/* End User Links */}
                {/* Wishlist */}
                <div className="item site-header-wishlist">
                  <a href="wishlist.html" className="wishlist-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wishlist">
                    <i className="icon an an-heart" /><span id="WishCount" className="site-header-wish-count">2</span>
                  </a>
                </div>
                {/* End Wishlist */}
                {/* Minicart */}
                <div className="item site-cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart">
                  <a href="#" className="site-header__cart btn-minicart" data-bs-toggle="modal" data-bs-target="#minicart-drawer">
                    <i className="icon an an-shopping-bag" /><span id="CartCount" className="site-header__cart-count">2</span>
                  </a>  
                </div>
                {/* End Minicart */}
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </div>
      {/* End Header */}
    </div>
    {/* End Desktop Header */}
  </div>
  {/* End Main Header */}
  {/* Mobile Menu */}
  <div className="mobile-nav-wrapper" role="navigation">
    <div className="closemobileMenu"><i className="icon an an-times-circle closemenu" /> Close Menu</div>
    <ul id="MobileNav" className="mobile-nav">
      <li className="lvl1 parent megamenu">
        <a href="index.html">Layout <i className="an an-plus" /></a>
        <ul>
          <li><a href="index.html" className="site-nav">Layout 1 - Classic 01</a></li>
          <li><a href="home2-default.html" className="site-nav">Layout 2 - Default</a></li>
          <li><a href="home3-classic.html" className="site-nav">Layout 3 - Classic 02</a></li>
          <li><a href="home4-fullwidth.html" className="site-nav">Layout 4 - Full Width</a></li>
          <li><a href="home5-boxed.html" className="site-nav">Layout 5 - Boxed</a></li>
          <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax  Banner</a></li>
          <li><a href="home7-creative.html" className="site-nav">Layout 7 - Creative</a></li>
          <li><a href="home8-simple.html" className="site-nav">Layout 8 - Simple</a></li>
          <li><a href="home9-simple2.html" className="site-nav">Layout 9 - Simple 2</a></li>
          <li><a href="home10-minimal.html" className="site-nav">Home 10 - Minimal</a></li>
          <li><a href="home11-modern.html" className="site-nav">Layout 11 - Modern</a></li>
          <li><a href="home12-category.html" className="site-nav">Layout 12 - Category</a></li>
          <li><a href="home13-dark.html" className="site-nav">Layout 13 - Dark</a></li>
          <li><a href="home14.html" className="site-nav last">Layout 14 <span className="lbl nm_label1">New</span></a></li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="shop-left-sidebar.html">Shop <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="#" className="site-nav">Shop Pages<i className="an an-plus" /></a>
            <ul>
              <li><a href="shop-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
              <li><a href="shop-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
              <li><a href="shop-fullwidth.html" className="site-nav">No Sidebar</a></li>
              <li><a href="shop-sidebar-drawer.html" className="site-nav">Sidebar Drawer</a></li>
              <li><a href="shop-listview-sidebar.html" className="site-nav">Sidebar Products List</a></li>
              <li><a href="shop-left-sidebar.html" className="site-nav">Sidebar Products Slider</a></li>
              <li><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite Scroll</a></li>
              <li><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
              <li><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a></li>
              <li><a href="product-labels.html" className="site-nav">Product Labels</a></li>
              <li><a href="collection-3columns.html" className="site-nav last">Collection 3 Columns</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Shop Pages<i className="an an-plus" /></a>
            <ul>
              <li><a href="shop-right-sidebar.html" className="site-nav">Category Slideshow</a></li>
              <li><a href="shop-grid-2.html" className="site-nav">2 Products Per Row</a></li>
              <li><a href="shop-grid-3.html" className="site-nav">3 Products Per Row</a></li>
              <li><a href="shop-grid-4.html" className="site-nav">4 Products Per Row</a></li>
              <li><a href="shop-grid-5.html" className="site-nav">5 Products Per Row</a></li>
              <li><a href="shop-grid-6.html" className="site-nav">6 Products Per Row</a></li>
              <li><a href="shop-listview.html" className="site-nav">List View</a></li>
              <li><a href="shop-listview-sidebar.html" className="site-nav">List View Sidebar</a></li>
              <li><a href="shop-grid-3.html" className="site-nav">Pagination - Number</a></li>
              <li><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
              <li><a href="collection-4columns.html" className="site-nav last">Collection 4 Columns</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Shop Other Page<i className="an an-plus" /></a>
            <ul>
              <li><a href="wishlist.html" className="site-nav">My Wishlist Page Style1</a></li>
              <li><a href="wishlist-style2.html" className="site-nav">My Wishlist Page Style2</a></li>
              <li><a href="compare.html" className="site-nav">Compare Page Style1</a></li>
              <li><a href="compare-style2.html" className="site-nav last">Compare Page Style2</a></li>
              <li><a href="cart.html" className="site-nav">Cart Page Style1</a></li>
              <li><a href="cart-style2.html" className="site-nav">Cart Page Style2</a></li>
              <li><a href="checkout.html" className="site-nav">Checkout Page Style1</a></li>
              <li><a href="checkout-style2.html" className="site-nav">Checkout Page Style2</a></li>
              <li><a href="checkout-success.html" className="site-nav">Checkout Success</a></li>
              <li><a href="shop-search-results.html" className="site-nav">Search Results</a></li>
              <li><a href="collection-5columns.html" className="site-nav last">Collection 5 Columns</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="product-layout1.html">Features <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="#" className="site-nav">Product Page<i className="an an-plus" /></a>
            <ul>
              <li><a href="product-layout1.html" className="site-nav">Product Layout1</a></li>
              <li><a href="product-layout2.html" className="site-nav">Product Layout2</a></li>
              <li><a href="product-layout3.html" className="site-nav">Product Layout3</a></li>
              <li><a href="product-layout4.html" className="site-nav">Product Layout4</a></li>
              <li><a href="product-layout5.html" className="site-nav">Product Layout5</a></li>
              <li><a href="product-layout6.html" className="site-nav">Product Layout6</a></li>
              <li><a href="product-layout7.html" className="site-nav">Product Layout7</a></li>
              <li><a href="product-layout8.html" className="site-nav last">Product Layout8</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Product Types <i className="an an-plus" /></a>
            <ul>
              <li><a href="product-accordian.html" className="site-nav">Product Accordian</a></li>
              <li><a href="product-layout3.html" className="site-nav">Product Tabs Left</a></li>
              <li><a href="product-layout6.html" className="site-nav">Product Tabs Center</a></li>
              <li><a href="product-standard.html" className="site-nav">Standard Product</a></li>
              <li><a href="product-variable.html" className="site-nav">Variable Product</a></li>
              <li><a href="product-grouped.html" className="site-nav">Grouped Product</a></li>
              <li><a href="product-pre-orders.html" className="site-nav">Product Pre-orders</a></li>
              <li><a href="product-call-for-price.html" className="site-nav last">Product Call for Price</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Product Types <i className="an an-plus" /></a>
            <ul>
              <li><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
              <li><a href="product-layout1.html" className="site-nav">New Product</a></li>
              <li><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
              <li><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
              <li><a href="product-external-affiliate.html" className="site-nav">External / Affiliate Product</a></li>
              <li><a href="product-layout1.html" className="site-nav">Variable Image</a></li>
              <li><a href="product-layout3.html" className="site-nav">Variable Select</a></li>
              <li><a href="product-360-degree-view.html" className="site-nav last">360 Degree view</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="#">Pages <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="my-account.html" className="site-nav">My Account <i className="an an-plus" /></a>
            <ul>
              <li><a href="login.html" className="site-nav">Login</a></li>
              <li><a href="my-account.html" className="site-nav">My Account</a></li>
              <li><a href="register.html" className="site-nav">Register</a></li>
              <li><a href="forgot-your-password.html" className="site-nav">Forgot Password</a></li>
              <li><a href="empty-cart.html" className="site-nav last">Empty cart</a></li>
            </ul>
          </li>
          <li>
            <a href="about-us-style1.html" className="site-nav">About Us <i className="an an-plus" /></a>
            <ul>
              <li><a href="about-us-style1.html" className="site-nav">About Us 01</a></li>
              <li><a href="about-us-style2.html" className="site-nav">About Us 02</a></li>
              <li><a href="about-us-style3.html" className="site-nav">About Us 03</a></li>
              <li><a href="cms-page.html" className="site-nav">CMS Page</a></li>
              <li><a href="empty-category.html" className="site-nav last">Empty category</a></li>
            </ul>
          </li>
          <li className="grid__item lvl-1 col">
            <a href="#" className="site-nav  lvl-1">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="contactus-style1.html" className="site-nav">Contact Us 01</a></li>
              <li><a href="contactus-style2.html" className="site-nav">Contact Us 02</a></li>
              <li><a href="faqs-style1.html" className="site-nav">FAQs 01</a></li>
              <li><a href="faqs-style2.html" className="site-nav">FAQs 02</a></li>
              <li><a href="empty-compare.html" className="site-nav last">Empty compare</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="404.html" className="site-nav">404 Error</a></li>
              <li><a href="size-guide.html" className="site-nav">Size Guide</a></li>
              <li><a href="privacy-policy.html" className="site-nav">Privacy Policy</a></li>
              <li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
              <li><a href="empty-search.html" className="site-nav last">Empty search</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="coming-soon-style1.html" className="site-nav">Coming soon 01</a></li>
              <li><a href="coming-soon-style2.html" className="site-nav">Coming soon 02</a></li>
              <li><a href="coming-soon-style3.html" className="site-nav">Coming soon 03</a></li>
              <li><a href="coming-soon-style4.html" className="site-nav">Coming soon 04</a></li>
              <li><a href="empty-wishlist.html" className="site-nav last">Empty wishlist</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="lookbook-2columns.html">Lookbook <i className="an an-plus" /></a>
        <ul>
          <li><a href="lookbook-2columns.html" className="site-nav">2 Columns</a></li>
          <li><a href="lookbook-3columns.html" className="site-nav">3 Columns</a></li>
          <li><a href="lookbook-4columns.html" className="site-nav">4 Columns</a></li>
          <li><a href="lookbook-5columns.html" className="site-nav">5 Columns + Fullwidth</a></li>
          <li><a href="lookbook-shop.html" className="site-nav last">Lookbook Shop</a></li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="blog-left-sidebar.html">Blog <i className="an an-plus" /></a>
        <ul>
          <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
          <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
          <li><a href="blog-grid-view.html" className="site-nav">Grid View</a></li>
          <li><a href="blog-list-view.html" className="site-nav">List View</a></li>
          <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
          <li><a href="blog-masonry.html" className="site-nav">Masonry</a></li>
          <li><a href="blog-single-post.html" className="site-nav last">Single Post</a></li>
        </ul>
      </li>
    </ul>
  </div>
  {/* End Mobile Menu */}
  {/* Body Content */}
  <div id="page-content">
    {/* Page Title */}
    <div className="page section-header text-center">
      <div className="page-title">
        <div className="wrapper"><h1 className="page-title">Checkout Page Style1</h1></div>
      </div>
    </div>
    {/* End Page Title */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
          <div className="customer-box returning-customer">
            <h3><i className="icon an an-user" /> Returning customer? <a href="#customer-login" id="customer" className="text-white" data-bs-toggle="collapse">Click here to login</a></h3>
            <div id="customer-login" className="collapse customer-content">
              <div className="customer-info">
                <p className="coupon-text mb-3">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                <form method="post" action="#">
                  <div className="row">
                    <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label htmlFor="exampleInputEmail1">Email address <span className="required-f">*</span></label>
                      <input type="email" className="no-margin" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label htmlFor="exampleInputPassword1">Password <span className="required-f">*</span></label>
                      <input type="password" id="exampleInputPassword1" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-check d-flex justify-content-between ps-0">
                        <div className="customCheckbox">
                          <input type="checkbox" className="form-check-input" id="remember" defaultValue />
                          <label htmlFor="remember"> Remember me!</label>
                        </div>
                        <a href="forgot-your-password.html" className="ml-3 float-end">Forgot your password?</a>
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
          <div className="customer-box customer-coupon">
            <h3 className="font-15 xs-font-13"><i className="icon an an-gift" /> Have a coupon? <a href="#have-coupon" className="text-white" data-bs-toggle="collapse">Click here to enter your code</a></h3>
            <div id="have-coupon" className="collapse coupon-checkout-content">
              <div className="discount-coupon">
                <div id="coupon" className="coupon-dec tab-pane active">
                  <p className="mb-3">Enter your coupon code if you have one.</p>
                  <form method="post" action="#">
                    <div className="form-group">
                      <label className="required get" htmlFor="coupon-code"><span className="required-f">*</span> Coupon</label>
                      <input id="coupon-code" required type="text" className="mb-3" />
                      <button className="coupon-btn btn" type="submit">Apply Coupon</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row billing-fields">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3 mb-md-0">
          <div className="create-ac-content">
            <form method="post" action="#">
              <fieldset>
                <h2 className="login-title mb-3">Billing details</h2>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-firstname">First Name <span className="required-f">*</span></label>
                    <input name="firstname" defaultValue id="input-firstname" type="text" />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-lastname">Last Name <span className="required-f">*</span></label>
                    <input name="lastname" defaultValue id="input-lastname" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-email">E-Mail <span className="required-f">*</span></label>
                    <input name="email" defaultValue id="input-email" type="email" />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-telephone">Telephone <span className="required-f">*</span></label>
                    <input name="telephone" defaultValue id="input-telephone" type="tel" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="input-company">Company</label>
                    <input name="company" defaultValue id="input-company" type="text" />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-address-1">Address <span className="required-f">*</span></label>
                    <input name="address_1" defaultValue id="input-address-1" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="input-address-2">Apartment <span className="required-f">*</span></label>
                    <input name="address_2" defaultValue id="input-address-2" type="text" />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-city">City <span className="required-f">*</span></label>
                    <input name="city" defaultValue id="input-city" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-postcode">Post Code <span className="required-f">*</span></label>
                    <input name="postcode" defaultValue id="input-postcode" type="text" />
                  </div>
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-country">Country <span className="required-f">*</span></label>
                    <select name="country_id" id="input-country">
                      <option value="Afghanistan" data-provinces="[]">Afghanistan</option>
                      <option value="Aland Islands" data-provinces="[]">Åland Islands</option>
                      <option value="Albania" data-provinces="[]">Albania</option>
                      <option value="Algeria" data-provinces="[]">Algeria</option>
                      <option value="Andorra" data-provinces="[]">Andorra</option>
                      <option value="Angola" data-provinces="[]">Angola</option>
                      <option value="Anguilla" data-provinces="[]">Anguilla</option>
                      <option value="Antigua And Barbuda" data-provinces="[]">Antigua &amp; Barbuda</option>
                      <option value="Armenia" data-provinces="[]">Armenia</option>
                      <option value="Aruba" data-provinces="[]">Aruba</option>
                      <option value="Austria" data-provinces="[]">Austria</option>
                      <option value="Azerbaijan" data-provinces="[]">Azerbaijan</option>
                      <option value="Bahamas" data-provinces="[]">Bahamas</option>
                      <option value="Bahrain" data-provinces="[]">Bahrain</option>
                      <option value="Bangladesh" data-provinces="[]">Bangladesh</option>
                      <option value="Barbados" data-provinces="[]">Barbados</option>
                      <option value="Belarus" data-provinces="[]">Belarus</option>
                      <option value="Belgium" data-provinces="[]">Belgium</option>
                      <option value="Belize" data-provinces="[]">Belize</option>
                      <option value="Benin" data-provinces="[]">Benin</option>
                      <option value="Bermuda" data-provinces="[]">Bermuda</option>
                      <option value="Bhutan" data-provinces="[]">Bhutan</option>
                      <option value="Bolivia" data-provinces="[]">Bolivia</option>
                      <option value="Bosnia And Herzegovina" data-provinces="[]">Bosnia &amp; Herzegovina</option>
                      <option value="Botswana" data-provinces="[]">Botswana</option>
                      <option value="Bouvet Island" data-provinces="[]">Bouvet Island</option>
                      <option value="British Indian Ocean Territory" data-provinces="[]">British Indian Ocean Territory</option>
                      <option value="Virgin Islands, British" data-provinces="[]">British Virgin Islands</option>
                      <option value="Brunei" data-provinces="[]">Brunei</option>
                      <option value="Bulgaria" data-provinces="[]">Bulgaria</option>
                      <option value="Burkina Faso" data-provinces="[]">Burkina Faso</option>
                      <option value="Burundi" data-provinces="[]">Burundi</option>
                      <option value="Cambodia" data-provinces="[]">Cambodia</option>
                      <option value="Republic of Cameroon" data-provinces="[]">Cameroon</option>
                      <option value="Cape Verde" data-provinces="[]">Cape Verde</option>
                      <option value="Bonaire, Sint Eustatius and Saba" data-provinces="[]">Caribbean Netherlands</option>
                      <option value="Cayman Islands" data-provinces="[]">Cayman Islands</option>
                      <option value="Central African Republic" data-provinces="[]">Central African Republic</option>
                      <option value="Chad" data-provinces="[]">Chad</option>
                      <option value="Chile" data-provinces="[]">Chile</option>
                      <option value="Comoros" data-provinces="[]">Comoros</option>
                      <option value="Congo" data-provinces="[]">Congo - Brazzaville</option>
                      <option value="Congo, The Democratic Republic Of The" data-provinces="[]">Congo - Kinshasa</option>
                      <option value="Cook Islands" data-provinces="[]">Cook Islands</option>
                      <option value="Costa Rica" data-provinces="[]">Costa Rica</option>
                      <option value="Croatia" data-provinces="[]">Croatia</option>
                      <option value="Cuba" data-provinces="[]">Cuba</option>
                      <option value="Curaçao" data-provinces="[]">Curaçao</option>
                      <option value="Cyprus" data-provinces="[]">Cyprus</option>
                      <option value="Czech Republic" data-provinces="[]">Czech Republic</option>
                      <option value="Côte d'Ivoire" data-provinces="[]">Côte d'Ivoire</option>
                      <option value="Denmark" data-provinces="[]">Denmark</option>
                      <option value="Djibouti" data-provinces="[]">Djibouti</option>
                      <option value="Dominica" data-provinces="[]">Dominica</option>
                      <option value="Dominican Republic" data-provinces="[]">Dominican Republic</option>
                      <option value="Finland" data-provinces="[]">Finland</option>
                      <option value="France" data-provinces="[]">France</option>
                      <option value="French Guiana" data-provinces="[]">French Guiana</option>
                      <option value="French Polynesia" data-provinces="[]">French Polynesia</option>
                      <option value="French Southern Territories" data-provinces="[]">French Southern Territories</option>
                      <option value="Gabon" data-provinces="[]">Gabon</option>
                      <option value="Gambia" data-provinces="[]">Gambia</option>
                      <option value="Georgia" data-provinces="[]">Georgia</option>
                      <option value="Germany" data-provinces="[]">Germany</option>
                      <option value="Ghana" data-provinces="[]">Ghana</option>
                      <option value="Gibraltar" data-provinces="[]">Gibraltar</option>
                      <option value="Greece" data-provinces="[]">Greece</option>
                      <option value="Greenland" data-provinces="[]">Greenland</option>
                      <option value="Jersey" data-provinces="[]">Jersey</option>
                      <option value="Jordan" data-provinces="[]">Jordan</option>
                      <option value="Kazakhstan" data-provinces="[]">Kazakhstan</option>
                      <option value="Kenya" data-provinces="[]">Kenya</option>
                      <option value="Kiribati" data-provinces="[]">Kiribati</option>
                      <option value="Kosovo" data-provinces="[]">Kosovo</option>
                      <option value="Kuwait" data-provinces="[]">Kuwait</option>
                      <option value="Kyrgyzstan" data-provinces="[]">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic" data-provinces="[]">Laos</option>
                      <option value="Latvia" data-provinces="[]">Latvia</option>
                      <option value="Lebanon" data-provinces="[]">Lebanon</option>
                      <option value="Lesotho" data-provinces="[]">Lesotho</option>
                      <option value="Liberia" data-provinces="[]">Liberia</option>
                      <option value="Libyan Arab Jamahiriya" data-provinces="[]">Libya</option>
                      <option value="Liechtenstein" data-provinces="[]">Liechtenstein</option>
                      <option value="Lithuania" data-provinces="[]">Lithuania</option>
                      <option value="Luxembourg" data-provinces="[]">Luxembourg</option>
                      <option value="Macao" data-provinces="[]">Macau SAR China</option>
                      <option value="Macedonia, Republic Of" data-provinces="[]">Macedonia</option>
                      <option value="Madagascar" data-provinces="[]">Madagascar</option>
                      <option value="Malawi" data-provinces="[]">Malawi</option>
                      <option value="Monaco" data-provinces="[]">Monaco</option>
                      <option value="Mongolia" data-provinces="[]">Mongolia</option>
                      <option value="Montenegro" data-provinces="[]">Montenegro</option>
                      <option value="Montserrat" data-provinces="[]">Montserrat</option>
                      <option value="Morocco" data-provinces="[]">Morocco</option>
                      <option value="Mozambique" data-provinces="[]">Mozambique</option>
                      <option value="Myanmar" data-provinces="[]">Myanmar (Burma)</option>
                      <option value="Namibia" data-provinces="[]">Namibia</option>
                      <option value="Nauru" data-provinces="[]">Nauru</option>
                      <option value="Nepal" data-provinces="[]">Nepal</option>
                      <option value="Netherlands" data-provinces="[]">Netherlands</option>
                      <option value="Samoa" data-provinces="[]">Samoa</option>
                      <option value="San Marino" data-provinces="[]">San Marino</option>
                      <option value="Sao Tome And Principe" data-provinces="[]">São Tomé &amp; Príncipe</option>
                      <option value="Saudi Arabia" data-provinces="[]">Saudi Arabia</option>
                      <option value="Senegal" data-provinces="[]">Senegal</option>
                      <option value="Serbia" data-provinces="[]">Serbia</option>
                      <option value="Seychelles" data-provinces="[]">Seychelles</option>
                      <option value="Sierra Leone" data-provinces="[]">Sierra Leone</option>
                      <option value="Singapore" data-provinces="[]">Singapore</option>
                      <option value="Sint Maarten" data-provinces="[]">Sint Marteen</option>
                      <option value="Slovakia" data-provinces="[]">Slovakia</option>
                      <option value="Slovenia" data-provinces="[]">Slovenia</option>
                      <option value="Solomon Islands" data-provinces="[]">Solomon Islands</option>
                      <option value="Sri Lanka" data-provinces="[]">Sri Lanka</option>
                      <option value="Saint Barthélemy" data-provinces="[]">St. Barthélemy</option>
                      <option value="Saint Helena" data-provinces="[]">St. Helena</option>
                      <option value="Saint Kitts And Nevis" data-provinces="[]">St. Kitts &amp; Nevis</option>
                      <option value="Saint Lucia" data-provinces="[]">St. Lucia</option>
                      <option value="Saint Martin" data-provinces="[]">St. Martin</option>
                      <option value="Saint Pierre And Miquelon" data-provinces="[]">St. Pierre &amp; Miquelon</option>
                      <option value="St. Vincent" data-provinces="[]">St. Vincent &amp; Grenadines</option>
                      <option value="Sudan" data-provinces="[]">Sudan</option>
                      <option value="Suriname" data-provinces="[]">Suriname</option>
                      <option value="Svalbard And Jan Mayen" data-provinces="[]">Svalbard &amp; Jan Mayen</option>
                      <option value="Swaziland" data-provinces="[]">Swaziland</option>
                      <option value="Sweden" data-provinces="[]">Sweden</option>
                      <option value="Switzerland" data-provinces="[]">Switzerland</option>
                      <option value="Syria" data-provinces="[]">Syria</option>
                      <option value="Taiwan" data-provinces="[]">Taiwan</option>
                      <option value="Tajikistan" data-provinces="[]">Tajikistan</option>
                      <option value="Timor Leste" data-provinces="[]">Timor-Leste</option>
                      <option value="Togo" data-provinces="[]">Togo</option>
                      <option value="Tokelau" data-provinces="[]">Tokelau</option>
                      <option value="Tonga" data-provinces="[]">Tonga</option>
                      <option value="Trinidad and Tobago" data-provinces="[]">Trinidad &amp; Tobago</option>
                      <option value="Tunisia" data-provinces="[]">Tunisia</option>
                      <option value="Turkey" data-provinces="[]">Turkey</option>
                      <option value="Turkmenistan" data-provinces="[]">Turkmenistan</option>
                      <option value="Turks and Caicos Islands" data-provinces="[]">Turks &amp; Caicos Islands</option>
                      <option value="Tuvalu" data-provinces="[]">Tuvalu</option>
                      <option value="United States Minor Outlying Islands" data-provinces="[]">U.S. Outlying Islands</option>
                      <option value="Uganda" data-provinces="[]">Uganda</option>
                      <option value="Ukraine" data-provinces="[]">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom" data-provinces="[]">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay" data-provinces="[]">Uruguay</option>
                      <option value="Uzbekistan" data-provinces="[]">Uzbekistan</option>
                      <option value="Vanuatu" data-provinces="[]">Vanuatu</option>
                      <option value="Holy See (Vatican City State)" data-provinces="[]">Vatican City</option>
                      <option value="Venezuela" data-provinces="[]">Venezuela</option>
                      <option value="Vietnam" data-provinces="[]">Vietnam</option>
                      <option value="Wallis And Futuna" data-provinces="[]">Wallis &amp; Futuna</option>
                      <option value="Western Sahara" data-provinces="[]">Western Sahara</option>
                      <option value="Yemen" data-provinces="[]">Yemen</option>
                      <option value="Zambia" data-provinces="[]">Zambia</option>
                      <option value="Zimbabwe" data-provinces="[]">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label htmlFor="input-zone">Region / State <span className="required-f">*</span></label>
                    <select name="zone_id" id="input-zone">
                      <option value>Please Select</option>
                      <option value={3513}>Aberdeen</option>
                      <option value={3514}>Aberdeenshire</option>
                      <option value={3515}>Anglesey</option>
                      <option value={3516}>Angus</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12">
                    <div className="customCheckbox cart_tearm">
                      <input type="checkbox" className="form-check-input" id="account" defaultValue />
                      <label htmlFor="account"><strong>Create an account ?</strong></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 mb-0">
                    <label htmlFor="input-company">Order Notes <span className="required-f">*</span></label>
                    <textarea className="form-control resize-both" rows={3} defaultValue={""} />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="your-order-payment">
            <div className="your-order">
              <h2 className="order-title mb-4">Your Order</h2>
              <div className="table-responsive-sm order-table"> 
                <table className="bg-white table table-bordered table-hover text-center">
                  <thead>
                    <tr>
                      <th className="text-start">Product Name</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">Spike Jacket</td>
                      <td>$99</td>
                      <td>S</td>
                      <td>1</td>
                      <td>$99</td>
                    </tr>
                    <tr>
                      <td className="text-start">Argon Sweater</td>
                      <td>$199</td>
                      <td>M</td>
                      <td>2</td>
                      <td>$298</td>
                    </tr>
                    <tr>
                      <td className="text-start">Babydoll Bow Dress</td>
                      <td>$299</td>
                      <td>XL</td>
                      <td>3</td>
                      <td>$398</td>
                    </tr>
                  </tbody>
                  <tfoot className="font-weight-600">
                    <tr>
                      <td colSpan={4} className="text-end">Shipping </td>
                      <td>$50.00</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-end">Total</td>
                      <td>$845.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <hr />
            <div className="your-payment">
              <h2 className="payment-title mb-3">payment method</h2>
              <div className="payment-method">
                <div className="payment-accordion">
                  <div id="accordion" className="payment-section">
                    <div className="card mb-2">
                      <div className="card-header">
                        <a className="card-link" data-bs-toggle="collapse" href="#collapseOne">Direct Bank Transfer </a>
                      </div>
                      <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <p className="no-margin font-15">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-header">
                        <a className="collapsed card-link" data-bs-toggle="collapse" href="#collapseTwo">Cheque Payment</a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <p className="no-margin font-15">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card margin-15px-bottom border-radius-none">
                      <div className="card-header">
                        <a className="collapsed card-link" data-bs-toggle="collapse" href="#collapseThree"> PayPal </a>
                      </div>
                      <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <p className="no-margin font-15">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-header">
                        <a className="collapsed card-link" data-bs-toggle="collapse" href="#collapseFour"> Payment Information </a>
                      </div>
                      <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <fieldset>
                            <div className="row">
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <label htmlFor="input-cardname">Name on Card <span className="required-f">*</span></label>
                                <input name="cardname" defaultValue placeholder="Card Name" id="input-cardname" className="form-control" type="text" />
                              </div>
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <label htmlFor="input-country">Credit Card Type <span className="required-f">*</span></label>
                                <select name="country_id" className="form-control">
                                  <option value>Please Select</option>
                                  <option value={1}>American Express</option>
                                  <option value={2}>Visa Card</option>
                                  <option value={3}>Master Card</option>
                                  <option value={4}>Discover Card</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <label htmlFor="input-cardno">Credit Card Number  <span className="required-f">*</span></label>
                                <input name="cardno" defaultValue placeholder="Credit Card Number" id="input-cardno" className="form-control" type="text" />
                              </div>
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <label htmlFor="input-cvv">CVV Code <span className="required-f">*</span></label>
                                <input name="cvv" defaultValue placeholder="Card Verification Number" id="input-cvv" className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <label>Expiration Date <span className="required-f">*</span></label>
                                <input type="date" name="exdate" className="form-control" />
                              </div>
                              <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                <img className="padding-25px-top xs-padding-5px-top" src="theme/assets/images/payment-img.jpg" alt="card" title="card" />
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-button-payment">
                  <a href="checkout-success.html" className="btn">Place order</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Main Content*/}        
    </div>
  </div>
  {/* End Body Content */}
  {/* Footer */}
  <footer id="footer">
    <div className="site-footer">
      <div className="footer-top">
        <div className="container">
          {/* Footer Links */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Quick Links</h4>
              <ul>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">New In</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Help</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Terms And Conditions</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns &amp; Exchange</a></li>
                <li><a href="#">Ordering &amp; Payment</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
              <h4 className="h4">Contact Us</h4>
              <ul className="addressFooter">
                <li>
                  <i className="icon an an-map-marker" />
                  <p>55 Gallaxy Enque,<br />2568 steet, 23568 NY</p>
                </li>
                <li className="phone">
                  <i className="icon an an-phone-volume" />
                  <p><a href="tel:(440)0000000000">(440) 000 000 0000</a></p>
                </li>
                <li className="email">
                  <i className="icon an an-envelope" />
                  <p><a href="mailto:sales@yousite.com">sales@yousite.com</a></p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 newsletter">
              <div className="display-table">
                <div className="display-table-cell footer-newsletter">
                  <form action="#" method="post">
                    <label className="h4">Newsletter</label>
                    <p>sign up for newsletter to know our latest news and offers.</p>
                    <div className="input-group">
                      <input type="email" className="input-group__field newsletter__input" name="EMAIL" defaultValue placeholder="Email address" required />
                      <span className="input-group__btn">
                        <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Sign Up</span></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Links */}
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-Start align-items-center">
              <div className="footer-social w-100 text-start d-flex">
                <h3 className="h4">Stay Connected</h3>
                <ul className="list--inline site-footer__social-icons social-icons">
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon an an-facebook" /></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon an an-twitter" /> <span className="icon__fallback-text">Twitter</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon an an-pinterest-p" /> <span className="icon__fallback-text">Pinterest</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon an an-instagram" /> <span className="icon__fallback-text">Instagram</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube"><i className="icon an an-youtube" /> <span className="icon__fallback-text">YouTube</span></a></li>
                </ul>
              </div>
            </div>
            {/*Footer Payment Icon*/}
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              <ul className="payment-icons list--inline w-100 justify-content-end text-end">
                <li><i className="icon an an-cc-visa" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-mastercard" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-amex" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-paypal" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-discover" aria-hidden="true" /></li>
              </ul>
            </div>
            {/* End Footer Payment Icon*/}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* Footer Copyright */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span>© 2021 DIVA.</span> All Rights Reserved.</div>
            {/* End Footer Copyright */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/* Scoll Top */}
  <div id="site-scroll"><i className="icon an an-angle-up" /></div>
  {/* End Scoll Top */}
  {/* Minicart Drawer */}
  <div className="minicart-right-drawer right modal fade" id="minicart-drawer" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="minicart-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="an an-times" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left" title="Close" /></button>
          <h4 className="modal-title" id="myModalLabel2">Shopping Cart <strong>3</strong> items</h4>
        </div>
        <div className="minicart-body">
          <div className="empty-cart">
            <p>You have no items in your shopping cart.</p>
          </div>
          <div id="drawer-minicart" className="block block-cart">
            <ul className="mini-products-list">
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-1.jpg" alt="Frayed Layered Sleeve" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Frayed Layered Sleeve</a>
                  <div className="variant-cart">Red / XL</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$199.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-2.jpg" alt="Floral Lined Jacket" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Floral Lined Jacket</a>
                  <div className="variant-cart">Black / M</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$129.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-3.jpg" alt="Fit & Flare Trim Dress" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Fit &amp; Flare Trim Dress</a>
                  <div className="variant-cart">white / XL</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$99.00</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="minicart-footer minicart-action">
          <div className="total-in">
            <p className="label"><b>Subtotal:</b><span className="item product-price"><span className="money">$427.00</span></span></p>
            <p className="label"><b>Shipping:</b><span className="item product-price"><span className="shipping">$10.00</span></span></p>
            <p className="label"><b>Tax:</b><span className="item product-price"><span className="tax">$0.00</span></span></p>
            <p className="label"><b>Total:</b><span className="item product-price"><span className="totals">$437.00</span></span></p>
          </div>
          <div className="buttonSet d-flex flex-row align-items-center text-center">
            <a href="cart.html" className="btn btn-secondary w-50 me-3">View Cart</a>
            <a href="checkout.html" className="btn btn-secondary w-50">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Minicart Drawer */}
</div>




        <Outlet />
    </div>)
}
export default UserCheckout