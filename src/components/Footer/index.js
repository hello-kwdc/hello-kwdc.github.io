import * as SC from "@/components/styles";

const Footer = () => {
  return (
    <SC.Footer>
      <div style={{ fontSize: "30px", fontWeight: 200 }}>
        <span style={{ fontWeight: 500 }}>KWDC</span>
        <span>2023</span>
      </div>
      <SC.FooterMenu>
        <div>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <a href="/">Code of Conduct</a>
          <a href="/">Sponsorship Terms</a>
        </div>
      </SC.FooterMenu>
      <div>KWDC23 © 2023</div>
    </SC.Footer>
  );
};

export default Footer;
