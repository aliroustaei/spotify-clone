import React from "react";

interface avatarProps {
  avatar: string;
  avatarName: string;
}

export default function Avatar({ avatar, avatarName }: avatarProps) {
  return (
    <div>
      <img
        src={avatar}
        alt=""
        className="w-16 h-16 object-cover rounded-xl mb-4"
      />
      <h6>Hi!</h6>
      <h3 className="text-gray-100">{avatarName}</h3>
    </div>
  );
}
