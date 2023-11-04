import React from "react";

// import "bootstrap/dist/css/bootstrap.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>{" "}
      <Show above={"lg"}>
        {" "}
        <GridItem area={"aside"} bg={"gold"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
