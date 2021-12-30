const leftSideBarMenu = [
  {
    name: "Dashboard",
    isActive: true,
    dataToggle: "",
    isExpand: false,
    link: "javascript:void(0)" ,
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu:[],
    isHover: false
  },
  {
    name: "Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/category" ,
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu:[],
    isHover: false
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
    isHover: false
  },

  {
    name: "Doctor List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/doctor-list" ,
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu:[],
    isHover: false
  },
 
  {
    name: "Shakti",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-layout",
    submenu: [
      {
        name: "Media Solutions",
        isActive: true,
        dataToggle: "",
        link: "/admin/media-solutions" ,
        isExpand: false,
      },
        {
          name: "Video",
          isActive: true,
          dataToggle: "",
          link: "/admin/video" ,
          isExpand: false,
        },
        {
          name: "Audio",
          isActive: true,
          dataToggle: "",
          link: "/admin/audio" ,
          isExpand: false,
        },
        {
          name: "Live",
          isActive: true,
          dataToggle: "",
          isExpand: false,
        }
      ],
      isHover: false
  },
  {
    name: "E-com",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-columns",
    submenu: [
      {
        name: "Orders",
        isActive: true,
        dataToggle: "",
        link: "/admin/order" ,
        isExpand: false,
      },
      {
        name: "Products",
        isActive: true,
        dataToggle: "",
        link: "/admin/product" ,
        isExpand: false,
      },
      {
        name: "Sells",
        isActive: true,
        dataToggle: "",
        link: "/admin/sells" ,
        isExpand: false,
      }
    ],
    isHover: false

  },
  {
    name: "Charts to be discuss?",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-bar-graph",
    submenu: [],
    isHover: false

  },
  {
    name: "Settings",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-contract",
    submenu: [],
    isHover: false

  },
  {
    name: "Users List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    iconClass: "icon-head ",
    submenu: [
      {
        name: "Login",
        isActive: true,
        dataToggle: "",
        link: "/admin/login" ,
        isExpand: false,
      },
      {
        name: "Regiser",
        isActive: true,
        dataToggle: "",
        link: "/admin/register" ,
        isExpand: false,
      },

      {
        name: "Forgot Password",
        isActive: true,
        dataToggle: "",
        link: "/admin/forgotpassword" ,
        isExpand: false,
      },

    
    ],
    isHover: false
  

  },
];
export { leftSideBarMenu };
