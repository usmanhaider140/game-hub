import React from "react";

// import "bootstrap/dist/css/bootstrap.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme={"teal"}>Button</Button>
    </ChakraProvider>
  );
}

export default App;
