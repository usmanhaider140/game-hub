import React, { useState } from "react";

// import "bootstrap/dist/css/bootstrap.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { GameGrid } from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList/PlatformList";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr ",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>{" "}
      <Show above={"lg"}>
        {" "}
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector />
        <GameGrid genre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
