import React from "react";
import "../styles/userMenu.scss";
import { AiOutlineDoubleRight, AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

import profil from "../img/profil.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const UserMenu = (props) => {
  return (
    <nav className="side-user">
      <ul>
        <li>
          <Link to="/">Logout</Link>
          <AiOutlineDoubleRight className="icon-close" onClick={props.click} />
        </li>
        <li>
          <div className="circle-user">
            <img src={profil} alt="profil" className="profil"></img>
            <button type="submit" className="add-button">
              +
            </button>
          </div>
        </li>
        <li>
          <div className="namebox">
            <span className="name">Ayoub Kharbach</span>
            <span className="proffesion">Student</span>
          </div>
        </li>
        <li>
          <table className="niveau">
            <tr className="layers">
              <th>
                <div className="levels">
                  <span>C1</span>
                </div>
              </th>
              <th>
                <div className="lang">
                  <span className="language">English</span>
                  <span className="level">Advanced</span>
                </div>
              </th>
              <th>
                <div className="degrees-guide">
                  <span className="degree-blue"></span>
                </div>
              </th>
            </tr>
            <tr className="layers">
              <th>
                <div className="levels">
                  <span>B2</span>
                </div>
              </th>
              <th>
                <div className="lang">
                  <span className="language">Spanish</span>
                  <span className="level">hight intermidiate</span>
                </div>
              </th>
              <th>
                <div className="degrees-guide">
                  <span className="degree-blue2"></span>
                </div>
              </th>
            </tr>
          </table>
        </li>
        <li>
          <span className="reminders">Reminders</span>
          <IoIosNotificationsOutline className="icon-notif" />
        </li>
        <li>
          <table className="Reminders-list">
            <tr>
              <th>
                <div className="div-error">
                  <MdErrorOutline className="icon-err" />
                </div>
              </th>
              <th>
                <div className="lang">
                  <span className="language">Eng-Vocabulary test</span>
                  <span className="level">24 sept 2020, Friday</span>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <div className="div-error-msg">
                  <AiOutlineMail className="icon-err" />
                </div>
              </th>
              <th>
                <div className="lang">
                  <span className="language">Eng-Send grammar homework</span>
                  <span className="level">29 Sep 2020, wednsday</span>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <div className="div-error-msg">
                  <AiOutlineMail className="icon-err" />
                </div>
              </th>
              <th>
                <div className="lang">
                  <span className="language">Spanish-Send essey</span>
                  <span className="level">05 Oct 2020,Monday</span>
                </div>
              </th>
            </tr>
          </table>
        </li>
        <li>
          <div className="bio">
            <span className="level">Spanish-reading task </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default UserMenu;
