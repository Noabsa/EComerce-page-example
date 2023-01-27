import "./Header.css";

const Header = () => {
  const menuOptions = [
    "HOME",
    "SHOP",
    "CUSTOM",
    "CORPORATE",
    "CONTACT",
    "CART (0)",
  ];
  const navBarMenu = menuOptions.map((option, ind) => {
    return <li key={ind}>{option}</li>;
  });
  return (
    <>
      <header className="navBar">
        <div className="icon">
          <img src="img/socks-solid.svg" alt="icon"></img>
        </div>
        <ul>{navBarMenu}</ul>
      </header>
    </>
  );
};

export default Header;
