# ⏰TimerApp⏰
Application to host timer activities with others. Minimalist design and function centered around easy usability across all platforms. Set a session duration, share a todo lists and countdown together.

### 🧠Brain dump🧠 for 🔨building🔨 out the 🕸website🕸:

#### 📚Technology stack📚:
* [React](https://reactjs.org/) (frontend)
    - styled using [ChakraUI](https://chakra-ui.com/)
    - link **suffix** generation using [nanoid](https://github.com/ai/nanoid)
    - library to host a shared session for the chat, sending an invite link, and sharing a session with each other

#### 📃Tasks/Todo📃:

* implement todo list 
* implement shared session (todo list updates in real time on everyone's screen)
* implement link to create a session
* implement chat functionality (wishlist)
* decide where to host
* decide how to host reactjs app

#### 📝Notes📝

* For creating the webserver, the custom url should be created after the user opts to create a room avoid creating a room unecessarily.
##### Resources
 * [basic timer reference (first implementation)](https://www.youtube.com/watch?v=9z1qBcFwdXg&t=303s&ab_channel=AleksPopovic)
 * [around two minutes shows realtime todo list using socket.io](https://www.youtube.com/watch?v=YIRXIe_bZok&ab_channel=MicheleRiva )
 * [circular progress bar implementation](https://www.youtube.com/watch?v=B1tjrnX160k&t=247s&ab_channel=CodingWithDawid)

##### Process for handling room creation
1. User arrives at the home url ending in '/'
2. User clicks the create room to generate a url to share. i.e timerapp.com/few3!vf
   * This also redirects the user to that same url so they are in the same room.
