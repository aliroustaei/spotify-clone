import React from "react";
import { IconType } from "react-icons";

interface menuProps {
  menuItem: {
    name: string;
    to: string;
    icon: IconType;
    active: boolean;
  }[];
  menuLabel: string;
}

export default function Menu({ menuItem, menuLabel }: menuProps) {
  return (
    <div>
      <h4 className="mt-8 mb-4 text-gray-100">{menuLabel}</h4>
      <ul className="space-y-2">
        {menuItem.map((item) => (
          <li
            className={`flex items-center gap-4 ${
              item.active && "text-gray-100"
            }`}
          >
            <item.icon className="w-6 h-6" />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
