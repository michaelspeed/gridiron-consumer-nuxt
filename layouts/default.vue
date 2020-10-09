<template>
  <div>
    <div class="pushmenu menu-home5">
      <div class="menu-push">
        <span class="close-left js-close"><i class="icon-close f-20"></i></span>
        <div class="clearfix"></div>
        <form role="search" method="get" id="searchform" class="searchform" action="/search">
          <div>
            <label class="screen-reader-text" for="q"></label>
            <input type="text" placeholder="Search for products" value="" name="q" id="q" autocomplete="off">
            <input type="hidden" name="type" value="product">
            <button type="submit" id="searchsubmit"><i class="ion-ios-search-strong"></i></button>
          </div>
        </form>
        <ul class="nav-home5 js-menubar">
          <li class="level1 active dropdown"><a href="#">Home</a>
            <span class="icon-sub-menu"></span>
            <ul class="menu-level1 js-open-menu">
              <li class="level2"><a href="home1.html" title="">Demo 1</a></li>
              <li class="level2"><a href="home2.html" title="">Demo 2</a></li>
              <li class="level2"><a href="home3.html" title="">Demo 3</a></li>
              <li class="level2"><a href="home4.html" title="">Demo 4</a></li>
              <li class="level2"><a href="home5.html" title="">Demo 5</a></li>
              <li class="level2"><a href="#" title="">Demo 6</a></li>
            </ul>
          </li>
          <li class="level1 active dropdown"><a href="#">Shop</a>
            <span class="icon-sub-menu"></span>
            <div class="menu-level1 js-open-menu">
              <ul class="level1">
                <li class="level2">
                  <a href="#">Shop Layout</a>
                  <ul class="menu-level-2">
                    <li class="level3"><a href="shop_full.html" title="">shop Full Width</a></li>
                    <li class="level3"><a href="shopgrid_v1.html" title="">Shop Grid v.1</a></li>
                    <li class="level3"><a href="shopgrid_v2.html" title="">Shop Grid v.2</a></li>
                    <li class="level3"><a href="shoplist.html" title="">Shop List</a></li>
                    <li class="level3"><a href="shopleft_sidebar.html" title="">Shop Left Sidebar</a></li>
                    <li class="level3"><a href="shopright_sidebar.html" title="">Shop Right Sidebar</a></li>
                  </ul>
                </li>
                <li class="level2">
                  <a href="#">Categories</a>
                  <ul class="menu-level-2">
                    <li class="level3"><a href="cat_fullwidth.html" title="">Categories Full Width</a></li>
                    <li class="level3"><a href="cat_left_sidebar.html" title="">Categories Left Sidebar</a></li>
                    <li class="level3"><a href="cat_right_sidebar.html" title="">Categories Right Sidebar</a></li>
                  </ul>
                </li>
                <li class="level2">
                  <a href="#">Single Product Type</a>
                  <ul class="menu-level-2">
                    <li class="level3"><a href="bundle.html" title="">Bundle</a></li>
                    <li class="level3"><a href="pin_product.html" title="">Pin Product</a></li>
                    <li class="level3"><a href="360degree.html" title="">360 Degree</a></li>
                    <li class="level3"><a href="feature_video.html" title="">Featued video</a></li>
                    <li class="level3"><a href="simple.html">Simple</a></li>
                    <li class="level3"><a href="variable.html">Variable</a></li>
                    <li class="level3"><a href="affilate.html">External / Affiliate</a></li>
                    <li class="level3"><a href="grouped.html">Grouped</a></li>
                    <li class="level3"><a href="outofstock.html">Out of stock</a></li>
                    <li class="level3"><a href="onsale.html">On sale</a></li>
                  </ul>
                </li>
                <li class="level2">
                  <a href="#">Single Product Layout</a>
                  <ul class="menu-level-2">
                    <li class="level3"><a href="product_extended.html" title="">Product Extended</a></li>
                    <li class="level3"><a href="product_sidebar.html" title="">Product Left Sidebar</a></li>
                    <li class="level3"><a href="product_right_sidebar.html" title="">Product Right Sideba</a></li>
                  </ul>
                </li>
                <li class="level2">
                  <a href="#">Other Pages</a>
                  <ul class="menu-level-2">
                    <li class="level3"><a href="shop_full.html" title="">Shop</a></li>
                    <li class="level3"><a href="cart.html" title="">Cart</a></li>
                    <li class="level3"><a href="wishlist.html" title="">My Wishlist</a></li>
                    <li class="level3"><a href="checkout.html" title="">Checkout</a></li>
                    <li class="level3"><a href="myaccount.html" title="">My Account</a></li>
                    <li class="level3"><a href="track.html" title="">Track Your Order</a></li>
                    <li class="level3"><a href="quickview.html" title="">Quick View</a></li>
                  </ul>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </li>
          <li class="level1 active dropdown"><a href="#">Mega Menu</a></li>
          <li class="level1">
            <a href="#">Pages</a>
            <span class="icon-sub-menu"></span>
            <ul class="menu-level1 js-open-menu">
              <li class="level2"><a href="aboutus.html" title="About Us ">About Us </a></li>
              <li class="level2"><a href="contactus.html" title="Contact">Contact</a></li>
              <li class="level2"><a href="faq.html" title="FAQs">FAQs</a></li>
              <li class="level2"><a href="404.html" title="404">404</a></li>
              <li class="level2"><a href="commingsoon.html" title="Coming Soon">Coming Soon</a></li>
            </ul>
          </li>
          <li class="level1">
            <a href="#">Blog</a>
            <span class="icon-sub-menu"></span>
            <ul class="menu-level1 js-open-menu">
              <li class="level2"><a href="blog-standar.html" title="Blog Standar">Blog Standar</a></li>
              <li class="level2"><a href="blog_grid.html" title="Blog Gird">Blog Gird</a></li>
              <li class="level2"><a href="blog-standar.html" title="Blog Sidebar">Blog Sidebar</a></li>
              <li class="level2"><a href="blog-single-post.html" title="Blog Single Post">Blog Single Post</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="h3-bg">
      <div class="wrappage v2">
        <header id="header" class="header-v3 bg-w">
          <top-bar/>
          <div class="header-bottom hidden-xs hidden-sm">
            <div class="container container-240">
              <div class="row">
                <div class="col-lg-3 widget-verticalmenu">
                  <div class="navbar-vertical">
                    <button class="navbar-toggles"><span>All Departments</span></button>
                  </div>
                  <div class="vertical-wrapper">
                    <ul class="vertical-group">
                      <li class="vertical-item level1 mega-parent"><a href="#">New Arrivals</a></li>
                      <li class="vertical-item level1 mega-parent"><a href="#">Top 100 Best Seller <span class="h-ribbon e-red mg-l10">Hot</span></a></li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">TV & Video</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 tvbg pd2 style1">
                          <ul class="level1">
                            <li class="level2 col-md-5">
                              <a href="#">TVs by Type</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">4K Ultra HD</a></li>
                                <li class="level3"><a href="#" title="">Smart TVs</a></li>
                                <li class="level3"><a href="#" title="">LED & LCD TVs & amplifiers</a></li>
                                <li class="level3"><a href="#" title="">OLED TVs</a></li>
                                <li class="level3"><a href="#" title="">QLED/Quantum Dot TVs  </a></li>
                              </ul>
                              <a href="#">Blu-ray & DVD Players</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">4K Blu-ray Players</a></li>
                                <li class="level3"><a href="#" title="">Streaming Blu-ray Players</a></li>
                                <li class="level3"><a href="#" title="">3D Blu-ray Players</a></li>
                                <li class="level3"><a href="#" title="">Portable Blu-ray Players</a></li>
                                <li class="level3"><a href="#" title="">DVD Recorders</a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-7">
                              <a href="# ">Home Audio</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Home Theater Systems</a></li>
                                <li class="level3"><a href="#" title="">Soundbars</a></li>
                                <li class="level3"><a href="#" title="">Speakers</a></li>
                                <li class="level3"><a href="#" title="">Receivers & Amplifiers</a></li>
                                <li class="level3"><a href="#" title="">Premium Audio</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Home Audi & Theater</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 homebg pd2 style1">
                          <ul class="level1">
                            <li class="level2 col-md-4">
                              <a href="#">Home theater</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Sound bars</a></li>
                                <li class="level3"><a href="#" title="">Speakers</a></li>
                                <li class="level3"><a href="#" title="">Receivers & amplifiers</a></li>
                                <li class="level3"><a href="#" title="">Equalizers</a></li>
                                <li class="level3"><a href="#" title="">Phono preamps  </a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-4">
                              <a href="# ">Speakers</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Bluetooth speakers</a></li>
                                <li class="level3"><a href="#" title="">Ceiling & in-wall speakers</a></li>
                                <li class="level3"><a href="#" title="">Digital music systems</a></li>
                                <li class="level3"><a href="#" title="">Outdoor</a></li>
                                <li class="level3"><a href="#" title="">Satellite speakers</a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-4">
                              <a href="#">Accessories</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Receivers & amplifiers</a></li>
                                <li class="level3"><a href="#" title="">Cd & tape players</a></li>
                                <li class="level3"><a href="#" title="">Tuners</a></li>
                                <li class="level3"><a href="#" title="">Curntables</a></li>
                                <li class="level3"><a href="#" title="">Receivers & adapters</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Camera, Photo & Video</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu">
                          <ul class="vertical-menu1">
                            <li><a href="#">Car Audio</a></li>
                            <li><a href="#">Radar Detectors</a></li>
                            <li><a href="#">Car Safety & Security</a></li>
                            <li><a href="#">Car Video</a></li>
                            <li><a href="#">Two-Way Radios</a></li>
                            <li><a href="#">CB Radios & Scanners</a></li>
                            <li><a href="#">In-Dash Mounting Kits</a></li>
                            <li><a href="#">Installation Accessories.</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Cell Phones & Accessories</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 phonebg pd2 style1">
                          <ul class="level1">
                            <li class="level2 col-md-4">
                              <a href="#">Cell Phones</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Samsung Galaxy S8</a></li>
                                <li class="level3"><a href="#" title="">iPhone 7/7 Plus</a></li>
                                <li class="level3"><a href="#" title="">iPhone 6</a></li>
                                <li class="level3"><a href="#" title="">Samsung Galaxy S7</a></li>
                                <li class="level3"><a href="#" title="">Unlocked Phones</a></li>
                              </ul>
                              <a href="#">Cases</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">4Armbands</a></li>
                                <li class="level3"><a href="#" title="">Armbands</a></li>
                                <li class="level3"><a href="#" title="">Cases</a></li>
                                <li class="level3"><a href="#" title="">Flip Cases</a></li>
                                <li class="level3"><a href="#" title="">Holsters & Clips</a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-8">
                              <a href="# ">Accessories</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Batteries</a></li>
                                <li class="level3"><a href="#" title="">Bluetooth Headsets</a></li>
                                <li class="level3"><a href="#" title="">Bluetooth Speakers</a></li>
                                <li class="level3"><a href="#" title="">Car Accessories</a></li>
                                <li class="level3"><a href="#" title="">Chargers</a></li>
                              </ul>
                              <a href="# ">Connected Devices</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Tablets</a></li>
                                <li class="level3"><a href="#" title="">Mobile Hotspots</a></li>
                                <li class="level3"><a href="#" title="">Smart Watches</a></li>
                                <li class="level3"><a href="#" title="">Wearable Technology</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Headphones</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 headphonebg pd3 style1">
                          <ul class="level1">
                            <li class="level2 col-md-6">
                              <a href="#">Headphones</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">In-Ear & Earbud</a></li>
                                <li class="level3"><a href="#" title="">On-Ear</a></li>
                                <li class="level3"><a href="#" title="">Over-Ear</a></li>
                                <li class="level3"><a href="#" title="">Wireless</a></li>
                                <li class="level3"><a href="#" title="">Sports & Fitness</a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-6">
                              <a href="# ">Speaker System</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Complete Systems</a></li>
                                <li class="level3"><a href="#" title="">Sound Bars</a></li>
                                <li class="level3"><a href="#" title="">Surround Sound</a></li>
                                <li class="level3"><a href="#" title="">Receivers & Amplifiers</a></li>
                                <li class="level3"><a href="#" title="">Equalizers</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Car Electronics</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu">
                          <ul class="vertical-menu1">
                            <li><a href="#">Car Audio</a></li>
                            <li><a href="#">Radar Detectors</a></li>
                            <li><a href="#">Car Safety & Security</a></li>
                            <li><a href="#">Car Video</a></li>
                            <li><a href="#">Two-Way Radios</a></li>
                            <li><a href="#">CB Radios & Scanners</a></li>
                            <li><a href="#">In-Dash Mounting Kits</a></li>
                            <li><a href="#">Installation Accessories.</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Electronics Showcase</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu">
                          <ul class="vertical-menu1">
                            <li><a href="#">Car Audio</a></li>
                            <li><a href="#">Radar Detectors</a></li>
                            <li><a href="#">Car Safety & Security</a></li>
                            <li><a href="#">Car Video</a></li>
                            <li><a href="#">Two-Way Radios</a></li>
                            <li><a href="#">CB Radios & Scanners</a></li>
                            <li><a href="#">In-Dash Mounting Kits</a></li>
                            <li><a href="#">Installation Accessories.</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Headphones</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 headphonebg pd3 style1">
                          <ul class="level1">
                            <li class="level2 col-md-6">
                              <a href="#">Headphones</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">In-Ear & Earbud</a></li>
                                <li class="level3"><a href="#" title="">On-Ear</a></li>
                                <li class="level3"><a href="#" title="">Over-Ear</a></li>
                                <li class="level3"><a href="#" title="">Wireless</a></li>
                                <li class="level3"><a href="#" title="">Sports & Fitness</a></li>
                              </ul>
                            </li>
                            <li class="level2 col-md-6">
                              <a href="# ">Speaker System</a>
                              <ul class="menu-level-2">
                                <li class="level3"><a href="#" title="">Complete Systems</a></li>
                                <li class="level3"><a href="#" title="">Sound Bars</a></li>
                                <li class="level3"><a href="#" title="">Surround Sound</a></li>
                                <li class="level3"><a href="#" title="">Receivers & Amplifiers</a></li>
                                <li class="level3"><a href="#" title="">Equalizers</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="vertical-item level1 vertical-drop"><a href="#">Car Electronics</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu">
                          <ul class="vertical-menu1">
                            <li><a href="#">Car Audio</a></li>
                            <li><a href="#">Radar Detectors</a></li>
                            <li><a href="#">Car Safety & Security</a></li>
                            <li><a href="#">Car Video</a></li>
                            <li><a href="#">Two-Way Radios</a></li>
                            <li><a href="#">CB Radios & Scanners</a></li>
                            <li><a href="#">In-Dash Mounting Kits</a></li>
                            <li><a href="#">Installation Accessories.</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop"><a href="#">Electronics Showcase</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu">
                          <ul class="vertical-menu1">
                            <li><a href="#">Car Audio</a></li>
                            <li><a href="#">Radar Detectors</a></li>
                            <li><a href="#">Car Safety & Security</a></li>
                            <li><a href="#">Car Video</a></li>
                            <li><a href="#">Two-Way Radios</a></li>
                            <li><a href="#">CB Radios & Scanners</a></li>
                            <li><a href="#">In-Dash Mounting Kits</a></li>
                            <li><a href="#">Installation Accessories.</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="vertical-item level1 vertical-drop mega-parent"><a href="#">All categlories</a>
                        <div class="menu-level-1 dropdown-menu vertical-menu v2 pd">
                          <div class="row">
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate1.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Mirrorless Cameras</a></h3>
                            </div>
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate2.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Lenses</a></h3>
                            </div>
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate3.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Photography Drones</a></h3>
                            </div>
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate4.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Sports & Action Cameras</a></h3>
                            </div>
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate5.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Optics</a></h3>
                            </div>
                            <div class="col-md-4 text-center cate-item">
                              <a href="#"><img src="img/megamenu/cate6.jpg" alt="" class="img-reponsive"></a>
                              <h3><a href="#">Accessories</a></h3>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-9 widget-left">
                  <div class="flex lr">
                    <nav class="main-menu flex align-center">
                      <button type="button" class="icon-mobile e-icon-menu icon-pushmenu js-push-menu">
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav js-menubar">
                          <li class="level1 active hassub"><a href="#">Home</a>
                            <span class="plus js-plus-icon"></span>
                            <div class="menu-level-1 ver2 dropdown-menu">
                              <div class="row">
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="home1.html">
                                      <img src="img/demo/demo1.jpg" alt="" class="img-reponsive">

                                    </a>
                                  </div>
                                  <div class="demo-text">Demo 1</div>
                                </div>
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="home2.html"><img src="img/demo/demo2.jpg" alt="" class="img-reponsive"></a>
                                  </div>
                                  <div class="demo-text">Demo 2</div>
                                </div>
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="home3.html"><img src="img/demo/demo3.jpg" alt="" class="img-reponsive"></a>
                                  </div>
                                  <div class="demo-text">Demo 3</div>
                                </div>
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="home4.html"><img src="img/demo/demo4.jpg" alt="" class="img-reponsive"></a>
                                  </div>
                                  <div class="demo-text">Demo 4</div>
                                </div>
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="home5.html"><img src="img/demo/demo5.jpg" alt="" class="img-reponsive"></a>
                                  </div>
                                  <div class="demo-text">Demo 5</div>
                                </div>
                                <div class="cate-item col-md-4 col-sm-12">
                                  <div class="demo-img">
                                    <a href="#"><img src="img/demo/demo6.jpg" alt="" class="img-reponsive"></a>
                                    <div class="overlay-img box-center">
                                      <a href="#" class="btn-gradient btn-csoon">Coming soon</a>
                                    </div>
                                  </div>
                                  <div class="demo-text">Demo 6</div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="level1 dropdown hassub"><a href="#">Shop<span class="h-ribbon h-pos e-green">sale</span></a>
                            <span class="plus js-plus-icon"></span>
                            <div class="menu-level-1 dropdown-menu">
                              <ul class="level1">
                                <li class="level2 col-4">
                                  <a href="#">Shop Layout</a>
                                  <ul class="menu-level-2">
                                    <li class="level3"><a href="shop_full.html" title="">Shop Full Width</a></li>
                                    <li class="level3"><a href="shopgrid_v1.html" title="">Shop Grid v.1</a></li>
                                    <li class="level3"><a href="shopgrid_v2.html" title="">Shop Grid v.2</a><span class="h-ribbon v3 e-red h-pos">Hot</span></li>
                                    <li class="level3"><a href="shoplist.html" title="">Shop List</a></li>
                                    <li class="level3"><a href="shopleft_sidebar.html" title="">Shop Left Sidebar</a></li>
                                    <li class="level3"><a href="shopright_sidebar.html" title="">Shop Right Sidebar</a></li>
                                  </ul>
                                  <a href="#">Categories</a>
                                  <ul class="menu-level-2">
                                    <li class="level3"><a href="cat_fullwidth.html" title="">Categories Full Width</a><span class="h-ribbon v3 e-red h-pos">Hot</span></li>
                                    <li class="level3"><a href="cat_left_sidebar.html" title="">Categories Left Sidebar</a></li>
                                    <li class="level3"><a href="cat_right_sidebar.html" title="">Categories Right Sidebar</a></li>
                                  </ul>
                                </li>
                                <li class="level2 col-4">
                                  <a href="# ">Single Product Type</a>
                                  <ul class="menu-level-2">
                                    <li class="level3"><a href="bundle.html" title="">Bundle</a><span class="h-ribbon v3 e-red h-pos">Hot</span></li>
                                    <li class="level3"><a href="pin_product.html" title="">Pin Product</a></li>
                                    <li class="level3"><a href="360degree.html" title="">360 Degree</a><span class="h-ribbon v3 e-green h-pos">new</span></li>
                                    <li class="level3"><a href="feature_video.html" title="">Featued video</a></li>
                                    <li class="level3"><a href="simple.html">Simple</a></li>
                                    <li class="level3"><a href="variable.html">Variable</a></li>
                                    <li class="level3"><a href="affilate.html">External / Affiliate</a></li>
                                    <li class="level3"><a href="grouped.html">Grouped</a></li>
                                    <li class="level3"><a href="outofstock.html">Out of stock</a></li>
                                    <li class="level3"><a href="onsale.html">On sale</a></li>
                                  </ul>
                                </li>
                                <li class="level2 col-4">
                                  <a href="#">Single Product Layout</a>
                                  <ul class="menu-level-2">
                                    <li class="level3"><a href="product_extended.html" title="">Product Extended</a><span class="h-ribbon v3 e-red h-pos">Hot</span></li>
                                    <li class="level3"><a href="product_sidebar.html" title="">Product Left Sidebar</a></li>
                                    <li class="level3"><a href="product_right_sidebar.html" title="">Product Right Sideba</a></li>
                                  </ul>
                                  <a href="#">Other Pages</a>
                                  <ul class="menu-level-2">
                                    <li class="level3"><a href="shop_full.html" title="">Shop</a></li>
                                    <li class="level3"><a href="cart.html" title="">Cart</a></li>
                                    <li class="level3"><a href="wishlist.html" title="">My Wishlist</a></li>
                                    <li class="level3"><a href="checkout.html" title="">Checkout</a></li>
                                    <li class="level3"><a href="myaccount.html" title="">My Account</a></li>
                                    <li class="level3"><a href="track.html" title="">Track Your Order</a></li>
                                    <li class="level3"><a href="quickview.html" title="">Quick View</a></li>
                                  </ul>
                                </li>
                              </ul>
                              <div class="clearfix"></div>
                            </div>
                          </li>
                          <li class="level1 active dropdown">
                            <a href="#">Mega menu</a>
                          </li>
                          <li class="level1 active dropdown">
                            <a href="#">Pages<span class="h-ribbon h-pos e-skyblue">new</span></a>
                            <span class="plus js-plus-icon"></span>
                            <ul class="dropdown-menu menu-level-1">
                              <li class="level2"><a href="aboutus.html" title="About Us ">About Us </a></li>
                              <li class="level2"><a href="contactus.html" title="Contact">Contact</a></li>
                              <li class="level2"><a href="faq.html" title="FAQs">FAQs</a></li>
                              <li class="level2"><a href="404.html" title="404">404</a></li>
                              <li class="level2"><a href="commingsoon.html" title="Coming Soon">Coming Soon</a></li>
                            </ul>
                          </li>
                          <li class="level1 active dropdown">
                            <a href="#">Blog</a>
                            <ul class="dropdown-menu menu-level-1">
                              <li class="level2"><a href="blog-standar.html" title="Blog Standar">Blog Standar</a></li>
                              <li class="level2"><a href="blog_grid.html" title="Blog Gird">Blog Gird</a></li>
                              <li class="level2"><a href="blog-standar.html" title="Blog Sidebar">Blog Sidebar</a></li>
                              <li class="level2"><a href="blog-single-post.html" title="Blog Single Post">Blog Single Post</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div class="header-bottom-right hidden-xs hidden-sm">
                      <img src="img/icon-ship.png" alt="" class="img-reponsive">
                      <span>Free Shipping on Orders $100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import TopBar from "~/components/header/top-bar.vue";
@Component({
  components: {TopBar}
})
export default class Default  extends Vue {
}
</script>
