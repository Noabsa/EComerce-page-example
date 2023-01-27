import "./Footer.css";

const Footer = () => {
  const contactUs = [
    "CONTACT US",
    "Find us on Facebook",
    "Testimonials",
    "Terms of Service",
    "Refund Policy",
  ];
  const wantEvenMore = [
    "WANT EVEN MORE?",
    "Shipping Info",
    "Our locations",
    "Get In Touch",
  ];
  function printItems(list) {
    return list.map((element, ind) => {
      return <li key={ind}>{element}</li>;
    });
  }
  return (
    <>
      <footer>
        <ul>{printItems(contactUs)}</ul>
        <ul>{printItems(wantEvenMore)}</ul>
      </footer>
    </>
  );
};

export default Footer;
