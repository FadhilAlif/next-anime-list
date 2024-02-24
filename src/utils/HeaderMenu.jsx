const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="flex justify-center p-5">
        <h3 className="text-3xl font-bold text-color-primary">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
