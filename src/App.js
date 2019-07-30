import React from "react";
import "./App.css";
import Profile from "./img/profile.jpg";
import GitHub from "./img/github.png";

import Card from "./objects/Card";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutAvatar from "./objects/AboutAvatar";
import TitleGame from "./objects/TitleGame";
import DescriptionGame from "./objects/DescriptionGame";
import IconSocial from "./objects/IconSocial";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Hashtag />
      </Card>
      <Checkbox id="show" value="Mostrar eventos" />
      <About>
        <HeaderInternal />
        <AboutAvatar src={Profile} alt="Profile do Marco Bruno" />
        <TitleGame content="Marco Bruno" />
        <DescriptionGame content="Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer de código, instrutor e dev na CollabCode" />

        <IconSocial src={GitHub} alt="Logo do GitHub" />
      </About>
    </>
  );
}

export default App;
