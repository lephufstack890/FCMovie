// import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderWebsite.scss'

const HeaderWebsite = () => {
  // const [ isLogged, setIsLogged ] = React.useState<boolean>(true);
  const Menu =[
    {
      title:"Lịch Chiếu Theo Rạp",
      linkTo:"/lich-chieu"
    },
    {
      title:"Phim",
      linkTo:"/phim"
    },
    {
      title:"Rạp",
      linkTo:"/thong-tin-rap"
    },
    {
      title:"Giá Vé",
      linkTo:""
    },
    {
      title:"Tin Mới và Ưu Đãi",
      linkTo:""
    },
    {
      title:"Nhượng Quyền",
      linkTo:""
    },
    {
      title:"Thành Viên",
      linkTo:""
    },
  ]
  return (
    <div className='w-full h-full '>
      <div className="pre-header">
          <div className="container">
              <div className="row">
                  <div className="col-md-16 col-sm-16 additional-nav">
                      <div className="pull-right padding-left-10">
                          <a href="#"></a>
                      </div>
                      <ul className="list-unstyled list-inline pull-right">
                          <li><a href="#">Đăng nhập</a></li>
                          <li><a href="#">Đăng ký</a></li>
                      </ul>
                  </div>
              </div>
          </div>        
      </div>
      <div className="header">
          <div className="container">
              <div className="row">
              <div className="col-md-2">
                <NavLink className="site-logo" to="/">
                  <img style={{ width: '100px' }} src="https://i.gyazo.com/f42624877a99b415498194df29e2e45b.png" alt="" />
                </NavLink>
              </div>
              <div className="col-md-2">
                <div className="top-cart-block">
                    <div className="top-cart-info">
                        <div className="header-navigation menu-cinema">
                            <ul>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">Beta Thái Nguyên <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-submenu">
                                          <a>Hà Nội</a>
                                          <ul className="dropdown-menu" role="menu">
                                                  <li><a>Beta Thanh Xuân</a></li>
                                                  <li><a>Beta Mỹ Đình</a></li>
                                                  <li><a>Beta Đan Phượng</a></li>
                                                  <li><a>Beta Giải Phóng</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>TP. Hồ Chí Minh</a>
                                          <ul className="dropdown-menu" role="menu">
                                                  <li><a>Beta Quang Trung</a></li>
                                                  <li><a>Beta Trần Quang Khải</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Bắc Giang</a>
                                          <ul className="dropdown-menu" role="menu">
                                            <li><a>Beta Bắc Giang</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Đồng Nai</a>
                                          <ul className="dropdown-menu" role="menu">
                                            <li><a>Beta Biên Hòa</a></li>
                                              <li><a>Beta Long Khánh</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Khánh Hòa</a>
                                          <ul className="dropdown-menu" role="menu">
                                            <li><a>Beta Nha Trang</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Thái Nguyên</a>
                                          <ul className="dropdown-menu" role="menu">
                                            <li><a>Beta Thái Nguyên</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Thanh Hóa</a>
                                          <ul className="dropdown-menu" role="menu">
                                                  <li><a>Beta Thanh Hóa</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Bà Rịa - Vũng Tàu</a>
                                          <ul className="dropdown-menu" role="menu">
                                                  <li><a>Beta Phú Mỹ</a></li>
                                                  <li><a>Beta Hồ Tràm</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Bình Dương</a>
                                          <ul className="dropdown-menu" role="menu">
                                            <li><a>Beta Empire Bình Dương</a></li>
                                            <li><a>Beta Tân Uyên</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Kiên Giang</a>
                                          <ul className="dropdown-menu" role="menu">
                                              <li><a>Beta TRMall Phú Quốc</a></li>
                                          </ul>
                                      </li>
                                      <li className="dropdown-submenu">
                                          <a>Lào Cai</a>
                                          <ul className="dropdown-menu" role="menu">
                                              <li>
                                                <a>Beta Lào Cai</a>
                                              </li>
                                          </ul>
                                      </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="header-navigation pull-right list-menu">
                    <ul>
                      {Menu?.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item?.linkTo} className='item'>{item?.title}</NavLink>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default HeaderWebsite