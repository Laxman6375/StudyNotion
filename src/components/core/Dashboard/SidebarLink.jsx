import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <NavLink
      to={link.path}
      className={`relative  px-6 py-2 font-semibold text-sm ${
        matchRoute(link.path)
          ? " bg-yellow-800 text-yellow-50 border-l-2 border-l-yellow-50"
          : " bg-opacity-0 text-richblack-300"
      }`}
    >
      <div className="flex items-center  gap-3">
        <Icon className=" text-2xl lg:text-lg" />
        <span className="hidden lg:block">{link.name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarLink;
