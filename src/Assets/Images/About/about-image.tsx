import about from "./about.jpg";
import { FC } from "react";

export const AboutImage: FC = () => (
  <img src={about} alt="about" style={{ width: "100%", height: "100%" }} />
);
