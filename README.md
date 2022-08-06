# ⏰TimerApp⏰
Application to host timer activities with others. Minimalist design and function centered around easy usability across all platforms. Set a session duration, share a todo lists and countdown together.

### 🧠Brain dump🧠 for 🔨building🔨 out the 🕸website🕸:

#### 📚Technology stack📚:
* [React](https://reactjs.org/) (frontend)
    - styled using [ChakraUI](https://chakra-ui.com/)
    - link suffix generation using [nanoid](https://github.com/ai/nanoid)
    - created a room using [Socket.IO](https://socket.io/)
    - library to host a shared session for the chat, sending an invite link, and sharing a session with each other
    - client side routing using [react-router](https://reactrouter.com)
    - 

#### 📃Tasks/Todo📃:

* implement todo list 
* implement shared session (todo list updates in real time on everyone's screen)
* implement link to create a session
* implement chat functionality (wishlist)
* implement security with okta (wishlist) https://developer.okta.com/blog/2021/07/14/socket-io-react-tutorial
* decide where to host
* decide how to host reactjs app

#### 📝Notes📝

* For creating the webserver, the custom url should be created after the user opts to create a room avoid creating a room unecessarily.

### 👨‍💼Design decisions👨‍💼
* Chose went with Chakra UI because it looked cool
* Chose TypeScript to avoid typing errors
* Going with Socket instead of WebSocket for the out of box functionality. I am aware it might be worse for performance, but the interface looks robust enough for a beginner.

#### Resources
 * [basic timer reference (first implementation)](https://www.youtube.com/watch?v=9z1qBcFwdXg&t=303s&ab_channel=AleksPopovic)
 * [around two minutes shows realtime todo list using socket.io](https://www.youtube.com/watch?v=YIRXIe_bZok&ab_channel=MicheleRiva )
 * [circular progress bar implementation](https://www.youtube.com/watch?v=B1tjrnX160k&t=247s&ab_channel=CodingWithDawid)
 * [using firebase and namecheap](https://dev.to/happyharis/firebase-hosting-with-namecheap-domains-30gk)
 * [deployment](https://www.youtube.com/watch?v=1wZw7RvXPRU&ab_channel=CleverProgrammer)


#### Process for handling room creation
1. User arrives at the home url ending in '/'
2. User clicks the create room to generate a url to share. i.e timerapp.com/few3!vf
   * This also redirects the user to that same url so they are in the same room.

#### 🐛🐜BUGS🐜🐛
* Need to understand and anticipate [CORS issue](https://www.youtube.com/watch?v=hxyp_LkKDdk&ab_channel=HongLy), also [usedful](https://www.thesslstore.com/blog/ssl_error_rx_record_too_long/) (this might have been avoided?)

## Milestones
🏆2.13🏆
* broke ground and piece together front end with timer function and themed ui
* started server and realtime connectivity

🏆2.14🏆
* connected front to backend after working on the problem all day

🏆2.20🏆
* 🗣talked about use case more 🗣
* 💳 Bought domain 💳
* 🚀deployed [landing page](https://knightsofthestudytable.com/) 🚀

🏆3.1🏆
* Added dynamic client side routing for room feature 

🏆4.27🏆
* Picked the project back up and start cleaning up code

🏆8.5🏆
* Picked the project back up again and reorienting from where I left off. Deciding to pivot to a different approach: instead of having a timer that create a room, there will first be a landing page welcoming the user to the website(LandingPage), followed by some animation to the next view prompting the user if they would like to study alone, create a room or join a room.
* For the transition for the landing page, was thinking of having some night clashing  to the next screen prompting the user what they want to do

🏆8.6🏆
* Added buttons for user on the landing page and setup hiding of buttons once create/join table is clicked