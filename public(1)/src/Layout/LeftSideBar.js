<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    {menuList.map((sMenu) => (
      <li
        className={`nav-item ${sMenu?.isActive ? "active" : ""} ${
          sMenu?.isHover ? "hover-open" : ""
        }`}
        key={uuidv4()}
        onClick={(e) => handleClickMenu(sMenu?.name)}
        onMouseEnter={(e) => handleMouseOverkMenu(sMenu?.name)}
        onMouseLeave={(e) => handleMouseOutkMenu(sMenu?.name)}
      >
        <a
          className={`nav-link ${sMenu.submenu.length > 0 ? "collapsed" : ""}`}
          href={`${sMenu?.link}`}
          data-toggle="collapse"
          aria-expanded={sMenu?.isActive ? true : false}
        >
          <i className={`${sMenu?.iconClass} menu-icon`}></i>
          <span className="menu-title">{sMenu?.name}</span>
          {sMenu.submenu && sMenu.submenu.length > 0 ? (
            <i class="menu-arrow"></i>
          ) : null}
        </a>
        {sMenu.submenu && sMenu.submenu.length > 0 ? (
          <div
            className={`collapse ${sMenu?.isActive ? " show" : ""}`}
            id="ui-basic"
          >
            <ul className="nav flex-column sub-menu">
              {sMenu.submenu.map((sub) => (
                <li class="nav-item">
                  {" "}
                  <a
                    href={`${sub.link}`}
                    class="nav-link"
                    aria-expanded={sMenu?.isActive ? true : false}
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
</nav>;
