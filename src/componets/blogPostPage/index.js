import React from "react";
import HeroBlogPost from "./herobanner";
import Saiizilo from "./saiizilosec1";
import WonenMurcia from "./Wonen";
import MurciaLast from "./murcialast";
import EndSec from "./endsec";
import LastSec from "../home/lastsec";

export default function BlogPostPg() {
  return (
    <div>
      <HeroBlogPost />
      <Saiizilo />
      <WonenMurcia />
      <MurciaLast />
      <EndSec />
      <LastSec />
    </div>
  );
}
