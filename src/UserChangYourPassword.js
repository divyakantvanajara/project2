import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserChangYourPassword = () => {
  return (<div>
    <div className="pageWrapper">
      <UserHeader />
      {/* Body Content */}
      <div id="page-content">
        {/* Page Title */}
        <div className="page section-header text-center mb-0">
          <div className="page-title">
            <div className="wrapper"><h1 className="page-width">Change Your Password</h1></div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Breadcrumbs */}
        <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
          <div className="container breadcrumbs">
            <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Change Your Password</span>
          </div>
        </div>
        {/* End Breadcrumbs */}
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 box offset-md-3">
              <div className="mb-4">
                <form method="post" action="#" acceptCharset="UTF-8" className="customer-form">
                  <h3>Change your password here</h3>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerPassword">Current Password <span className="required">*</span></label>
                        <input type="password" name="customer[password]" placeholder id="password" autofocus />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerNewPassword">New Password  <span className="required">*</span></label>
                        <input type="passwordl" name="customer[password]" placeholder id="password" autofocus />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerConfirmPassword">Confirm Password <span className="required">*</span></label>
                        <input type="password" name="customer[password ]" placeholder id="password" autofocus />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                      <input type="submit" className="btn mb-3" defaultValue="Submit" />
                      <p className="mb-4">
                        <a href="login.html">« Back To Login Page</a>
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
      < UserFooter />
    </div>





  </div>)
}
export default UserChangYourPassword