import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Timer from "./timer";
import RoomLink from "./roomLink";
import './App.css';
// import { Logo } from "./Logo"

export const JoinedRoomContext = React.createContext("Not in a room");

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
      <Grid minH="10vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Timer/>
          {/* <RoomLink/> */}
          </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
