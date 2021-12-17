import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { leftSideBarMenu } from "../Layout/menuList";
import { useToggle } from "../hooks";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import axios from "../utill/axios";
import appointment from '../Store/Connect/appointment';
// let Button = new AA()



const BookedAppointment = () => {
    const [data, setData] = React.useState([]);
    const dispatch = useDispatch();
    const { logout } = useAuth()
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState(leftSideBarMenu);
    const [profileShow, setProfileShow] = useToggle(false);
    const createRoomRef = useRef();
    const changeStatusRef = useRef();

    const listBooked = () => {
        axios.get('appointments/booked').then(res => {
            console.log('res', res, typeof res);
            setData(res);
        }).catch(err => {
            console.log('err', err.message);
        })
    }
    React.useEffect(() => {
        listBooked();
    }, []);




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

    const deleteData = (_id) => {
        appointment.delete(_id).then((res) => {
            alert(res?.message)
            listBooked();
        })

    }

    return (
        <>
            <CreateRoomForm ref={createRoomRef} list={listBooked} />
            <ChangeStatusForm ref={changeStatusRef} list={listBooked} />
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


                                <div class="col-lg-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Booked Appointment list</h4>
                                            <div class="table-responsive pt-3">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>S.No</th>
                                                            <th>Patient Details</th>
                                                            <th>Issue</th>
                                                            <th>Schedule Date</th>
                                                            <th>Call Status</th>
                                                            <th>Connect Here!</th>
                                                            <th style={{ width: '80px' }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            data.map((v, i) => (
                                                                <tr key={i}>
                                                                    <td>{i + 1}</td>
                                                                    <td><strong>Name: </strong> {v.fullname}<br />
                                                                        <strong>Email:</strong> {v.email} <br />
                                                                        <strong>Phone:</strong> {v.mobileNmb} </td>
                                                                    <td>{v.disorder}</td>

                                                                    <td>{(new Date(v.schedule)).toLocaleDateString()}</td>
                                                                    <td>{v.call_status === 'pending' ? 'Pending' : v.call_status === 'success' ? 'Success' : 'Unsuccess'}</td>
                                                                    <td>{v.room_no == null ?
                                                                        <button type="button" class="btn btn-sm btn-info border-radius-0 add-btn" onClick={() => { createRoomRef.current.openForm(v) }} title="Create Room">
                                                                            <i class="ti-plus"></i>
                                                                        </button> :
                                                                        <a href={"http://localhost:5000/" + v.room_no} target="_blank"><button type="button" class="btn btn-sm btn-success border-radius-0 add-btn" >
                                                                            <i class="ti-video-camera"></i></button>
                                                                        </a>
                                                                    }</td>
                                                                    <td>
                                                                        <button type="button" class="btn btn-sm btn-info border-radius-0 add-btn"
                                                                            onClick={() => { changeStatusRef.current.openForm(v) }}
                                                                        >Change Call Status</button>

                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }

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


const CreateRoomForm = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const { list } = props;
    const handleChange = (v, k) => { setData({ ...data, [k]: v }) }

    const handleVisibleRoom = (state) => { setShow(state) }
    useImperativeHandle(ref, () => ({
        openForm(dt) {
            if (dt?._id) {
                setData(dt);
            } else {
                setData({});
            }
            handleVisibleRoom(true);
        }
    }));

   
    const saveRoom = () => {
        appointment.saveRoom(data, data.id).then((res) => {
            alert(res?.message)
            handleVisibleRoom(false);
            list();
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <>
            <Modal show={show} onHide={() => { handleVisibleRoom(false) }}>
                <Modal.Header >
                    <Modal.Title>Create Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1"> Room No</label>
                            <input type="text" class="form-control" value={data.room_no || ''} onChange={(e) => { handleChange(e.target.value, 'room_no') }} placeholder="Enter Room No" />
                        </div>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleVisibleRoom(false) }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveRoom}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


           
        </>
    );
})
const ChangeStatusForm = forwardRef((props, ref) => {
    const [show1, setShow1] = useState(false);
    const [data, setData] = useState({});
    const { list } = props;
    const handleChange = (v, k) => { setData({ ...data, [k]: v }) }

   

    const handleVisibleStatus = (state) => { setShow1(state) }
    useImperativeHandle(ref, () => ({
        openForm(dt) {
            if (dt?._id) {
                setData(dt);
            } else {
                setData({});
            }
            handleVisibleStatus(true);
        }
    }));

    const saveCallStatus = () => {
        appointment.saveCallStatus(data, data.id).then((res) => {
            alert(res?.message)
            handleVisibleStatus(false);
            list();
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <>
            <Modal show={show1} onHide={() => { handleVisibleStatus(false) }}>
                <Modal.Header >
                    <Modal.Title>Change Call Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form class="forms-sample">
                            <div class="form-group ">
							<label for="exampleInputUsername1">Call Status</label>
							<select class="form-control" value={data.call_status || ''} onChange={(e) => { handleChange(e.target.value, 'call_status') }}>
								<option value="" disabled>Change Call Status</option>
								<option value="pending">Pending</option>
								<option value="success">Success</option>
								<option value="unsuccess">Unsuccess</option>
							</select>
						</div>
                        
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleVisibleStatus(false) }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveCallStatus}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


           
        </>
    );
})
export default BookedAppointment;