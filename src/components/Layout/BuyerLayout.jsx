import PropTypes from "prop-types";
import Footer from "../Buyer/Footer";
import NavigationBar from "../Buyer/Navbar/NavigationBar";

export default function BuyerLayout({ children }) {
  return (
    <div className="container">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}

BuyerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
