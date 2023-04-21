import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserLogin = () => {
    return (<div>
        <div className="pageWrapper">
  <UserHeader/>
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
        <a href="/" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Login</span>
      </div>
    </div>
    {/* End Breadcrumbs */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 box mb-4 mb-md-0">
          <h3>New Customers</h3>
          <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
          <a href="/register" className="btn">Create an account</a>
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
                    <a href="/user_forgot_your_password">Forgot your password?</a> &nbsp; | &nbsp;
                    <a href="/register" id="customer_register_link">Create account</a>
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
<UserFooter />


</div>

     
    </div>)
}
export default UserLogin