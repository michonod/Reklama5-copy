import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";

const SectionAbove = () => {
  return (
    <div className={classes.sectionAbove}>
      <div>
        <h3>
          Симнете ја бесплатно <span>Реклама99</span> мобилната апликација на
          вашиот смартфон
        </h3>
      </div>
      <div className={classes.sectionAbove_images}>
        <p>Преземи ја</p>
        <div>
          <Image
            src="/images/footer/appstore.png"
            width={120}
            height={40}
          ></Image>
          <Image
            src="/images/footer/google.png"
            width={120}
            height={40}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SectionAbove;
