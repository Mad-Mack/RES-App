import AssessmentIcon from "@material-ui/icons/Assessment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BusinessIcon from "@material-ui/icons/Business";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";

function getAll() {
  return [
    {
      label: "Dashboard",
      urlPath: "/",
      icon: DashboardIcon
    },
    {
      label: "Companies",
      urlPath: "/companies",
      icon: BusinessIcon
    },
    {
      label: "Clients",
      urlPath: "/clients",
      icon: PeopleIcon
    },
    {
      label: "Projects",
      urlPath: "/projects",
      icon: AssessmentIcon
    },
    {
      label: "Units",
      urlPath: "/units",
      icon: HomeIcon
    },
    {
      label: "Documents",
      urlPath: "/documents",
      icon: FolderIcon
    },
    {
      label: "Proposals",
      urlPath: "/proposals",
      icon: BusinessCenterIcon
    }
  ];
}

export default {
  getAll
};
