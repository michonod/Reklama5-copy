import React from "react";
import FooterLinks from "./FooterLinks";
import SectionAbove from "./SectionAbove";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div>
      <SectionAbove />
      <FooterLinks />
      <FooterBottom />
    </div>
  );
};

export default Footer;
