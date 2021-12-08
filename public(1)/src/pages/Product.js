import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { leftSideBarMenu } from "../Layout/menuList";
import { useToggle } from "../hooks/";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
// let Button = new AA()



const Product = () => {
	const dispatch = useDispatch();
	const { logout } = useAuth()
	const navigate = useNavigate();
	const [menuList, setMenuList] = useState(leftSideBarMenu);
	const [profileShow, setProfileShow] = useToggle(false);
	const formRef = useRef();

	const handleClickMenu = (name) => {
		setMenuList(
			menuList.map((li) =>
				li.name === name
					? { ...li, isActive: !li.isActive }
					: { ...li, isActive: false }
			)
		);
	};
	const handleMouseOverkMenu = (name) => {
		setMenuList(
			menuList.map((li) =>
				li.name === name
					? { ...li, isHover: true }
					: { ...li, isHover: false }
			)
		);
	}
	const handleMouseOutkMenu = () => {

		setMenuList(
			menuList.map((li) => ({ ...li, isHover: false })))
	}
	const handleSideBar = () => {
		dispatch(isToggle());
	};
	const logoutUser = () => {
		logout()
			.then(re => {
				navigate("/admin/login")
			})
			.catch(er => {
				console.log("some error")
			})
	}

	return (
		<>
			<Addform ref={formRef} />
			<div class="container-scroller">
				<nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
					<div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
						<a class="navbar-brand brand-logo mr-5" href="index.html">
							<img src="../images/logo.png" class="mr-2" alt="logo" />
						</a>
						<a class="navbar-brand brand-logo-mini" href="index.html">
							<img src="../images/logo.png" alt="logo" />
						</a>
					</div>
					<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
						<button
							class="navbar-toggler navbar-toggler align-self-center"
							type="button"
							data-toggle="minimize"
							onClick={handleSideBar}
						>
							<span class="icon-menu"></span>
						</button>
						<ul class="navbar-nav mr-lg-2">
							<li class="nav-item nav-search d-none d-lg-block">
								<div class="input-group">
									<div
										class="input-group-prepend hover-cursor"
										id="navbar-search-icon"
									>
										<span class="input-group-text" id="search">
											<i class="icon-search"></i>
										</span>
									</div>
									<input
										type="text"
										class="form-control"
										id="navbar-search-input"
										placeholder="Search now"
										aria-label="search"
										aria-describedby="search"
									/>
								</div>
							</li>
						</ul>
						<ul class="navbar-nav navbar-nav-right">
							<li class="nav-item dropdown">
								<a
									class="nav-link count-indicator dropdown-toggle"
									id="notificationDropdown"
									href="#"
									data-toggle="dropdown"
								>
									<i class="icon-bell mx-0"></i>
									<span class="count"></span>
								</a>
								<div
									class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
									aria-labelledby="notificationDropdown"
								>
									<p class="mb-0 font-weight-normal float-left dropdown-header">
										Notifications
									</p>
									<a class="dropdown-item preview-item">
										<div class="preview-thumbnail">
											<div class="preview-icon bg-success">
												<i class="ti-info-alt mx-0"></i>
											</div>
										</div>
										<div class="preview-item-content">
											<h6 class="preview-subject font-weight-normal">
												Application Error
											</h6>
											<p class="font-weight-light small-text mb-0 text-muted">
												Just now
											</p>
										</div>
									</a>
									<a class="dropdown-item preview-item">
										<div class="preview-thumbnail">
											<div class="preview-icon bg-warning">
												<i class="ti-settings mx-0"></i>
											</div>
										</div>
										<div class="preview-item-content">
											<h6 class="preview-subject font-weight-normal">Settings</h6>
											<p class="font-weight-light small-text mb-0 text-muted">
												Private message
											</p>
										</div>
									</a>
									<a class="dropdown-item preview-item">
										<div class="preview-thumbnail">
											<div class="preview-icon bg-info">
												<i class="ti-user mx-0"></i>
											</div>
										</div>
										<div class="preview-item-content">
											<h6 class="preview-subject font-weight-normal">
												New user registration
											</h6>
											<p class="font-weight-light small-text mb-0 text-muted">
												2 days ago
											</p>
										</div>
									</a>
								</div>
							</li>
							<li class={`nav-item nav-profile dropdown ${profileShow ? "show" : ""}`} onClick={setProfileShow}>
								<a
									class="nav-link dropdown-toggle"
									href="#"
									data-toggle="dropdown"
									id="profileDropdown"
									aria-expanded={`${profileShow}`}
								>
									<img src="../images/faces/face28.jpg" alt="profile" />
								</a>
								<div
									class={`dropdown-menu dropdown-menu-right navbar-dropdown ${profileShow ? "show" : ""}`}
									aria-labelledby="profileDropdown"
								>
									<a class="dropdown-item">
										<i class="ti-settings text-primary"></i>
										Settings
									</a>
									<a class="dropdown-item" onClick={logoutUser}>
										<i class="ti-power-off text-primary"></i>
										Logout
									</a>
								</div>
							</li>
							<li class="nav-item nav-settings d-none d-lg-flex">
								<a class="nav-link" href="#">
									<i class="icon-ellipsis"></i>
								</a>
							</li>
						</ul>
						<button
							class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
							type="button"
							data-toggle="offcanvas"
						>
							<span class="icon-menu"></span>
						</button>
					</div>
				</nav>
				<div class="container-fluid page-body-wrapper">
					<nav class="sidebar sidebar-offcanvas" id="sidebar">
						<ul class="nav">
							{menuList.map((sMenu) => (
								<li
									className={`nav-item ${sMenu?.isActive ? "active" : ""} ${sMenu?.isHover ? "hover-open" : ""}`}
									key={uuidv4()}
									onClick={(e) => handleClickMenu(sMenu?.name)}
									onMouseEnter={(e) => handleMouseOverkMenu(sMenu?.name)}
									onMouseLeave={(e) => handleMouseOutkMenu(sMenu?.name)}
								>
									<a className={`nav-link ${sMenu.submenu.length > 0 ? 'collapsed' : ''}`} href={`${sMenu?.link}`} data-toggle="collapse" aria-expanded={sMenu?.isActive ? true : false}  >
										<i className={`${sMenu?.iconClass} menu-icon`}></i>
										<span className="menu-title">{sMenu?.name}</span>
										{
											sMenu.submenu && sMenu.submenu.length > 0 ? <i class="menu-arrow"></i> : null
										}
									</a>
									{sMenu.submenu && sMenu.submenu.length > 0 ? (
										<div className={`collapse ${sMenu?.isActive ? ' show' : ''}`} id="ui-basic">
											<ul className="nav flex-column sub-menu">
												{sMenu.submenu.map((sub) => (
													<li class="nav-item">
														{" "}
														<a href={`${sub.link}`}
															class="nav-link" aria-expanded={sMenu?.isActive ? true : false}

														>

															{sub.name}
														</a>

													</li>
												))}
											</ul>
										</div>
									) : null}
								</li>
							))}
						</ul>
					</nav>
					<div class="main-panel">
						<div class="content-wrapper">
							<div class="row">

								<div class="col-md-12 grid-margin">
									<div class="row">
										<div class="col-12 col-xl-4 offset-10">
											<button type="button" class="btn btn-social-icon-text btn-info" onClick={()=>{formRef.current.openForm()}}>
												<i class="ti-plus"></i>Add</button>
										</div>
									</div>
								</div>



								<div class="col-lg-12 grid-margin stretch-card">
									<div class="card">
										<div class="card-body">
											<h4 class="card-title">Product list</h4>
											<div class="table-responsive pt-3">
												<table class="table table-bordered">
													<thead>
														<tr>
															<th>S.N</th>
															<th>Product Title</th>
															<th>Product Image</th>
															<th>Product Description</th>
															<th>Product Price</th>
															<th style={{width: '80px'}}>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Fidget Cube</td>
															<td><img src="../images/product/pr.png" class="mr-2" alt="pr" /></td>
														
															<td>dolor sit amet consectetur, adipisicing elit.1</td>
															<td> ₹ 399/-</td>
															<td>
																<button type="button" class="btn btn-sm btn-info border-radius-0 add-btn"><i class="ti-pencil"></i></button>
																<button type="button" class="btn btn-sm btn-danger add-btn"><i class="ti-plus"></i></button>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* content-wrapper ends */}
						{/* partial:partials/_footer.html */}
						<footer class="footer">
							<div class="col-md-12 text-center">
								<span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
								Copyright © 2021 All Right Reserved Aanaxagorasr Software Pvt. Ltd{" "}
									<a href="#" target="_blank">
								
									</a>{" "}
								
								</span>
						
							</div>
						</footer>
						{/* partial */}
					</div>
				</div>
			</div>
		</>
	);
};


const Addform = forwardRef((props, ref) => {
	const [show, setShow] = useState(false);

	const handleVisible = (state) =>{ setShow(state) }
	useImperativeHandle(ref, () => ({
        openForm() {
            handleVisible(true);
        }
    }));

	return (
		<>
			<Modal show={show} size="xl"  onHide={() => { handleVisible(false) }}>
				<Modal.Header >
					<Modal.Title>Product Add</Modal.Title>
				</Modal.Header>
				<Modal.Body>

				<form class="forms-sample">
					<div class="row">
              <div class="form-group col-md-6">
                      <label for="exampleInputUsername1">Product Title</label>
								<input type="text" class="form-control" placeholder="Product Title" />
							</div>

							<div class="form-group col-md-6">
                      <label for="exampleInputUsername1">Product Upload</label>
								<input type="file" class="form-control file-upload-info" placeholder="Product Image" />

							</div>
							<div class="form-group col-md-6">
                      <label for="exampleInputUsername1">Product Description</label>
								<textarea class="form-control" placeholder=" Product Description" />
							</div>
							
							<div class="form-group col-md-6">
                      <label for="exampleInputUsername1">Product Price</label>
					  <input type="text" class="form-control file-upload-info" placeholder="Product Price" />
							</div>
							</div>
					</form>

					
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={()=> {handleVisible(false)}}>
						Close
					</Button>
					<Button variant="primary" onClick={()=> {handleVisible(false)}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
})
export default Product;