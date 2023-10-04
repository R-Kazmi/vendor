const Card = ({ className, children }) => {
  return (
    <div className={`${className} flex shadow-md rounded-lg bg-white p-4`}>
      {children}
    </div>
  );
};

export default Card;
