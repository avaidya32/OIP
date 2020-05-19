import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <p
      style={{
        padding: 14,
        textAlign: "center",
        color: "var(--white)",
        fontSize: "12px",
      }}
    >
      © 2020 KPMG, an Indian registered partnership and a member firm of the
      KPMG network of independent member firms affiliated with KPMG
      International Cooperative (“KPMG International”), a Swiss entity. All
      rights reserved.
    </p>
  );
};

export default Footer;
