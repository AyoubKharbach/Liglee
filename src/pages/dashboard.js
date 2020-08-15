import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import "../styles/dashboard.scss";
import image from "../img/imageG.png";
import msg from "../img/msgimage.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="head">
        <span className="dashboard-title">Dashboard</span>
        <span className="dashboard-date">20 Sep 2020, Friday</span>
        <button className="search-icon">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="dashboard-text">
        <span className="text-title">Welcome back Ayoub!</span>
        <div className="paragraph">
          <p>
            You've learned <b>80% </b>of your goal this week!
          </p>
          <p>Keep it up and improve your results!</p>
        </div>
        <img src={image} alt="images" className="image"></img>
        <img src={msg} alt="msgImage" className="msg-image"></img>
      </div>
      <div className="divs">
        <div className="result-div">
          <span className="result-title">Latest results</span>

          <span className="more">More</span>
          <BsArrowRight className="icon-arrow-result" />

          <table className="latest-result">
            <tr>
              <td>
                <span className="result-value">Until5-</span>
                <span className="result">Technology</span>
              </td>
              <td>
                <div className="degrees">
                  <span className="degree-red1"></span>
                </div>
                <span className="pourcentage-red">25%</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="result-value">Until12-</span>
                <span className="result">Ecology</span>
              </td>
              <td>
                <div className="degrees">
                  <span className="degree-blue1"></span>
                </div>
                <span className="pourcentage-blue">44%</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="result-value">Until9-</span>
                <span className="result">Real estate</span>
              </td>
              <td>
                <div className="degrees">
                  <span className="degree-blue1"></span>
                </div>
                <span className="pourcentage-blue">40%</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="result-value">Until8-</span>
                <span className="result">Education</span>
              </td>
              <td>
                <div className="degrees">
                  <span className="degree-red2"></span>
                </div>
                <span className="pourcentage-red">15%</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="result-value">Until16-</span>
                <span className="result">Job market</span>
              </td>
              <td>
                <div className="degrees">
                  <span className="degree-blue2"></span>
                </div>
                <span className="pourcentage-blue">76%</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="time-div">
          <span className="time-title">Time spend in learning</span>
          <span className="last-week">Last week</span>
          <BsArrowRight className="icon-arrow-time" />

          <table className="timing-spend">
            <tr>
              <td className="days">Mon</td>
              <td className="days">Tue</td>
              <td className="days">Wed</td>
              <td className="days">Thu</td>
              <td className="days">Fri</td>
              <td className="days">Sat</td>
              <td className="days">Sun</td>
            </tr>
            <tr>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-mon"></span>
                  <span className="degree-time2-mon"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-tue"></span>
                  <span className="degree-time2-tue"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-wed"></span>
                  <span className="degree-time2-wed"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-thu"></span>
                  <span className="degree-time2-thu"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-fri"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-sat"></span>
                  <span className="degree-time2-sat"></span>
                </div>
              </td>
              <td>
                <div className="degrees-time">
                  <span className="degree-time1-sun"></span>
                  <span className="degree-time2-sun"></span>
                  <span className="degree-time3-sun"></span>
                </div>
              </td>
            </tr>
          </table>
          <ul className="list-cours">
            <li>
              {" "}
              <div className="circle-cours circle-red"></div>
            </li>
            <li className="cours">Vocabulary</li>
            <li>
              <div className="circle-cours circle-blue"></div>
            </li>
            <li className="cours">Grammar</li>
            <li>
              {" "}
              <div className="circle-cours circle-viole"></div>
            </li>
            <li className="cours">Lisening</li>
            <li>
              {" "}
              <div className="circle-cours circle-gray"></div>
            </li>
            <li className="cours">Writing</li>
          </ul>
        </div>
      </div>
      <div className="courses">
        <span className="courses-title">Your courses</span>
        <span className="more-courses">more</span>
        <BsArrowRight className="icon-arrow-courses" />
      </div>
      <div className="div-courses">
        <div className="course grammar">
          <div className="lavels-course">B1</div>
          <div className="course-value">
            <span className="niveau-course">business English</span>
            <span className="crs">Grammar</span>
          </div>
          <BsArrowRight className="icon-arrow-course" />
        </div>
        <div className="course phrasal-verb">
          <div className="lavels-course lavels-course-b2">B2</div>
          <div className="course-value">
            <span className="niveau-course">business English</span>
            <span className="crs">Grammar</span>
          </div>
          <BsArrowRight className="icon-arrow-course" />
        </div>
        <div className="course vocabulary">
          <div className="lavels-course lavels-course-c1">C1</div>
          <div className="course-value">
            <span className="niveau-course">business English</span>
            <span className="crs">Grammar</span>
          </div>
          <BsArrowRight className="icon-arrow-course" />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
