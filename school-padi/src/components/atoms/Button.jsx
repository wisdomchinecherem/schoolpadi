const Button = ({
  bgColor = "#FFFFFF",  // Default background color: White
  color = "#8E959C",    // Default text color: Grey
  borderColor = "#01356B", // Default border color: Medium Dark Blue
  width,
  height = "40px",
  fontSize = "15px",
  fontWeight = "700",
  children,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        width: width,
        height: height,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      className="border text-sm font-bold p-2 rounded-sm"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
