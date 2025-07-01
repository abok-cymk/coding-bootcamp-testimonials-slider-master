import PropTypes from "prop-types";
import clsx from "clsx";

const VARIANT_STYLES = {
  primary: "text-white bg-white",
  secondary: "text-gray-800 bg-gray-200 hover:bg-gray-300",
  tertiary: "text-blue-600 bg-transparent hover:bg-blue-100",
};

const Button = ({
  variant = "primary",
  className,
  children,
  type = "button",
  ariaLabel,
  ...props
}) => {
  const baseStyles = "cursor-pointer h-fit w-fit";
  const variantStyles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  return (
    <button
      type={type}
      className={clsx(baseStyles, variantStyles, className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
};

export default Button;
