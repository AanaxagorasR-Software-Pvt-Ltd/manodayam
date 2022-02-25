const leftSideBarMenu = [
  {
    name: "Dashboard",
    isActive: true,
    dataToggle: "",
    isExpand: false,
    link: "/Main",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },
  {
    name: "Spirituality",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/spirituality",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },
  {
    name: "Banner",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/banner",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },
   {
    name: "About manodayam",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/about-us",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },
  {
    name: "Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    submenu: [
      {
        name: "Category List",
        isActive: true,
        dataToggle: "",
        link: "/category",
        isExpand: false,
      },
      {
        name: "About Category",
        isActive: true,
        dataToggle: "",
        link: "/about-category",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Appointments",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    submenu: [
      {
        name: "All Appointments",
        isActive: true,
        dataToggle: "",
        link: "/appointment-list",
        isExpand: false,
      },
      {
        name: "Booked List",
        isActive: true,
        dataToggle: "",
        link: "/booked-appointment-list",
        isExpand: false,
      },
    ],
    isHover: false,
  },

  {
    name: "Doctor List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/doctor-list",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },

  {
    name: "Questions Part",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    submenu: [
      {
        name: "MSQ",
        isActive: true,
        dataToggle: "",
        link: "/questions",
        isExpand: false,
      },
      {
        name: "Yes No",
        isActive: true,
        dataToggle: "",
        link: "/yes-no-questions",
        isExpand: false,
      },
    ],
    isHover: false,
  },

  {
    name: "Shakti",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-layout",
    submenu: [
      // {
      //   name: "Media Solutions",
      //   isActive: true,
      //   dataToggle: "",
      //   link: "/admin/media-solutions",
      //   isExpand: false,
      // },
      {
        name: "Video",
        isActive: true,
        dataToggle: "",
        link: "/admin/video",
        isExpand: false,
      },
      {
        name: "Audio",
        isActive: true,
        dataToggle: "",
        link: "/admin/audio",
        isExpand: false,
      },
      {
        name: "Live",
        isActive: true,
        dataToggle: "",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Product",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/product" ,
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
  },

  {
    name: "Digital Human Library",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    submenu: [
      {
        name: "All Connectors",
        isActive: true,
        dataToggle: "",
        link: "/library-appointment",
        isExpand: false,
      },
      {
        name: "Booked Connection ",
        isActive: true,
        dataToggle: "",
        link: "/library-appointment-booked",
        isExpand: false,
      },
      {
        name: "Create Library",
        isActive: true,
        dataToggle: "",
        link: "/library",
        isExpand: false,
      },
    ],
    isHover: false,
  },

  // {
  //   name: "Settings",
  //   isActive: false,
  //   dataToggle: "",
  //   isExpand: false,
  //   // link: "javascript:void(0)" ,
  //   iconClass: "icon-contract",
  //   submenu: [],
  //   isHover: false,
  // },
  {
    name: "User List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/users-list",
    iconClass: "icon-contract",
    submenu: [],
    isHover: false,
  },
];
export { leftSideBarMenu };
