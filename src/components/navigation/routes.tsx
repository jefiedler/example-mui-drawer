import PolylineIcon from "@mui/icons-material/Polyline";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SettingsIcon from "@mui/icons-material/Settings";
import LanIcon from "@mui/icons-material/Lan";

export type Route = {
  icon: JSX.Element;
  url: string;
  key: string;
  label: string;
  subRoutes?: [];
};

export interface Routes {
  routeHeader: string;
  routeHeaderKey: string;
  nestedRoutes: Route[];
}

const routes: Routes[] = [
  {
    routeHeader: "DataWareHouse",
    routeHeaderKey: "dwh",
    nestedRoutes: [
      {
        icon: <LanIcon />,
        url: "/dwh",
        key: "datawarhouse",
        label: "Data Ware House",
      },
      {
        icon: <DataObjectIcon />,
        url: "/meta-data",
        key: "metaData",
        label: "Meta Data",
      },
      {
        icon: <SettingsIcon />,
        url: "/settings",
        key: "ctrl",
        label: "DWH Settings",
      },
      {
        icon: <PolylineIcon />,
        url: "/generator",
        key: "create",
        label: "DWH Generator",
      },
    ],
  },
  {
    routeHeader: "Test2",
    routeHeaderKey: "dwh2",
    nestedRoutes: [
      {
        icon: <LanIcon />,
        url: "/dwh",
        key: "datawarhouse",
        label: "Data Ware House",
      },
      {
        icon: <DataObjectIcon />,
        url: "/meta-data",
        key: "metaData",
        label: "Meta Data",
      },
      {
        icon: <SettingsIcon />,
        url: "/settings",
        key: "ctrl",
        label: "DWH Settings",
      },
      {
        icon: <PolylineIcon />,
        url: "/generator",
        key: "create",
        label: "DWH Generator",
      },
    ],
  },
];

export default routes;
