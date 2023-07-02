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
          <a href="https://discord.com/invite/7Pu2xTM56X" target="_blank">
            Discord
          </a>
          <a href="https://medium.com/kwdc23" target="_blank">
            Medium
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/hellokwdc/" target="_blank">
            Instagram
          </a>
          <a href="https://twitter.com/HelloKWDC" target="_blank">
            Twitter
          </a>
          <a href="mailto:hello.kwdc@gmail.com" target="_blank">
            Contact Us
          </a>
        </div>
        <div>
          <a href="/conduct" target="_blank">
            Code of Conduct
          </a>
          <a href="/terms" target="_blank">
            Sponsorship Terms
          </a>
        </div>
      </SC.FooterMenu>
      <div>KWDC23 © 2023</div>
    </SC.Footer>
  );
};

export default Footer;
