import { lazy, Redirect } from "react";

// ** Document title
const TemplateTitle = "%s - Project Nepal ";

// ** Default Route
const DefaultRoute = "/";

// ** Merge Routes
const Routes = [
  // {
  //   path: "/",
  //   className: "nefscun-mis",
  //   component: lazy(() => import("../../views/frontend/Homepage")),
  //   layout: "BlankLayout",
  //   meta: {
  //     publicRoute: true,
  //   },
  // },
  // {
  //   path: "/",
  //   component: lazy(() => import("../../views/frontend/Homepage"), "default"),
  //   // component: lazy(() => import("../../views/frontend/Homepage")),
  //   layout: "BlankLayout",
  // },
  {
    path: "/sad",
    component: lazy(() => import("../../views/frontend/Homepage")),
    layout: "BlankLayout",
    meta: {
      publicRoute: false,
    },
  },
  {
    path: "/home",
    component: lazy(() => import("../../views/admin/admins")),
    layout: "NefscunUserLayout",
  },
  {
    path: "/admin/admins",
    component: lazy(() => import("../../views/admin/admins")),
    layout: "NefscunUserLayout",
  },
  // {
  //   path: "/admin/support",
  //   component: lazy(() => import("../../views/admin/support")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/purchase",
  //   component: lazy(() => import("../../views/admin/purchase")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/terms",
  //   component: lazy(() => import("../../views/admin/terms")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/privacy",
  //   component: lazy(() => import("../../views/admin/privacy")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/notification",
  //   component: lazy(() => import("../../views/admin/notification")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/newsfeed",
  //   component: lazy(() => import("../../views/admin/reportedfeed")),
  //   layout: "NefscunUserLayout",
  // },
  {
    path: "/admin/artist",
    component: lazy(() => import("../../views/admin/artist")),
    layout: "NefscunUserLayout",
  },
  {
    path: "/admin/client",
    component: lazy(() => import("../../views/admin/client")),
    layout: "NefscunUserLayout",
  },
  {
    path: "/admin/destination",
    component: lazy(() => import("../../views/admin/destination")),
    layout: "NefscunUserLayout",
  },
  // {
  //   path: "/admin/designs/verifiedDesigns",
  //   component: lazy(() => import("../../views/admin/designs/verifiedDesigns")),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/designs/unverifiedDesigns",
  //   component: lazy(() =>
  //     import("../../views/admin/designs/unverifiedDesigns")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/tattoopaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/TattooPaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/tattoounpaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/TattooUnPaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/artistpaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/ArtistAppointmentPaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/artistunpaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/ArtistAppointmentUnPaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/purchasepaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/PurchasePaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/transaction/purchaseunpaidlist",
  //   component: lazy(() =>
  //     import("../../views/admin/transaction/PurchaseUnPaidManage.js")
  //   ),
  //   layout: "NefscunUserLayout",
  // },
  // {
  //   path: "/admin/banner",
  //   component: lazy(() => import("../../views/admin/banner")),
  //   layout: "NefscunUserLayout",
  // },

  {
    path: "/homepage",

    className: "nefscun-mis",
    component: lazy(() => import("../../views/Homepage")),
    layout: "BlankLayout",
    meta: {
      publicRoute: true,
    },
  },
  {
    path: "/admin/logout",
    component: lazy(() => import("../../views/admin/Login")),
    layout: "BlankLayout",
  },
  {
    path: "/admin/login",
    component: lazy(() => import("../../views/admin/Login")),
    layout: "BlankLayout",
    meta: {
      publicRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
