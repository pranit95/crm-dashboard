import React from "react";

const UserCard = React.memo(({ data }) => {
    console.log("rendered")
  return data?.users?.map(({ id, name, role }) => (
    <div
      key={id}
      className="flex flex-col bg-blue-400 text-gray-200 h-[100%] w-full items-center justify-center"
    >
      <div>Name: {name}</div>
      <div>Role: {role}</div>
    </div>
  ));
});

export default UserCard;
