import PropTypes from "prop-types";
import Footer from "../Footer";
import Navbar from "../Navbar/NavigationBar";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
