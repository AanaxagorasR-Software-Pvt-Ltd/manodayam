import { leftSideBarMenu } from "./menuList";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LeftSideBar() {

	const [menuList, setMenuList] = useState(leftSideBarMenu);

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
				li.name === name ? { ...li, isHover: true } : { ...li, isHover: false }
			)
		);
	};
	const handleMouseOutkMenu = () => {
		setMenuList(menuList.map((li) => ({ ...li, isHover: false })));
	};

	return (
		<>
			<ul class="nav">
				{
					menuList.map((sMenu, i) => (
						<li
							className={`nav-item ${sMenu?.isActive ? "active" : ""} ${sMenu?.isHover ? "hover-open" : ""}`}
							key={i}
							onClick={(e) => handleClickMenu(sMenu?.name)}
							onMouseEnter={(e) => handleMouseOverkMenu(sMenu?.name)}
							onMouseLeave={(e) => handleMouseOutkMenu(sMenu?.name)}
						>
							<Link className={`nav-link ${sMenu.submenu.length > 0 ? 'collapsed' : ''}`}

								to={sMenu.link ? sMenu?.link : (e) => { e.preventDefault() }}
								data-toggle="collapse" aria-expanded={sMenu?.isActive ? true : false}  >
								<i className={`${sMenu?.iconClass} menu-icon`} ></i>
								<span className="menu-title">{sMenu?.name}</span>
								{
									sMenu.submenu && sMenu.submenu.length > 0 ? <i class="menu-arrow" ></i> : null
								}
							</Link>
							{sMenu.submenu && sMenu.submenu.length > 0 ? (
								<div className={`collapse ${sMenu?.isActive ? ' show' : ''}`} id="ui-basic">
									<ul className="nav flex-column sub-menu">
										{sMenu.submenu.map((sub, i) => (
											<li class="nav-item" key={i}>
												{" "}
												<Link to={sub.link ? sub.link : (e) => { e.preventDefault() }}
													class="nav-link" aria-expanded={sMenu?.isActive ? true : false}
												>

													{sub.name}
												</Link>

											</li>
										))}
									</ul>
								</div>
							) : null}
						</li>
					))
				}
			</ul>
		</>
	);
}