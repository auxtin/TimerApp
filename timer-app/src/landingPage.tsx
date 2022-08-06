import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

function LandingPage() {
    return (
        <div>
            <div >
                <h1> Hi! Welcome to Knights of the Study Table</h1>
                <p>Knights of the Study Table is a place where you can meet up with other knights to get stuff done.</p>
            </div>
            <div>
                <h4>What would you like to do?</h4>
                <Stack direction='column' align='center' spacing={4}>
                    <Button>Study Alone</Button>
                    <Button size='lg'>Create a Study Table</Button>
                    <Button size='lg'>Join a Study Table</Button>
                </Stack>
            </div>
        </div>
    );
}


// from this landing page

export default LandingPage;