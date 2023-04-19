import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserProduct = () => {
  return (<div>
<div className="pageWrapper">
 <UserHeader />
  {/* Body Content */}
  <div id="page-content">
    {/* Bredcrumbs */}
    <div className="bredcrumbWrap bredcrumb-style2">
      <div className="container breadcrumbs">
        <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Product Layout1</span>
      </div>
    </div>
    {/* End Bredcrumbs */}
    <div className="container">
      {/* Main Content */}
      <div id="ProductSection-product-template" className="product-template__container prstyle2">
        {/* #ProductSection product template */}
        <div className="product-single product-single-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-details-img product-single__photos bottom">
                {/* Product Images */}
                <div className="zoompro-wrap product-zoom-right pl-20">
                  <div className="zoompro-span">
                    <img className="blur-up lazyload zoompro" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-1.jpg" alt src="theme/assets/images/product-detail-page/cape-dress-1.jpg" />               
                  </div>
                  <div className="product-labels"><span className="lbl pr-label1">new</span><span className="lbl on-sale">Exclusive</span></div>
                 
                </div>
                <div className="product-thumb product-thumb-1">
                  <div id="gallery" className="product-dec-slider-1 product-tab-left">
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-1.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-1.jpg" className="slick-slide slick-cloned active" data-slick-index={-4} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-1.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-2.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-2.jpg" className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-2.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-3.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-3.jpg" className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-3.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-4.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-4.jpg" className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-4.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-5.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-5.jpg" className="slick-slide slick-cloned" data-slick-index={0} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-5.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-6.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-6.jpg" className="slick-slide slick-cloned" data-slick-index={1} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-6.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-7.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-7.jpg" className="slick-slide slick-cloned" data-slick-index={2} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-7.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-8.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-8.jpg" className="slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-8.jpg" alt />
                    </a>
                  </div>
                </div>
                <div className="lightboximages">
                  <a href="theme/assets/images/product-detail-page/cape-dress-1.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-2.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-3.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-4.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-5.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-6.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-7.jpg" data-size="731x1024" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-8.jpg" data-size="731x1024" />
                </div>
                {/* End Product Images */}
                {/* Wishlist - Share */}
                <div className="display-table shareRow pt-3 pb-0 d-table">
                  <div className="display-table-cell text-center align-top">
                    <div className="social-sharing">
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook">
                        <i className="icon an an-facebook" aria-hidden="true" /><span className="share-title" aria-hidden="true">Facebook</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter">
                        <i className="icon an an-twitter" aria-hidden="true" /><span className="share-title" aria-hidden="true">Tweet</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-google" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on google+">
                        <i className="icon an an-google-plus" aria-hidden="true" /><span className="share-title" aria-hidden="true">Google+</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest">
                        <i className="icon an an-pinterest-p" aria-hidden="true" /><span className="share-title" aria-hidden="true">Pin it</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email">
                        <i className="icon an an-envelope" aria-hidden="true" /><span className="share-title" aria-hidden="true">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Wishlist - Share */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              {/* Product Info */}
              <div className="product-single__meta">
                <h1 className="product-single__title">Product Layout Style 1</h1>
                {/* Product Reviews */}
                <div className="prInfoRow d-flex flex-wrap">
                  <div className="product-review">
                    <a className="reviewLink d-flex flex-wrap align-items-center" href="#tab2">
                      <i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" />
                      <span className="spr-badge-caption">6 reviews</span>
                    </a>
                  </div>
                </div>
                {/* End Product Reviews */}
                {/* Product Price */}
                <div className="product-single__price product-single__price-product-template">
                  <span className="visually-hidden">Regular price</span>
                  <s id="ComparePrice-product-template"><span className="money">$900.00</span></s>
                  <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                    <span id="ProductPrice-product-template"><span className="money">$788.00</span></span>
                  </span>
                  <span className="discount-badge"> <span className="devider">|</span>&nbsp;
                    <span>You Save</span>
                    <span id="SaveAmount-product-template" className="product-single__save-amount">
                      <span className="money">$100.00</span>
                    </span>
                    <span className="off">(<span>16</span>%)</span>
                  </span>
                  <div className="product__policies rte" data-product-policies>Tax included.</div>
                </div>
                {/* End Product Price */}
                {/* Product orderMsg */}
                <div className="orderMsg mb-2 pb-1 d-flex flex-wrap align-items-center" data-user={17} data-time={16}>
                  <img src="theme/assets/images/order-icon.jpg" alt="order" />
                  <strong className="ms-1 me-1 items">16</strong> sold in last <strong className="ms-1 me-1 time">6</strong> hours
                </div>
                {/* End Product orderMsg */}
                {/* Product Description */}
                <div className="product-single__description rte">
                  <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <ul className="checkmark">
                    <li>Wash Care: Hand Wash Cold</li>
                    <li>Size And Fit: The specifications for the model are: Height 5 feet 8 inches, bust 34 inches, waist 28 inches. The model is wearing size S.</li>
                  </ul>
                </div>
                {/* End Product Description */}
                {/* Product Quantity */}
                <div id="quantity_message">Hurry! Only  <span className="items">15</span>  left in stock.</div>
                {/* End Product Quantity */}
                {/* Form */}
                <form method="post" action="https://template.annimexweb.com/cart/add" id="product_form_10508262282" acceptCharset="UTF-8" className="product-form product-form-product-template product-form-border hidedropdown" encType="multipart/form-data">
                  {/* Size Swatch */}
                  <div className="swatch clearfix swatch-1 option2 w-100" data-option-index={1}>
                    <div className="product-form__item">
                      <label>Size: <span className="slVariant">XL</span><a href="#sizechart" className="sizelink">Size Guide <i className="icon an an-question" /></a></label>
                      <div data-value="XL" className="swatch-element xl available">
                        <input className="swatchInput" id="swatch-1-xl-1" type="radio" name="option-1" defaultValue="XL" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-xl-1" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</label>
                      </div>
                      <div data-value="L" className="swatch-element l available">
                        <input className="swatchInput" id="swatch-1-l-1" type="radio" name="option-1" defaultValue="L" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-l-1" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</label>
                      </div>
                      <div data-value="M" className="swatch-element m available">
                        <input className="swatchInput" id="swatch-1-m-1" type="radio" name="option-1" defaultValue="M" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-m-1" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</label>
                      </div>
                      <div data-value="S" className="swatch-element s available">
                        <input className="swatchInput" id="swatch-1-s-1" type="radio" name="option-1" defaultValue="S" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-s-1" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</label>
                      </div>
                      <div data-value="XS" className="swatch-element xs available">
                        <input className="swatchInput" id="swatch-1-xs-1" type="radio" name="option-1" defaultValue="XS" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-xs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</label>
                      </div>
                    </div>
                  </div>
                  {/* End Size Swatch */}
                  {/* Image Swatch */}
                  <div className="swatch clearfix swatch-0 option1 w-100" data-option-index={0}>
                    <div className="product-form__item">
                      <label>Color: <span className="slVariant">Blue</span></label>
                      <div data-value="Red" className="swatch-element color red available">
                        <input className="swatchInput" id="swatch-0-red1" type="radio" name="option-0" defaultValue="Red" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-red1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-1.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Red" />
                      </div>
                      <div data-value="Blue" className="swatch-element color blue available">
                        <input className="swatchInput" id="swatch-0-blue1" type="radio" name="option-0" defaultValue="Blue" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-blue1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-2.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" />
                      </div>
                      <div data-value="Green" className="swatch-element color green available">
                        <input className="swatchInput" id="swatch-0-green1" type="radio" name="option-0" defaultValue="Green" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-green1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-3.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Green" />
                      </div>
                      <div data-value="Gray" className="swatch-element color gray available">
                        <input className="swatchInput" id="swatch-0-gray1" type="radio" name="option-0" defaultValue="Gray" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-gray1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-4.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Gray" />
                      </div>
                      <div data-value="Orange" className="swatch-element color orange available">
                        <input className="swatchInput" id="swatch-0-orange1" type="radio" name="option-0" defaultValue="Orange" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-orange1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-5.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Orange" />
                      </div>
                    </div>
                  </div>
                  {/* End Image Swatch */}
                  {/* Product Action */}
                  <div className="product-action clearfix">
                    <div className="product-form__item--quantity">
                      <div className="wrapQtyBtn">
                        <div className="qtyField">
                          <a className="qtyBtn minus" href="javascript:void(0);"><i className="icon an an-minus" aria-hidden="true" /></a>
                          <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                          <a className="qtyBtn plus" href="javascript:void(0);"><i className="icon an an-plus" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>                                
                    <div className="product-form__item--submit">
                    <a href="/cart" className="btn btn-primary btn product-form__cart-submit">Add to cart</a>
                    
                    </div>
                    
                  </div>
                  {/* End Product Action */}
                  {/* Wishlist - Compare */}
                  <div className="infolinks d-flex flex-wrap align-items-center px-0 mb-0">
                    <a className="wishlist add-to-wishlist d-flex align-items-center" href="wishlist.html"><i className="icon an an-heart me-1" /> <span>Add to Wishlist</span></a>
                    <a className="wishlist add-to-wishlist d-flex align-items-center" href="compare.html"><i className="icon an an-sync me-1" /> <span>Add to Compare</span></a>
                    <a className="wishlist emaillink d-flex align-items-center" href="#productInquiry"><i className="icon an an-envelope me-1" style={{"margin-top":"-1px"}} /> <span>Enquiry</span></a>
                    <a className="wishlist shippingInfo d-flex align-items-center" href="#ShippingInfo"><i className="icon an an-telegram-plane me-1" /> <span>Delivery &amp; Returns</span></a>
                  </div>
                  {/* End Wishlist - Compare */}
                </form>
                {/* End Form */}
                {/* Product Feature */}
                <div className="safecheckout row my-3">
                  <div className="item col-lg-3 mb-1 mb-sm-0">
                    <div className="icon"><i className="icon an an-truck" /></div>
                    <div className="content">Free &amp; fast shipping</div>
                  </div>
                  <div className="item col-lg-3 mb-1 mb-sm-0">
                    <div className="icon"><i className="icon an an-certificate" /></div>
                    <div className="content">Secure checkout</div>
                  </div>
                  <div className="item col-lg-3">
                    <div className="icon"><i className="icon an an-thumbs-up" /></div>
                    <div className="content">Satisfaction guarantee</div>
                  </div>
                  <div className="item col-lg-3">
                    <div className="icon"><i className="icon an an-lock" /></div>
                    <div className="content">Privacy protected</div>
                  </div>
                </div>
                {/* End Product Feature */}
                <div id="freeShipMsg" className="freeShipMsg rte mb-1" data-price={199}><i className="icon an an-truck" aria-hidden="true" /> GETTING CLOSER! ONLY <b className="freeShip"><span className="money" data-currency-usd="$199.00" data-currency="USD">$199.00</span></b> AWAY FROM <b>FREE SHIPPING!</b></div>
                <div className="shippingMsg rte mb-1"><i className="icon an an-clock-o an-2x" aria-hidden="true" /> ESTIMATED DELIVERY BETWEEN <b id="fromDate">Wed. May 1</b> and <b id="toDate">Tue. May 7</b>.</div>
                <div className="userViewMsg rte" data-user={20} data-time={5000}><i className="icon an an-users" aria-hidden="true" /> <strong className="uersView">25</strong> People are looking at this product right now</div>
                {/* Product Intro */}
                <div className="product-info">
                  <p className="product-stock">Availability: <span className="instock">In Stock</span><span className="outstock hide">Unavailable</span></p> 
                  <p className="product-type">Product Type: <span>unique</span></p>  
                  <p className="product-type">Vendor: <span>Sibel Saral</span></p>  
                  <p className="product-sku">SKU: <span className="variant-sku">3435DT-1</span></p>
                </div>
                {/* End Product Intro */}
              </div>
              {/* End Product Info */}
            </div>
          </div>
          {/* End Product single */}
          {/* Product Tabs */}
          <div className="tabs-listing tab-details mt-0 mt-md-4">
            {/* Tabs */}
            <ul className="product-tabs d-none d-md-block">
              <li className="active" rel="tab1"><a className="tablink">Product Details</a></li>
              <li rel="tab2"><a className="tablink">Product Reviews</a></li>
              <li rel="tab3"><a className="tablink">Size Chart</a></li>
              <li rel="tab4"><a className="tablink">Shipping &amp; Returns</a></li>
            </ul>
            {/* End Tabs */}
            {/* Tabs Container */}
            <div className="tab-container pb-0 mb-0">
              {/* Tabs Content One */}
              <h3 className="acor-ttl active d-block d-md-none" rel="tab1">Product Details</h3>
              <div id="tab1" className="tab-content py-3 py-md-0" style={{"display":"block"}}>
                <div className="product-description rte">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <ul className="checkmark my-0">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                    <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                    <li>Lorem Ipsum is not simply random text.</li>
                    <li>Morbi malesuada lacus sed metus luctus pulvinar quis at odio.</li>
                  </ul>
                  <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
                  <p>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                  <div className="rte__table-wrapper">
                    <div className="table-responsive">
                      <table>
                        <tbody>
                          <tr>
                            <td><strong>Shoulder (cm):</strong></td>
                            <td>XS: 35.5 cm, S: 36.5 cm, M: 37.5 cm, L: 38.5 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Bust (cm):</strong></td>
                            <td>XS: 87 cm, S: 91 cm, M: 95 cm, L: 99 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Sleeve Length (cm):</strong></td>
                            <td>XS: 13.5 cm, S: 14.5 cm, M: 15.5 cm, L: 16.5 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Length (cm):</strong></td>
                            <td>XS: 59 cm, S: 60 cm, M: 61 cm, L: 62 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Size Available:</strong></td>
                            <td>XS, S, M, L</td>
                          </tr>
                          <tr>
                            <td><strong>Fabric:</strong></td>
                            <td>Fabric has some stretch</td>
                          </tr>
                          <tr>
                            <td><strong>Season:</strong></td>
                            <td>Summer</td>
                          </tr>
                          <tr>
                            <td><strong>Cuff (cm):</strong></td>
                            <td>XS: 28.5 cm, S: 29.5 cm, M: 30.5 cm, L: 31.5 cm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h5 className="mt-4 mb-2" style={{"font-weight":"600"}}>Features:</h5>
                  <ul className="checkmark">
                    <li>high quality fabric, very comfortable to touch and wear. light weight and perfect forlayering</li>
                    <li>This cardigan sweater is cute for no reason,perfect for travel and casual. with dress or t-shirt inside,Perfect match</li>
                    <li>It can tie in front-is forgiving to you belly or tie behind like Bow, you can tie different ways</li>
                    <li>Pictures may slightly vary from actual item due to lighting and monitor.</li>
                  </ul>
                  <h5 className="mt-4 mb-2" style={{"font-weight":"600"}}>Notes:</h5>
                  <p>Return or exchange within 30 days from the delivered date.</p>
                </div>
              </div>
              {/* End Tabs Content One */}
              {/* Tabs Content Two */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab2">Product Reviews</h3>
              <div id="tab2" className="tab-content py-3 py-md-0">
                <div id="shopify-product-reviews">
                  <div className="spr-container">
                    <div className="spr-header clearfix">
                      <div className="spr-summary text-center d-flex justify-content-start justify-content-sm-between flex-column flex-sm-row">
                        <span className="product-review justify-content-center"><a className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></a><span className="spr-summary-actions-togglereviews ms-2">Based on 6 reviews 456</span></span>
                        <span className="spr-summary-actions mt-3 mt-sm-0">
                          <a href="#" className="spr-summary-actions-newreview write-review-btn btn"><i className="an-1x an an-pencil-alt me-1" /> Write a review</a>
                        </span>
                      </div>
                    </div>
                    <div className="spr-content">
                      <div className="product-review-form spr-form clearfix" style={{"display":"none"}}>
                        <form method="post" action="#" id="new-review-form" className="new-review-form">
                          <h3 className="spr-form-title">Write a review</h3>
                          <fieldset className="spr-form-contact">
                            <div className="spr-form-contact-name">
                              <label className="spr-form-label" htmlFor="review_author_10508262282">Name</label>
                              <input className="spr-form-input spr-form-input-text" id="review_author_10508262282" type="text" name="review[author]" defaultValue placeholder="Enter your name" />
                            </div>
                            <div className="spr-form-contact-email">
                              <label className="spr-form-label" htmlFor="review_email_10508262282">Email</label>
                              <input className="spr-form-input spr-form-input-email " id="review_email_10508262282" type="email" name="review[email]" defaultValue placeholder="john.smith@example.com" />
                            </div>
                          </fieldset>
                          <fieldset className="spr-form-review">
                            <div className="spr-form-review-rating">
                              <label className="spr-form-label">Rating</label>
                              <div className="spr-form-input spr-starrating">
                                <div className="product-review justify-content-start">
                                  <a className="reviewLink" href="#"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></a>
                                </div>
                              </div>
                            </div>
                            <div className="spr-form-review-title">
                              <label className="spr-form-label" htmlFor="review_title_10508262282">Review Title</label>
                              <input className="spr-form-input spr-form-input-text" id="review_title_10508262282" type="text" name="review[title]" defaultValue placeholder="Give your review a title" />
                            </div>
                            <div className="spr-form-review-body">
                              <label className="spr-form-label" htmlFor="review_body_10508262282">Body of Review <span className="spr-form-review-body-charactersremaining">(1500)</span></label>
                              <div className="spr-form-input">
                                <textarea className="spr-form-input spr-form-input-textarea" id="review_body_10508262282" data-product-id={10508262282} name="review[body]" rows={5} placeholder="Write your comments here" defaultValue={""} />
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="spr-form-actions">
                            <input type="submit" className="spr-button spr-button-primary button button-primary btn btn-primary" defaultValue="Submit Review" />
                          </fieldset>
                        </form>
                      </div>
                      <div className="spr-reviews">
                        <div className="spr-review">
                          <div className="spr-review-header">
                            <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /></span></span>
                            <h3 className="spr-review-header-title">Lorem ipsum dolor sit amet</h3>
                            <span className="spr-review-header-byline"><strong>dsacc</strong> on <strong>Apr 09, 2019</strong></span>
                          </div>
                          <div className="spr-review-content">
                            <p className="spr-review-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div className="spr-review">
                          <div className="spr-review-header">
                            <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></span></span>
                            <h3 className="spr-review-header-title">Lorem Ipsum is simply dummy text of the printing</h3>
                            <span className="spr-review-header-byline"><strong>larrydude</strong> on <strong>Dec 30, 2018</strong></span>
                          </div>
                          <div className="spr-review-content">
                            <p className="spr-review-content-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Tabs Content Two */}
              {/* Tabs Content Three */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab3">Size Chart</h3>
              <div id="tab3" className="tab-content py-3 py-md-0">
                <div className="product-description rte">
                  <h4>WOMEN'S BODY SIZING CHART</h4>
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>31" - 33"</td>
                          <td>33" - 35"</td>
                          <td>35" - 37"</td>
                          <td>37" - 39"</td>
                          <td>39" - 42"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>24" - 26"</td>
                          <td>26" - 28"</td>
                          <td>28" - 30"</td>
                          <td>30" - 32"</td>
                          <td>32" - 35"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>34" - 36"</td>
                          <td>36" - 38"</td>
                          <td>38" - 40"</td>
                          <td>40" - 42"</td>
                          <td>42" - 44"</td>
                        </tr>
                        <tr>
                          <td>Regular inseam</td>
                          <td>30"</td>
                          <td>30½"</td>
                          <td>31"</td>
                          <td>31½"</td>
                          <td>32"</td>
                        </tr>
                        <tr>
                          <td>Long (Tall) Inseam</td>
                          <td>31½"</td>
                          <td>32"</td>
                          <td>32½"</td>
                          <td>33"</td>
                          <td>33½"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="mt-0 pt-1">MEN'S BODY SIZING CHART</h4>
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                          <th>XXL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>27" - 30"</td>
                          <td>30" - 33"</td>
                          <td>33" - 35"</td>
                          <td>36" - 38"</td>
                          <td>38" - 42"</td>
                          <td>42" - 45"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center mt-3">
                    <img src="theme/assets/images/size.jpg" alt />
                  </div>
                </div>
              </div>
              {/* End Tabs Content Three */}
              {/* Tabs Content Four */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab4">Shipping &amp; Returns</h3>
              <div id="tab4" className="tab-content py-3 py-md-0">
                <h4>Returns Policy</h4>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
                <h4>Shipping</h4>
                <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus.  Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
              </div>
              {/* End Tabs Content Four */}
            </div>
            {/* End Tabs Container */}
          </div>
          {/* End Product Tabs */}
         
          
        </div>
        {/* #ProductSection product template */}
      </div>
      {/* End Main Content */}
    </div>                
  </div>
  {/* End Body Content */}
  <UserFooter />


</div>
 
  </div>)
}
export default UserProduct