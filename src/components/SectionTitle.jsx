const SectionTitle = ({ title, slogan }) => {
  return (
    <div className="text-center">
      <p className="text-sm text-secondary font-semibold">{slogan}</p>
      <h1 className="text-4xl mt-3 font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
