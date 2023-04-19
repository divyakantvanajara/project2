import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserCheckout = () => {
    return (<div>
      <div className="pageWrapper">
      <UserHeader />
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
  <UserFooter />

</div>


  
    </div>)
}
export default UserCheckout