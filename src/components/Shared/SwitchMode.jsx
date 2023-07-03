import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { switchUserRole } from "../../features/auth/authSlice";

export default function SwitchMode() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  function changeUserRole() {
    const localStorageRole = localStorage.getItem("role");
  
    if (localStorageRole) {
      localStorage.setItem(
        "role",
        localStorageRole === "buyer" ? "seller" : "buyer"
      );
      dispatch(
        switchUserRole(localStorageRole === "buyer" ? "seller" : "buyer")
      );
    } else {
      localStorage.setItem("role", role === "buyer" ? "seller" : "buyer");
      dispatch(switchUserRole(role === "buyer" ? "seller" : "buyer"));
    }
  }
  return (
    <Dropdown.Item className="border-2" onClick={changeUserRole}>
      Switch to {role === "buyer" ? "Selling" : "Buying"}
    </Dropdown.Item>
  );
}
