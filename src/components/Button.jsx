const Button = ({ children, type = "button" }) => {
  return (
    <button type={type} className="px-5 py-2 flex items-center gap-2">
      {children}
    </button>
  );
};

export default Button;
