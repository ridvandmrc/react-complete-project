import contact from "./contact.png";
import arrow from "./arrow.png";
import { FC } from "react";

export const ContactImage: FC = () => (
  <img src={contact} alt="contact" style={{  width: "50%", height: "40%" }} />
);

export const ArrowImage: FC = () => (
    <img src={arrow} alt="arrow" style={{   }} />
);
