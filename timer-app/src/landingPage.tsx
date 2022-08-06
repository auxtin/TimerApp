import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import CreateModal from "./CreateModal.js";
function LandingPage() {
  // state for handling modals for creating or joining a room
  const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false);
  const [isJoinRoomOpen, setIsJoinRoomOpen] = useState(false);
  // state to handle hiding other elements
  const [hide, setHide] = useState(true);
  return (
    <div>
      <div>
        <h1> Hi! Welcome to Knights of the Study Table</h1>
        <p>
          Knights of the Study Table is a place where you can meet up with other
          knights to get stuff done.
        </p>
      </div>
      <div>
        <h4>What would you like to do?</h4>
        <Stack direction="column" align="center" spacing={4}>
          {hide && <Button>Study Alone</Button>}
          {hide && (
            <Button
              size="lg"
              onClick={() => {
                setIsCreateRoomOpen(true);
                setHide(false);
              }}
            >
              Create a Study Table
            </Button>
          )}
          <CreateModal
            open={isCreateRoomOpen}
            onClose={() => setIsCreateRoomOpen(false)}
          >
            What is the table name?
            <FormControl>
              <FormLabel>Table Name:</FormLabel>
              <Input />
              <Button>Create Table</Button>
            </FormControl>
          </CreateModal>
          {hide && (
            <Button
              size="lg"
              onClick={() => {
                setIsJoinRoomOpen(true);
                setHide(false);
              }}
            >
              Join a Study Table
            </Button>
          )}
          <CreateModal
            open={isJoinRoomOpen}
            onClose={() => setIsJoinRoomOpen(false)}
          >
            What is the table name you would like to join?
            <FormControl>
              <FormLabel>Table Name:</FormLabel>
              <Input />
              <Button>Join Table</Button>
            </FormControl>
          </CreateModal>
        </Stack>
      </div>
    </div>
  );
}

// from this landing page

export default LandingPage;
