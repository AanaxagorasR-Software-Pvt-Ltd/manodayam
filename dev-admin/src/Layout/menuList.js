const leftSideBarMenu = [

  {
    name: "Spirituality",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/spirituality",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "Content module",
  },
  {
    name: "Banner",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/banner",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "Content module",
  },
  {
    name: "About us manodayam",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/about-us",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "Content module",
  },
  {
    name: "Master Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/master-category",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "Content module",
  },
  {
    name: "Subscription plan",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/subscription-plan",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "Subscription",
  },
  {
    name: "Self-Awareness Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "Content module",

    submenu: [
      {
        name: "Category List",
        isActive: true,
        dataToggle: "",
        link: "/admin/category",
        isExpand: false,
      },
      {
        name: "About Category",
        isActive: true,
        dataToggle: "",
        link: "/admin/about-category",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Doctor module",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "Doctor module",

    submenu: [
      {
        name: "Doctor List",
        isActive: true,
        dataToggle: "",
        link: "/admin/doctor-list",
        isExpand: false,
      },
      {
        name: "All Appointments",
        isActive: true,
        dataToggle: "",
        link: "/admin/appointment-list",
        isExpand: false,
      },
      {
        name: "Booked List",
        isActive: true,
        dataToggle: "",
        link: "/admin/booked-appointment-list",
        isExpand: false,
      },
      {
        name: "MSQ Question",
        isActive: true,
        dataToggle: "",
        link: "/admin/questions",
        isExpand: false,
      },
      {
        name: "Yes-No Question",
        isActive: true,
        dataToggle: "",
        link: "/admin/yes-no-questions",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Shakti OTT module",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    userAccess: "Shakthi OTT",
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
        name: "Shakthi Asking",
        isActive: true,
        dataToggle: "",
        link: "/admin/shakthi-ques",
        isExpand: false,
      },
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
    ],
    isHover: false,
  },
  {
    name: "Product module",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "",
    userAccess: "Product module",
    iconClass: "icon-layout",
    submenu: [
      {
        name: "Product List",
        isActive: false,
        dataToggle: "",
        isExpand: false,
        link: "/admin/product",
        iconClass: "icon-grid",
        subMenuid: "ui-basic",
        submenu: [],
        isHover: false,
        iconClass: "icon-layout",
      },
      {
        name: "Order List",
        isActive: true,
        dataToggle: "",
        link: "",
        isExpand: false,
      },
    ],
  },
  {
    name: "Digital Human Library",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "Digital Human Library",

    submenu: [
      {
        name: "Coach/mentor list",
        isActive: true,
        dataToggle: "",
        link: "/admin/library",
        isExpand: false,
      },
      {
        name: "Single connectors",
        isActive: true,
        dataToggle: "",
        link: "/admin/library-appointment",
        isExpand: false,
      },
      {
        name: "Single call Booked",
        isActive: true,
        dataToggle: "",
        link: "/admin/library-appointment-booked",
        isExpand: false,
      },

      {
        name: "Group connectors",
        isActive: true,
        dataToggle: "",
        link: "/admin/group-appoint",
        isExpand: false,
      },
      {
        name: "Group Booked",
        isActive: true,
        dataToggle: "",
        link: "/admin/group-appoint-book",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Voice Assistant",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-contract",
    link: "",
    userAccess: "Voice Assistant",

    submenu: [
      {
        name: "Voice Chat",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-chat",
        isExpand: false,
      },
      {
        name: "Self Assessment",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-assessment-question",
        isExpand: false,
      },
    ],
    isHover: false,
  },

  // admin roll
  {
    name: "Dashboard",
    isActive: true,
    dataToggle: "",
    isExpand: false,
    link: "/admin/dashboard",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "admin",
  },
  {
    name: "Spirituality",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/spirituality",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "admin",

  },
  {
    name: "Banner",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/banner",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "admin",

  },
  {
    name: "About us manodayam",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/about-us",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "admin",

  },
  {
    name: "Master Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/master-category",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
    userAccess: "admin",

  },
  {

    userAccess: "admin",
    name: "Subscription",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "admin",

    submenu: [

      {
        name: "Subscription plans",
        isActive: false,
        dataToggle: "",
        isExpand: false,
        link: "/admin/subscription-plan",
        // iconClass: "icon-grid",
        // subMenuid: "ui-basic",
        // submenu: [],
        // isHover: false,
        // userAccess: "admin",
      },
      {
        name: "Subscription Booked List",
        isActive: true,
        dataToggle: "",
        link: "/admin/subscription-booked-list",
        isExpand: false,
      },
    ],
    isHover: false,

  },
  {
    name: "Self-Awareness Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "admin",

    submenu: [
      {
        name: "Category List",
        isActive: true,
        dataToggle: "",
        link: "/admin/category",
        isExpand: false,
      },
      {
        name: "About Category",
        isActive: true,
        dataToggle: "",
        link: "/admin/about-category",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Doctor module",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "admin",

    submenu: [
      {
        name: "Doctor List",
        isActive: true,
        dataToggle: "",
        link: "/admin/doctor-list",
        isExpand: false,
      },
      {
        name: "All Appointments",
        isActive: true,
        dataToggle: "",
        link: "/admin/appointment-list",
        isExpand: false,
      },
      {
        name: "Booked List",
        isActive: true,
        dataToggle: "",
        link: "/admin/booked-appointment-list",
        isExpand: false,
      },
      {
        name: "MSQ Question",
        isActive: true,
        dataToggle: "",
        link: "/admin/questions",
        isExpand: false,
      },
      {
        name: "Yes-No Question",
        isActive: true,
        dataToggle: "",
        link: "/admin/yes-no-questions",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Shakti OTT module",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    userAccess: "admin",

    submenu: [
      // {
      //   name: "Media Solutions",
      //   isActive: true,
      //   dataToggle: "",
      //   link: "/admin/media-solutions",
      //   isExpand: false,
      // },
      {
        name: "Shakthi Asking",
        isActive: true,
        dataToggle: "",
        link: "/admin/shakthi-ques",
        isExpand: false,
      },
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
    ],
    isHover: false,
  },
  {
    name: "Product module",
    isActive: false,
    dataToggle: "",
    userAccess: "admin",

    isExpand: false,
    link: "",
    iconClass: "icon-layout",
    submenu: [
      {
        name: "Product List",
        isActive: false,
        dataToggle: "",
        isExpand: false,
        link: "/admin/product",
        iconClass: "icon-grid",
        subMenuid: "ui-basic",
        submenu: [],
        isHover: false,
        iconClass: "icon-layout",
      },
      {
        name: "Order List",
        isActive: true,
        dataToggle: "",
        link: "",
        isExpand: false,
      },
    ],
  },
  {
    name: "Digital Human Library",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    userAccess: "admin",


    submenu: [
      {
        name: "Coach/mentor list",
        isActive: true,
        dataToggle: "",
        link: "/admin/library",
        isExpand: false,
      },
      {
        name: "Single connectors",
        isActive: true,
        dataToggle: "",
        link: "/admin/library-appointment",
        isExpand: false,
      },
      {
        name: "Single call Booked",
        isActive: true,
        dataToggle: "",
        link: "/admin/library-appointment-booked",
        isExpand: false,
      },

      {
        name: "Group connectors",
        isActive: true,
        dataToggle: "",
        link: "/admin/group-appoint",
        isExpand: false,
      },
      {
        name: "Group Booked",
        isActive: true,
        dataToggle: "",
        link: "/admin/group-appoint-book",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "Voice Assistant",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-contract",
    link: "",
    userAccess: "admin",
    submenu: [
      {
        name: "Voice Chat",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-chat",
        isExpand: false,
      },
      {
        name: "Self Assessment",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-assessment-question",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "User/admin List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-contract",
    link: "",
    userAccess: "admin",
    submenu: [
      {
        name: "User",
        isActive: true,
        dataToggle: "",
        link: "/admin/users-list",
        isExpand: false,
      },
      {
        name: "Admin/Subadmin",
        isActive: true,
        dataToggle: "",
        link: "/admin/admin-list",
        isExpand: false,
      },
    ],
    isHover: false,
  },

  {
    name: "Admin Setting",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-contract",
    link: "",
    userAccess: "admin",

    submenu: [
      {
        name: "Sub-admin",
        isActive: true,
        dataToggle: "",
        link: "/admin/sub-admin",
        isExpand: false,
      },
      {
        name: "Sub-admin Register",
        isActive: true,
        dataToggle: "",
        link: "/admin/subadmin-register",
        isExpand: false,
      },
    ],
    isHover: false,
  },
];
export { leftSideBarMenu };
