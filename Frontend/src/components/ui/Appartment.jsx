const Appartment = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title} className="rounded-full bg-slate-300" />
      <h2>{title}</h2>
    </div>
  );
};
export default Appartment;
