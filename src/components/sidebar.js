import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import { RiFolderLine } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineLayout } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/sidebar.scss";
import logo from "../img/l.jpg";
import upgradeImage from "../img/img.png";

const Sidebar = () => {
  return (
    <ProSidebar className="sidebar" style={{ height: "100%" }}>
      <Link to="/" className="header">
        <img src={logo} alt="logo" className="logo"></img>
        <span className="title">Linglee</span>
      </Link>

      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiOutlineLayout />}>
            <Link to="/" className="menu-links">
              <span className="menu-link">Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem icon={<RiFolderLine />}>
            <Link to="/classes" className="menu-links">
              <span className="menu-link">Classes</span>
            </Link>
          </MenuItem>
          <MenuItem icon={<BsFiles />}>
            <Link to="/resoures" className="menu-links">
              <span className="menu-link">Resources</span>
            </Link>
          </MenuItem>
          <MenuItem icon={<AiOutlineCalendar />}>
            <Link to="/learningplan" className="menu-links">
              <span className="menu-link">Learning plan </span>
            </Link>
          </MenuItem>
          <MenuItem className="menu-content" icon={<MdChatBubbleOutline />}>
            <Link to="/chat" className="menu-links">
              <span className="menu-link">Chat</span>
            </Link>
          </MenuItem>
          <MenuItem icon={<FaRegEdit />}>
            <Link to="/setting" className="menu-links">
              <span className="menu-link"> Setting</span>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <div className="footer">
        <img
          src={upgradeImage}
          alt="upgradeImage"
          className="upgradeImage"
        ></img>
        <p className="textUpgrade">
          Upgrade to <b>Pro</b> for more resourses
        </p>
        <button type="submit" className="upgradeButton">
          Upgrade
        </button>
      </div>
    </ProSidebar>
  );
};
export default Sidebar;
