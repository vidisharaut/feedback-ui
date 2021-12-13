import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && "reverse"}`}>
      <h3>{children}</h3>
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
