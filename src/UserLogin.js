import { Link, Outlet } from "react-router-dom"
var UserLogin = () => {
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
    <div className="page section-header text-center mb-0">
      <div className="page-title">
        <div className="wrapper"><h1 className="page-width">Login</h1></div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Breadcrumbs */}
    <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
      <div className="container breadcrumbs">
        <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Login</span>
      </div>
    </div>
    {/* End Breadcrumbs */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 box mb-4 mb-md-0">
          <h3>New Customers</h3>
          <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
          <a href="register.html" className="btn">Create an account</a>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 box">
          <div className="mb-4">
            <form method="post" action="#" id="CustomerRegisterForm" acceptCharset="UTF-8" className="customer-form">	
              <h3>Registered Customers</h3>
              <p>If you have an account with us, please log in.</p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="CustomerEmail">Email <span className="required">*</span></label>
                    <input type="email" name="customer[email]" placeholder id="CustomerEmail" autofocus />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="CustomerPassword">Password <span className="required">*</span></label>
                    <input type="password" defaultValue name="customer[password]" placeholder id="CustomerPassword" className />                        	
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="submit" className="btn mb-3" defaultValue="Sign In" />
                  <p className="mb-4">
                    <a href="forgot-your-password.html">Forgot your password?</a> &nbsp; | &nbsp;
                    <a href="register.html" id="customer_register_link">Create account</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End Main Content */}
      </div>
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
export default UserLogin