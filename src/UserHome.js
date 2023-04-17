import { Link, Outlet } from "react-router-dom"
var UserHome = () => {
  return (<div>

    <div className="template-index diva template-index-diva">

      {/* Page Wrapper */}
      <div className="pageWrapper">
        {/* Promotion Bar */}
        <div className="notification-bar mobilehide d-none">
          <a href="#" className="notification-bar__message">20% off your very first purchase, use promo code: diva
            fashion</a>
          <span className="close-announcement icon an an-times" />
        </div>
        {/* End Promotion Bar */}
        {/* Search Form Drawer */}
        <div className="search">
          <div className="search__form">
            <form className="search-bar__form" action="#">
              <button className="go-btn search__button" type="submit"><i className="icon an an-search" /></button>
              <input className="search__input" type="search" name="q" defaultValue placeholder="Search entire store..." aria-label="Search" autoComplete="off" />
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
                      <p className="top-header_middle-text">FREE INTERNATIONAL SHIPPING FOR ORDERS ABOVE $100
                        USD</p>
                    </div>
                  </div>
                  <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-none d-sm-block d-md-block d-lg-block">
                    <div className="header-social">
                      <ul className="justify-content-end list--inline social-icons">
                        <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"><i className="icon an an-facebook" /> <span className="icon__fallback-text">Facebook</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter"><i className="icon an an-twitter" /> <span className="icon__fallback-text">Twitter</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Pinterest"><i className="icon an an-pinterest-p" /> <span className="icon__fallback-text">Pinterest</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram"><i className="icon an an-instagram" /> <span className="icon__fallback-text">Instagram</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="YouTube"><i className="icon icon an an-youtube" /> <span className="icon__fallback-text">YouTube</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-block d-sm-none d-md-none d-lg-none">
                    {/* Mobile User Links */}
                    <div className="user-menu-dropdown">
                      <span className="user-menu"><i className="an an-user-alt" /></span>
                      <ul className="customer-links list-inline" style={{ "display": "none" }}>
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
                            <li><a href="home2-default.html" className="site-nav">Layout 2 - Default</a>
                            </li>
                            <li><a href="home3-classic.html" className="site-nav">Layout 3 - Classic
                              02</a></li>
                            <li><a href="home4-fullwidth.html" className="site-nav">Layout 4 - Full
                              Width</a></li>
                            <li><a href="home5-boxed.html" className="site-nav">Layout 5 - Boxed</a>
                            </li>
                            <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax
                              Banner</a></li>
                            <li><a href="home7-creative.html" className="site-nav">Layout 7 -
                              Creative</a></li>
                            <li><a href="home8-simple.html" className="site-nav">Layout 8 - Simple</a>
                            </li>
                            <li><a href="home9-simple2.html" className="site-nav">Layout 9 - Simple
                              2</a></li>
                            <li><a href="home10-minimal.html" className="site-nav">Home 10 - Minimal</a>
                            </li>
                            <li><a href="home11-modern.html" className="site-nav">Layout 11 - Modern</a>
                            </li>
                            <li><a href="home12-category.html" className="site-nav">Layout 12 -
                              Category</a></li>
                            <li><a href="home13-dark.html" className="site-nav">Layout 13 - Dark</a>
                            </li>
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
                                      <li className="lvl-2"><a href="shop-listview-sidebar.html" className="site-nav">Sidebar Products List</a>
                                      </li>
                                      <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav">Sidebar Products Slider</a>
                                      </li>
                                      <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite
                                        Scroll</a></li>
                                      <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a>
                                      </li>
                                      <li className="lvl-2"><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a>
                                      </li>
                                      <li className="lvl-2"><a href="product-labels.html" className="site-nav">Product Labels</a></li>
                                      <li className="lvl-2"><a href="collection-3columns.html" className="site-nav last">Collection 3
                                        Columns</a></li>
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
                                      <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav">Pagination - Number</a>
                                      </li>
                                      <li className="lvl-2"><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
                                      <li className="lvl-2"><a href="collection-4columns.html" className="site-nav last">Collection 4
                                        Columns</a></li>
                                    </ul>
                                  </li>
                                  <li className="lvl-1 col-12 col-md-4 col-lg-4">
                                    <a href="#" className="site-nav lvl-1 menu-title">Shop Other
                                      Page</a>
                                    <ul className="subLinks">
                                      <li className="lvl-2"><a href="wishlist.html" className="site-nav">My Wishlist Page Style1</a>
                                      </li>
                                      <li className="lvl-2"><a href="wishlist-style2.html" className="site-nav">My Wishlist Page Style2</a>
                                      </li>
                                      <li className="lvl-2"><a href="compare.html" className="site-nav">Compare Page Style1</a>
                                      </li>
                                      <li className="lvl-2"><a href="compare-style2.html" className="site-nav last">Compare Page
                                        Style2</a></li>
                                      <li className="lvl-2"><a href="cart.html" className="site-nav">Cart Page Style1</a></li>
                                      <li className="lvl-2"><a href="cart-style2.html" className="site-nav">Cart Page Style2</a></li>
                                      <li className="lvl-2"><a href="checkout.html" className="site-nav">Checkout Page Style1</a>
                                      </li>
                                      <li className="lvl-2"><a href="checkout-style2.html" className="site-nav">Checkout Page Style2</a>
                                      </li>
                                      <li className="lvl-2"><a href="checkout-success.html" className="site-nav">Checkout Success</a></li>
                                      <li className="lvl-2"><a href="shop-search-results.html" className="site-nav">Search Results</a></li>
                                      <li className="lvl-2"><a href="collection-5columns.html" className="site-nav last">Collection 5
                                        Columns</a></li>
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
                                      <a href="product-layout1.html">J B Crepe multi Color
                                        Top</a>
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
                                  <li className="lvl-2"><a href="product-call-for-price.html" className="site-nav last">Product Call for Price</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="lvl-1 col-md-4 col-lg-4">
                                <a href="#" className="site-nav lvl-1 menu-title">Product Types</a>
                                <ul className="subLinks">
                                  <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
                                  <li className="lvl-2"><a href="product-layout1.html" className="site-nav">New Product</a></li>
                                  <li className="lvl-2"><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
                                  <li className="lvl-2"><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
                                  <li className="lvl-2"><a href="product-external-affiliate.html" className="site-nav">External / Affiliate Product</a>
                                  </li>
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
                                      <li><a href="login.html" className="site-nav">Login</a>
                                      </li>
                                      <li><a href="my-account.html" className="site-nav">My
                                        Account</a></li>
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
                                      <li><a href="cms-page.html" className="site-nav">CMS
                                        Page</a></li>
                                      <li><a href="empty-category.html" className="site-nav last">Empty category</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="lvl-1 col">
                                    <a href="#" className="site-nav lvl-1">Others Pages</a>
                                    <ul className="subLinks">
                                      <li><a href="contactus-style1.html" className="site-nav">Contact Us 01</a></li>
                                      <li><a href="contactus-style2.html" className="site-nav">Contact Us 02</a></li>
                                      <li><a href="faqs-style1.html" className="site-nav">FAQs
                                        01</a></li>
                                      <li><a href="faqs-style2.html" className="site-nav">FAQs
                                        02</a></li>
                                      <li><a href="empty-compare.html" className="site-nav last">Empty compare</a></li>
                                    </ul>
                                  </li>
                                  <li className="lvl-1 col">
                                    <a href="#" className="site-nav lvl-1">Others Pages</a>
                                    <ul className="subLinks">
                                      <li><a href="404.html" className="site-nav">404
                                        Error</a></li>
                                      <li><a href="size-guide.html" className="site-nav">Size
                                        Guide</a></li>
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
                                      <li><a href="empty-wishlist.html" className="site-nav last">Empty wishlist</a>
                                      </li>
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
                            <li><a href="lookbook-5columns.html" className="site-nav">5 Columns +
                              Fullwidth</a></li>
                            <li><a href="lookbook-shop.html" className="site-nav last">Lookbook Shop</a>
                            </li>
                          </ul>
                        </li>
                        <li className="lvl1 parent dropdown">
                          <a href="#">Blog <i className="an an-angle-down" /></a>
                          <ul className="dropdown">
                            <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a>
                            </li>
                            <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a>
                            </li>
                            <li><a href="blog-grid-view.html" className="site-nav">Grid View</a></li>
                            <li><a href="blog-list-view.html" className="site-nav">List View</a></li>
                            <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
                            <li><a href="blog-masonry.html" className="site-nav">Masonry</a></li>
                            <li><a href="blog-single-post.html" className="site-nav last">Single
                              Post</a></li>
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
                        <ul className="customer-links list-inline" style={{ "display": "none" }}>
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
                <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax Banner</a></li>
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
                    <li><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite Scroll</a>
                    </li>
                    <li><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
                    <li><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a>
                    </li>
                    <li><a href="product-labels.html" className="site-nav">Product Labels</a></li>
                    <li><a href="collection-3columns.html" className="site-nav last">Collection 3 Columns</a>
                    </li>
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
                    <li><a href="collection-4columns.html" className="site-nav last">Collection 4 Columns</a>
                    </li>
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
                    <li><a href="collection-5columns.html" className="site-nav last">Collection 5 Columns</a>
                    </li>
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
                    <li><a href="product-call-for-price.html" className="site-nav last">Product Call for
                      Price</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="site-nav">Product Types <i className="an an-plus" /></a>
                  <ul>
                    <li><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
                    <li><a href="product-layout1.html" className="site-nav">New Product</a></li>
                    <li><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
                    <li><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
                    <li><a href="product-external-affiliate.html" className="site-nav">External / Affiliate
                      Product</a></li>
                    <li><a href="product-layout1.html" className="site-nav">Variable Image</a></li>
                    <li><a href="product-layout3.html" className="site-nav">Variable Select</a></li>
                    <li><a href="product-360-degree-view.html" className="site-nav last">360 Degree view</a>
                    </li>
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
          {/* Home Banner slider */}
          <div className="slideshow slideshow-wrapper pb-section sliderFull">
            <div className="home-slideshow">
              <div className="slide slide1 d-block">
                <div className="slideimg blur-up lazyload bg-size">
                  <img className="blur-up lazyload bg-img" data-src="theme/assets/images/slideshow-banners/diva-banner1.jpg" src="theme/assets/images/slideshow-banners/diva-banner1.jpg" alt="Welcome to Diva New Fashion style" title="Welcome to Diva New Fashion style" />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content mt-0 text-shadow center">
                      <div className="container">
                        <div className="wrap-caption left">
                          <p className="mega-small-title">Welcome to</p>
                          <h2 className="h1 mega-title slideshow__title">Diva New Fashion style</h2>
                          <span className="mega-subtitle slideshow__subtitle">Made with love and
                            passion</span>
                          <a href="collection-3columns.html" className="btn btn--large">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide slide2 d-block">
                <div className="slideimg blur-up lazyload bg-size">
                  <img className="blur-up lazyload bg-img" data-src="theme/assets/images/slideshow-banners/diva-banner2.jpg" src="theme/assets/images/slideshow-banners/diva-banner2.jpg" alt="Happy Customers" title="Happy Customers" />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content mt-0 center">
                      <div className="container">
                        <div className="wrap-caption right">
                          <h2 className="h1 mega-title slideshow__title">Happy Customers</h2>
                          <span className="mega-subtitle slideshow__subtitle">Save up to 50% off this
                            weekend only</span>
                          <a href="collection-4columns.html" className="btn btn--large">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide slide3 d-block">
                <div className="slideimg blur-up lazyload bg-size">
                  <img className="blur-up lazyload bg-img" data-src="theme/assets/images/slideshow-banners/diva-banner3.jpg" src="theme/assets/images/slideshow-banners/diva-banner3.jpg" alt="Unique Styles" title="Unique Styles" />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content mt-0 text-shadow center">
                      <div className="container">
                        <div className="wrap-caption left">
                          <h2 className="h1 mega-title slideshow__title">Unique Styles</h2>
                          <span className="mega-subtitle slideshow__subtitle">We design and developed
                            theme that are amazingly Unique</span>
                          <a className="btn btn--large">Buy now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Home Banner slider */}
          {/* Collection Tab slider */}
          <div className="tab-slider-product section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="section-header text-center">
                    <h2 className="h2">best selling products</h2>
                    <p>Here you can set up to 8 tabs for your store collection.<br />This will look perfect
                      on all device.</p>
                  </div>
                  <div className="tabs-listing">
                    <ul className="tabs clearfix">
                      <li className="active" rel="women">Women</li>
                    </ul>
                    <div className="tab_container">
                      {/* Tab 1 */}
                      <div id="women" className="tab_content grid-products grid-products-hover-btn">
                        <div className="productSlider">
                          <div className="col-12 item">
                            {/* Product Image */}
                            <div className="product-image">
                              {/* product Image */}
                              <a href="product-layout1.html">
                                {/* Image */}
                                <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image1.jpg" src="theme/assets/images/product-images/product-image1.jpg" alt="image" title="product" />
                                {/* End Image */}
                                {/* Hover Image */}
                                <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image1-1.jpg" src="theme/assets/images/product-images/product-image1-1.jpg" alt="image" title="product" />
                                {/* End Hover Image */}
                                {/* Product Label */}
                                <div className="product-labels rectangular"><span className="lbl on-sale">-16%</span> <span className="lbl pr-label1">new</span></div>
                                {/* End Product Label */}
                              </a>
                              {/* End Product Image */}
                              {/* Countdown */}
                              <div className="saleTime desktop" data-countdown="2022/03/01" />
                              {/* End Countdown */}
                              {/* Product Button */}
                              <div className="button-set">
                                <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                                  <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                                </div>
                                <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                                  <form className="addtocart" action="#" method="post">
                                    <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                                  </form>
                                </div>
                                <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                                  <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                                </div>
                                <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                                  <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                                </div>
                              </div>
                              {/* End Product Button */}
                            </div>
                            {/* End Product Image */}
                            {/* Product Details */}
                            <div className="product-details text-center">
                              {/* Product Name */}
                              <div className="product-name">
                                <a href="product-layout1.html">Square Cardigan Casual Top</a>
                              </div>
                              {/* End Product Name */}
                              {/* Product Price */}
                              <div className="product-price">
                                <span className="old-price">$800.00</span>
                                <span className="price">$600.00</span>
                              </div>
                              {/* End Product Price */}
                              {/* Product Review */}
                              <div className="product-review">
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star-half-alt" />
                              </div>
                            </div>
                            {/* End Product Details */}
                          </div>
                        </div>
                      </div>
                      {/* End Tab 1 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Collection Tab slider */}
          {/* Custom Content */}
          <div className="section custom-content-section">
            <div className="container">
              <div className="row custom-content">
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-image">
                    <img className="custom-image blur-up ls-is-cached lazyloaded" data-src="theme/assets/images/collection/cool-tshirts.jpg" src="theme/assets/images/collection/cool-tshirts.jpg" alt="Cool T-shirts Closet" title="Cool T-shirts Closet" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-text text-md-left">
                    <h2 className="h3">Cool T-shirts Closet</h2>
                    <p>It’s time for a SS18 wardrobe update! We’ve got the<br /> latest arrivals and all the
                      hottest trends.<br /> Shop our newest clothing, footwear &amp; accessories.</p>
                    <a href="collection-3columns.html" className="btn border-btn-2">Discover More</a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-text text-md-left">
                    <h2 className="h3">All Fresh Picks</h2>
                    <p>Discover your new SS18 wardrobe favourites from<br /> our latest collection of
                      clothing, footwear &amp; accessories. <br />Treat yourself to some new staple pieces
                      to see you through<br /> the new season and beyond.</p>
                    <a href="collection-4columns.html" className="btn border-btn-2">Find Blouses Here</a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-image">
                    <img className="custom-image blur-up ls-is-cached lazyloaded" data-src="theme/assets/images/collection/fresh-picks.jpg" src="theme/assets/images/collection/fresh-picks.jpg" alt="All Fresh Picks" title="All Fresh Picks" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Custom Content */}
          {/* Collection Box slider */}
          <div className="collection-box section">
            <div className="container-fluid">
              <div className="collection-grid-4item">
                <div className="collection-grid-item">
                  <img data-src="theme/assets/images/collection/shoes.jpg" src="theme/assets/images/collection/shoes.jpg" alt="Shoes" className="blur-up lazyload" />
                  <a href="collection-3columns.html" className="collection-grid-item__title-wrapper">
                    <div className="title-wrapper">
                      <h3 className="collection-grid-item__title">Shoes</h3>
                      <span className="btn btn--secondary border-btn-1">Shop Shoes</span>
                    </div>
                  </a>
                </div>
                <div className="collection-grid-item">
                  <img data-src="theme/assets/images/collection/sunglasses.jpg" src="theme/assets/images/collection/sunglasses.jpg" alt="sunglasses" className="blur-up lazyload" />
                  <a href="collection-3columns.html" className="collection-grid-item__title-wrapper">
                    <div className="title-wrapper">
                      <h3 className="collection-grid-item__title">Sunglasses</h3>
                      <span className="btn btn--secondary border-btn-1">View Collection</span>
                    </div>
                  </a>
                </div>
                <div className="collection-grid-item">
                  <img data-src="theme/assets/images/collection/bags-accessories.jpg" src="theme/assets/images/collection/bags-accessories.jpg" alt="Shop Accessories" className="blur-up lazyload" />
                  <a href="collection-3columns.html" className="collection-grid-item__title-wrapper">
                    <div className="title-wrapper">
                      <h3 className="collection-grid-item__title">Bags &amp; Accessories</h3>
                      <span className="btn btn--secondary border-btn-1">Shop Accessories</span>
                    </div>
                  </a>
                </div>
                <div className="collection-grid-item">
                  <img data-src="theme/assets/images/collection/women-dress.jpg" src="theme/assets/images/collection/women-dress.jpg" alt="Women Dress" className="blur-up lazyload" />
                  <a href="collection-3columns.html" className="collection-grid-item__title-wrapper">
                    <div className="title-wrapper">
                      <h3 className="collection-grid-item__title">Women Dress</h3>
                      <span className="btn btn--secondary border-btn-1">Shop Dresses</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Collection Box slider */}
          {/* Store Feature */}
          <div className="store-feature section no-pb-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <ul className="display-table store-info">
                    <li className="display-table-cell">
                      <i className="icon an an-truck" />
                      <div className="store-info-text">
                        <h5>Free Worldwide Shipping</h5>
                        <span className="sub-text">Free shipping on all US orders</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-money-bill-alt" />
                      <div className="store-info-text">
                        <h5>Money Guarantee</h5>
                        <span className="sub-text">30 days money back guarantee</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-question-circle" />
                      <div className="store-info-text">
                        <h5>Top Notch Support</h5>
                        <span className="sub-text">We support online 24/7 on day</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-lock" />
                      <div className="store-info-text">
                        <h5>Secure Payments</h5>
                        <span className="sub-text">All payment are Secured and trusted.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Store Feature */}
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
                              <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Sign
                                Up</span></button>
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
                    <div className="footer-social w-100 text-start d-flex align-items-center">
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
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span>© 2021
                    DIVA.</span> All Rights Reserved.</div>
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
        {/* Addtocart Added Popup */}
        <div id="open-addtocart-popup" className="addtocart-popup magnific-popup mfp-hide">
          <div className="addtocart-inner text-center clearfix">
            <h4>Added to your shopping cart.</h4>
            <div className="pro-img">
              <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/addtocart-popup.jpg" data-src="theme/assets/images/product-images/addtocart-popup.jpg" alt="image" title="image" />
            </div>
            <div className="pro-details">
              <p className="pro-name mb-0">Floral Lined Jacket</p>
              <p className="pro-cz mb-0">Gray / XL</p>
              <p className="mb-0 qty-tol">1 X $113.88</p>
              <div className="addcart-total">
                Total: <b className="price">$113.88</b>
              </div>
              <div className="button-action">
                <button className="btn btn-secondary continue-shopping close-popup">Continue Shopping</button>
                <a href="cart.html" className="btn btn-primary view-cart">View Cart</a>
              </div>
            </div>
          </div>
        </div>
        {/* End Addtocart Added Popup */}
        {/* Quick View popup */}
        <div id="open-quickview-popup" className="quickview-popup magnific-popup mfp-hide">
          <div id="ProductSection-product-template" className="product-template__container prstyle1">
            <div className="product-singles">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="quickview-details mb-3 mb-md-0">
                    {/* Thumbnails Single */}
                    <div className="quickview-details-img quickview-thumbnails-single">
                      <div className="item">
                        <img src="theme/assets/images/product-images/product-quickview1.jpg" data-src="theme/assets/images/product-images/product-quickview1.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img src="theme/assets/images/product-images/product-quickview2.jpg" data-src="theme/assets/images/product-images/product-quickview2.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img src="theme/assets/images/product-images/product-quickview3.jpg" data-src="theme/assets/images/product-images/product-quickview3.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img src="theme/assets/images/product-images/product-quickview4.jpg" data-src="theme/assets/images/product-images/product-quickview4.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img src="theme/assets/images/product-images/product-quickview5.jpg" data-src="theme/assets/images/product-images/product-quickview5.jpg" alt="image" />
                      </div>
                    </div>
                    {/* End Thumbnails Single */}
                    {/* Thumbnail Lists */}
                    <div className="product-thumb-lists quickview-thumbnail-items">
                      <div className="item">
                        <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview1.jpg" data-src="theme/assets/images/product-images/product-quickview1.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview2.jpg" data-src="theme/assets/images/product-images/product-quickview2.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview3.jpg" data-src="theme/assets/images/product-images/product-quickview3.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview4.jpg" data-src="theme/assets/images/product-images/product-quickview4.jpg" alt="image" />
                      </div>
                      <div className="item">
                        <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview5.jpg" data-src="theme/assets/images/product-images/product-quickview5.jpg" alt="image" />
                      </div>
                    </div>
                    {/* End Thumbnail Lists */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-single__meta">
                    <h2 className="product-single__title">Product Quick View Popup</h2>
                    <div className="prInfoRow">
                      <div className="product-stock"> <span className="instock ">In Stock</span> <span className="outstock hide">Unavailable</span> </div>
                      <div className="product-sku">SKU: <span className="variant-sku">19115-rdxs</span></div>
                    </div>
                    <p className="product-single__price product-single__price-product-template">
                      <span className="visually-hidden">Regular price</span>
                      <s id="ComparePrice-product-template"><span className="money">$600.00</span></s>
                      <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                        <span id="ProductPrice-product-template"><span className="money">$500.00</span></span>
                      </span>
                    </p>
                    <div className="product-single__description rte">
                      Diva is a minimalist modern shopify theme that will give you and your customers a
                      smooth shopping experience which can be used for various kinds of stores such as
                      fashion,...
                    </div>
                    <form method="post" action="https://template.annimexweb.com/cart/add" id="product_form_1" acceptCharset="UTF-8" className="product-form product-form-product-template hidedropdown" encType="multipart/form-data">
                      <div className="swatch clearfix swatch-0 option1" data-option-index={0}>
                        <div className="product-form__item">
                          <label className="header">Size: <span className="slVariant">XS</span></label>
                          <div data-value="XS" className="swatch-element xs available" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">
                            <input className="swatchInput" id="swatch-1-xs" type="radio" name="option-1" defaultValue="XS" />
                            <label className="swatchLbl medium" htmlFor="swatch-1-xs">XS</label>
                          </div>
                          <div data-value="S" className="swatch-element s available" data-bs-toggle="tooltip" data-bs-placement="top" title="S">
                            <input className="swatchInput" id="swatch-1-s" type="radio" name="option-1" defaultValue="S" />
                            <label className="swatchLbl medium" htmlFor="swatch-1-s">S</label>
                          </div>
                          <div data-value="M" className="swatch-element m available" data-bs-toggle="tooltip" data-bs-placement="top" title="M">
                            <input className="swatchInput" id="swatch-1-m" type="radio" name="option-1" defaultValue="M" />
                            <label className="swatchLbl medium" htmlFor="swatch-1-m">M</label>
                          </div>
                          <div data-value="L" className="swatch-element l available" data-bs-toggle="tooltip" data-bs-placement="top" title="L">
                            <input className="swatchInput" id="swatch-1-l" type="radio" name="option-1" defaultValue="L" />
                            <label className="swatchLbl medium" htmlFor="swatch-1-l">L</label>
                          </div>
                        </div>
                      </div>
                      <div className="swatch clearfix swatch-1 option2" data-option-index={1}>
                        <div className="product-form__item">
                          <label className="header">Color: <span className="slVariant">Red</span></label>
                          <div data-value="Red" className="swatch-element color red available" data-bs-toggle="tooltip" data-bs-placement="top" title="Red">
                            <input className="swatchInput" id="swatch-0-red" type="radio" name="option-0" defaultValue="Red" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-red" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview1.jpg')" }} />
                          </div>
                          <div data-value="Blue" className="swatch-element color blue available" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue">
                            <input className="swatchInput" id="swatch-0-blue" type="radio" name="option-0" defaultValue="Blue" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-blue" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview2.jpg')" }} />
                          </div>
                          <div data-value="Green" className="swatch-element color green available" data-bs-toggle="tooltip" data-bs-placement="top" title="Green">
                            <input className="swatchInput" id="swatch-0-green" type="radio" name="option-0" defaultValue="Green" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-green" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview3.jpg')" }} />
                          </div>
                          <div data-value="Gray" className="swatch-element color gray available" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray">
                            <input className="swatchInput" id="swatch-0-gray" type="radio" name="option-0" defaultValue="Gray" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-gray" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview4.jpg')" }} />
                          </div>
                        </div>
                      </div>
                      {/* Product Action */}
                      <div className="product-action clearfix">
                        <div className="product-form__item--quantity">
                          <div className="wrapQtyBtn">
                            <div className="qtyField">
                              <a className="qtyBtn minus" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Minus"><i className="an an-minus" aria-hidden="true" /></a>
                              <input type="text" id="Quantity" name="quantity" defaultValue={1} className="product-form__input qty" />
                              <a className="qtyBtn plus" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Plus"><i className="an an-plus" aria-hidden="true" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="product-form__item--submit">
                          <button type="button" name="add" className="btn product-form__cart-submit">
                            <span>Add to cart</span>
                          </button>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><i className="icon an an-heart" aria-hidden="true" /></a>
                          </div>
                        </div>
                      </div>
                      {/* End Product Action */}
                    </form>
                    <div className="display-table shareRow">
                      <div className="display-table-cell">
                        <div className="social-sharing">
                          <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook">
                            <i className="an an-facebook" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Share</span>
                          </a>
                          <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter">
                            <i className="an an-twitter" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Tweet</span>
                          </a>
                          <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-google" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on google+">
                            <i className="an an-google-plus-g" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Google+</span>
                          </a>
                          <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest">
                            <i className="an an-pinterest-p" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Pin it</span>
                          </a>
                          <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email">
                            <i className="an an-envelope" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End-product-single*/}
            </div>
          </div>
        </div>
        {/* End Quick View Popup */}
        {/* Wishlist Added Popup */}
        <div id="open-wishlist-popup" className="wishlist-popup magnific-popup mfp-hide">
          <div className="wishlist-inner text-center clearfix">
            <h4>Successfully added in wishlist</h4>
            <div className="pro-img">
              <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/addwishlist-popup.jpg" data-src="theme/assets/images/product-images/addwishlist-popup.jpg" alt="image" title="image" />
            </div>
            <div className="pro-details">
              <p className="pro-name mb-2">Frayed Layered Sleeve</p>
              <div className="button-action">
                <button className="btn btn-secondary mb-2 continue-shopping close-popup">Continue Shopping</button>
                <a href="wishlist.html" className="btn btn-primary view-wishlist">View Wishlist</a>
              </div>
            </div>
          </div>
        </div>
        {/* End Wishlist Added Popup */}
        {/* Product Suggestion */}
        <div className="product-suggestion-content clearfix border-0 rounded-0 alert fade show" role="alert">
          <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"><i className="an an-times" aria-hidden="true" /></button>
          <div className="product-suggestion">
            <div className="suggestion-item">
              <div className="d-table suggestion-product">
                <div className="d-table-cell align-middle">
                  <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/product-suggestion1.jpg" data-src="theme/assets/images/product-images/product-suggestion1.jpg" alt="image" title="image" width={85} />
                </div>
                <div className="d-table-cell align-middle ps-3">
                  <span className="s-some d-block">Someone liked and Bought</span>
                  <a className="s-name d-block" href="product-layout1.html"><b>Fit &amp; Flare Trim Dress</b></a>
                  <span className="s-minutes d-block">26 minutes ago</span>
                  <span className="s-form d-block">From <b>New York, USA</b></span>
                </div>
              </div>
            </div>
            <div className="suggestion-item">
              <div className="d-table suggestion-product">
                <div className="d-table-cell align-middle">
                  <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/product-suggestion2.jpg" data-src="theme/assets/images/product-images/product-suggestion2.jpg" alt="image" title="image" width={85} />
                </div>
                <div className="d-table-cell align-middle ps-3">
                  <span className="s-some d-block">Someone liked and Bought</span>
                  <a className="s-name d-block" href="product-layout1.html"><b>Floral Lined Jacket</b></a>
                  <span className="s-minutes d-block">18 minutes ago</span>
                  <span className="s-form d-block">From <b>London</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Suggestion */}
        {/* Newsletter Popup */}
        <div className="newsletter-wrap" id="popup-container">
          <div id="popup-window">
            <a className="btn closepopup"><i className="icon icon an an-times" /></a>
            {/* Modal content*/}
            <div className="display-table splash-bg">
              <div className="display-table-cell width40"><img src="theme/assets/images/newsletter-img.jpg" alt="Join Our Mailing List" title="Join Our Mailing List" /></div>
              <div className="display-table-cell width60 text-center">
                <div className="newsletter-left">
                  <h1>Get Updates from Diva</h1>
                  <p>Be the first to know about our new arrivals, exclusive offers and the latest fashion
                    updates.</p>
                  <form action="#" method="post">
                    <div className="input-group">
                      <input type="email" className="input-group__field newsletter__input" name="EMAIL" defaultValue placeholder="Email address" required />
                      <span className="input-group__btn">
                        <button type="submit" className="btn newsletter__submit w-100" name="commit" id="subscribeBtn"> <span className="newsletter__submit-text--large">Sign
                          Up</span> </button>
                      </span>
                    </div>
                  </form>
                  <ul className="list--inline justify-content-center site-footer__social-icons social-icons">
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon an an-facebook" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon an an-twitter" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon an an-pinterest-p" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon an an-instagram" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube"><i className="icon an an-youtube" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newsletter Popup */}
      </div>
      {/* End Page Wrapper */}
    </div>

    <Outlet />
  </div>)
}
export default UserHome