import { NavLink } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const items = [
  getItem("Master", "sub1", "", [
    getItem(<NavLink to="consignor">Consignor</NavLink>, "1"),
    getItem(<NavLink to="connect2">Consignee</NavLink>, "2"),
    getItem(<NavLink to="connect3">Vehicle</NavLink>, "3"),
      getItem(<NavLink to="connect4">Locaion</NavLink>, "4"),
    getItem(<NavLink to="broker">Broker</NavLink>)
  ]),
  getItem("Entry", "sub2", "", [
    getItem(<NavLink to="connect5">Memo Entries</NavLink>, "5"),
   
  ]),

  getItem("Reports", "sub2", "", [
    getItem(<NavLink to="connect5">Memo Reports</NavLink>, "6"),
    
  ]),
];