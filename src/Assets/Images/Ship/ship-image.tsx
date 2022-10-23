import ship from "./ship.jpg";
import { FC } from "react";

export const ShipImage: FC = () => (
  <img src={ship} alt="ship" style={{ width: "100%", height: "100%" }} />
);
