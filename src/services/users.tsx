export const getUsers = async () => {
  return [
    { id: 1, name: "Amit", role: "Admin" },
    { id: 2, name: "Neha", role: "User" },
    { id: 3, name: "Rahul", role: "User" },
    { id: 4, name: "Alka", role: "User" },
    { id: 5, name: "Revti", role: "User" },
    { id: 6, name: "Nehal", role: "User" },
    { id: 7, name: "rakesh", role: "User" },
    { id: 8, name: "Amitesh", role: "Admin" },
    { id: 9, name: "Nehakant", role: "User" },
    { id: 10, name: "Rahulyyuu", role: "User" },
  ];
};

export const DB_DATA = [
  { id: 1, name: "Amit", role: "Admin" },
  { id: 2, name: "Neha", role: "User" },
  { id: 3, name: "Rahul", role: "User" },
  { id: 4, name: "Alka", role: "User" },
  { id: 5, name: "Revti", role: "User" },
  { id: 6, name: "Nehal", role: "User" },
  { id: 7, name: "rakesh", role: "User" },
  { id: 8, name: "Amitesh", role: "Admin" },
  { id: 9, name: "Nehakant", role: "User" },
  { id: 10, name: "Rahulyyuu", role: "User" },
];

export const fetchProjcts = async (page = 0) => {
  const PAGE_SIZE = 3;
  await new Promise((resolve) => setTimeout(resolve, 800));

  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return {
    users: DB_DATA.slice(start, end),
    page,
    hasNextPage: end < DB_DATA.length,
    hasPrevPage: page > 1,
  };
};
