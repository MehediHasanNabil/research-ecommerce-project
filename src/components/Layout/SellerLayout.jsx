import PropTypes from "prop-types";

export default function SellerLayout({ children }) {
  return (
    <div>
      SellerLayout
      {children}
    </div>
  );
}

SellerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
