import React from "react";
import { avatar } from "../../assets";
import { BiHomeAlt2, BiEqualizer, BiAlbum, BiUser } from "react-icons/bi";
import Menu from "./Menu";
import Avatar from "./Avatar";

const menuLinks = [
  { name: "Discover", to: "/", icon: BiHomeAlt2, active: true },
  { name: "Genres", to: "/around-you", icon: BiEqualizer, active: false },
  { name: "Albums", to: "/top-artists", icon: BiAlbum, active: false },
  { name: "artist", to: "/top-charts", icon: BiUser, active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] bg-primary-dark h-[100vh] p-4 text-gray-400 backdrop-blur-lg">
      <Avatar avatar={avatar} avatarName="Ali Roustaei" />
      <Menu menuItem={menuLinks} menuLabel="Menu" />
      <Menu menuItem={menuLinks} menuLabel="Library" />
    </aside>
  );
}
