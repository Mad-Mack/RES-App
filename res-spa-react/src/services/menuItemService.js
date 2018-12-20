import DashboardIcon from "@material-ui/icons/Dashboard";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

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
