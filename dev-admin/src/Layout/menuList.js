const leftSideBarMenu = [
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
  },
  {
    name: "Shakthi Asking",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/shakthi-ques",
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu: [],
    isHover: false,
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
  },
  {
    name: "Category",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
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
    name: "Appointments",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",
    submenu: [
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
    ],
    isHover: false,
  },

  {
    name: "Doctor List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/doctor-list",
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
    link: "",

    submenu: [
      {
        name: "MSQ",
        isActive: true,
        dataToggle: "",
        link: "/admin/questions",
        isExpand: false,
      },
      {
        name: "Yes No",
        isActive: true,
        dataToggle: "",
        link: "/admin/yes-no-questions",
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
    link: "",

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
    ],
    isHover: false,
  },
  {
    name: "Product List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    // link: "javascript:void(0)" ,
    link: "",

    iconClass: "icon-layout",

    submenu: [
      {
        name: "Product",
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

    submenu: [
      {
        name: "Create Library",
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
    name: "Voice Assistant",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    iconClass: "icon-layout",
    link: "",

    submenu: [
      {
        name: "Voice Chat",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-chat",
        isExpand: false,
      },
      {
        name: "Assessment",
        isActive: true,
        dataToggle: "",
        link: "/admin/voice-assessment-question",
        isExpand: false,
      },
    ],
    isHover: false,
  },
  {
    name: "User List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/admin/users-list",
    iconClass: "icon-contract",
    submenu: [],
    isHover: false,
  },
];
export { leftSideBarMenu };
