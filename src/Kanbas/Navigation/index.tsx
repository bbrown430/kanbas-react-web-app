import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendar, FaHistory, FaInbox, FaVideo, FaRecycle, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
    const links = [
      { label: "Account",   icon: <FaRegUserCircle className="fs-2" />, style: "profile-icon" },
      { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />, style: "icon"  },
      { label: "Courses",   icon: <FaBook className="fs-2" />, style: "icon"             },
      { label: "Calendar",  icon: <FaRegCalendar className="fs-2" />, style: "icon"   },
      { label: "Inbox",  icon: <FaInbox className="fs-2" />, style: "icon"   },
      { label: "History",  icon: <FaHistory className="fs-2" />, style: "icon"   },
      { label: "Studio",  icon: <FaVideo className="fs-2" />, style: "icon"   },
      { label: "Commons",  icon: <FaRecycle className="fs-2" />, style: "icon"   },
      { label: "Help",  icon: <FaQuestionCircle className="fs-2" />, style: "icon"   },
    ];
    const { pathname } = useLocation();
    return (
      <ul className="wd-kanbas-navigation">
          <li>
              <Link to={"http://northeastern.edu"}>
                  <img src="/images/Northeastern_Logo.svg" alt="Northeastern Logo"></img>
              </Link>
          </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
              <Link to={`/Kanbas/${link.label}`}>
                  <span className={link.style + (link.label === "Account" ? " profile-icon" : "")}>{link.icon}</span>
                  {link.label} 
              </Link>
          </li>
        ))}
      </ul>
    );
  }
  export default KanbasNavigation;