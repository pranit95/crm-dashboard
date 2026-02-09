export const userRoles = {
  ADMIN: 'admin',
  USERS: 'user'
} ;

export const SideMenuList = [
  {
    name: "Dashboard",
    key: "DASHBOARD",
    value: "DASHBOARD",
    path: "/dashboard",
    restrictedRole: [],
  },
  {
    name: "Settings",
    key: "SETTINGS",
    value: "SETTINGS",
    path: "/settings",
    restrictedRole: [],
  },
  {
    name: "Users",
    key: "USERS",
    value: "USERS",
    path: "/users",
    restrictedRole: [userRoles.USERS]
  },
];

export const dashBoardData = {
  activeUsers: 860,
  totalUsers: 1200,
  revenue: 452300,
};
