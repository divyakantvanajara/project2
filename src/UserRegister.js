import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserRegister = () => {
    return (<div>
    <div className="pageWrapper">
  {/* Promotion Bar */}
  <UserHeader/>
  {/* End Mobile Menu */}
  {/* Body Content */}
  <div id="page-content">
    {/* Page Title */}
    <div className="page section-header text-center mb-0">
      <div className="page-title">
        <div className="wrapper"><h1 className="page-width">Register</h1></div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Breadcrumbs */}
    <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
      <div className="container breadcrumbs">
        <a href="/" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Register</span>
      </div>
    </div>
    {/* End Breadcrumbs */}
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 box">	
          <div className="mb-4">
            <h3>Personal Information</h3>
            <form method="post" action="#" acceptCharset="UTF-8" className="customer-form">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="CustomerFirstName">First Name <span className="required">*</span></label>
                    <input id="CustomerFirstName" type="text" name="customer[first-name]" placeholder />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="CustomerLastName">Last Name <span className="required">*</span></label>
                    <input id="CustomerLastName" type="text" name="customer[Last-name]" placeholder />                        	
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="CustomerEmail">Email Address <span className="required">*</span></label>
                    <input id="CustomerEmail" type="email" name="customer[email]" placeholder />                        	
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="customCheckbox clearfix">
                    <input id="newsletter" name="newsletter" type="checkbox" />
                    <label htmlFor="newsletter">Sign Up for Newsletter</label>
                  </div>
                </div>
              </div>
              <h3 className="mt-3">Login Information</h3>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">                                	
                  <div className="form-group">
                    <label htmlFor="CustomerPassword">Password <span className="required">*</span></label>
                    <input id="CustomerPassword" type="password" name="customer[Password]" placeholder />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="CustomerConfirmPassword">Confirm Password <span className="required">*</span></label>
                    <input id="CustomerConfirmPassword" type="Password" name="customer[ConfirmPassword]" placeholder />                        	
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-left col-12 col-sm-12 col-md-6 col-lg-6">
                  <input type="submit" className="btn mb-3" defaultValue="Submit" />
                </div>
                <div className="text-right col-12 col-sm-12 col-md-6 col-lg-6">
                  <a href="/login"><i className="icon an an-angle-double-left me-1" />Back To Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Body Content */}
  {/* Footer */}
  <UserFooter />
  {/* End Minicart Drawer */}
</div>




      
    </div>)
}
export default UserRegister