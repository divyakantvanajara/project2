import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserCart = () => {
    return (<div>
      <div className="pageWrapper">
      <UserHeader />
  {/* Body Content */}
  <div id="page-content">
    {/* Page Title */}
    <div className="page section-header text-center">
      <div className="page-title">
        <div className="wrapper">
          <h1 className="page-title">Cart Page Style1</h1>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
          <div className="alert alert-success text-uppercase" role="alert">
            <i className="icon an an-truck icon-large" /> &nbsp;<strong>Congratulations!</strong> You've
            got free shipping!
          </div>
          <form action="#" method="post" className="cart style2">
            <table>
              <thead className="cart__row cart__header">
                <tr>
                  <th colSpan={2} className="text-center">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                  <th className="action">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cart__row border-bottom line1 cart-flex border-top">
                  <td className="cart__image-wrapper cart-flex-item">
                    <a href="product-layout1.html"><img className="cart__image blur-up lazyload" data-src="theme/assets/images/product-images/product-image16.jpg" src="theme/assets/images/product-images/product-image16.jpg" alt="Elastic Waist Dress - Navy / Small" /></a>
                  </td>
                  <td className="cart__meta small--text-left cart-flex-item">
                    <div className="list-view-item__title">
                      <a href="product-layout1.html">Elastic Waist Dress </a>
                    </div>
                    <div className="cart__meta-text">
                      Color: Navy<br />Size: Small<br />
                    </div>
                  </td>
                  <td className="cart__price-wrapper cart-flex-item text-center">
                    <span className="money">$735.00</span>
                  </td>
                  <td className="cart__update-wrapper cart-flex-item text-center">
                    <div className="cart__qty text-center">
                      <div className="qtyField">
                        <a className="qtyBtn minus" href="javascript:void(0);"><i className="icon an an-minus" /></a>
                        <input className="cart__qty-input qty" type="text" name="updates[]" defaultValue={1} pattern="[0-9]*" />
                        <a className="qtyBtn plus" href="javascript:void(0);"><i className="icon an an-plus" /></a>
                      </div>
                    </div>
                  </td>
                  <td className="small--hide cart-price text-center">
                    <span className="money">$735.00</span>
                  </td>
                  <td className="text-center small--hide"><a href="#" className="btn btn--secondary cart__remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove item"><i className="icon an an-times" /></a></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 cart-col">
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 cart-col">
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 cart__footer">
              <div className="solid-border">
                <div className="row border-bottom pb-2">
                  <span className="col-12 col-sm-6 cart__subtotal-title">Subtotal</span>
                  <span className="col-12 col-sm-6 text-right"><span className="money">$735.00</span></span>
                </div>
                <div className="row border-bottom pb-2 pt-2">
                  <span className="col-12 col-sm-6 cart__subtotal-title">Tax</span>
                  <span className="col-12 col-sm-6 text-right">$10.00</span>
                </div>
                <div className="row border-bottom pb-2 pt-2">
                  <span className="col-12 col-sm-6 cart__subtotal-title">Shipping</span>
                  <span className="col-12 col-sm-6 text-right">Free shipping</span>
                </div>
                <div className="row border-bottom pb-2 pt-2">
                  <span className="col-12 col-sm-6 cart__subtotal-title"><strong>Grand
                      Total</strong></span>
                  <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right"><span className="money">$1001.00</span></span>
                </div>
                <div className="cart__shipping">Shipping &amp; taxes calculated at checkout</div>
                <div className="customCheckbox cart_tearm">
                  <input type="checkbox" defaultValue="allen-vela" id="1532947863384-0" />
                  <label htmlFor="1532947863384-0">I agree with the terms and conditions</label>
                </div>
                <a href="/checkout" id="cartCheckout" className="btn btn--small-wide checkout">Proceed To Checkout</a>
                <div className="paymnet-img"><img src="theme/assets/images/payment-img.jpg" alt="Payment" />
                </div>
                <p className="mt-2"><a href="#">Checkout with Multiple Addresses</a></p>
              </div>
            </div>
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
export default UserCart