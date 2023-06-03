import PropTypes from "prop-types";
import AdminSidebar from "../AdminSidebar";
import AdminNavbar from "../AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="container flex">
        <AdminSidebar />
        {children}
      </div>
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.string.isRequired,
};
