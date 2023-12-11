import React from "react";
import HeroActivitein from "./herobanner";
import Bezien from "./beziensec1";
import VeelMeer from "./veelmeer";
import Calban from "./calban";
import LastSec from "../home/lastsec";

export default function MainActivity() {
  return (
    <div>
      <HeroActivitein />
      <Bezien />
      <VeelMeer />
      <Calban />
      <LastSec />
    </div>
  );
}
