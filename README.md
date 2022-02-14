# ⏰TimerApp⏰
Application to host timer activities with others. Minimalist design and function centered around easy usability across all platforms. Set a session duration, share a todo lists and countdown together.

### 🧠Brain dump🧠 for 🔨building🔨 out the 🕸website🕸:

#### 📚Technology stack📚:
* [React](https://reactjs.org/) (frontend)
    - styled using [ChakraUI](https://chakra-ui.com/)
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

##### Process for handling room creation
1. User arrives at the home url ending in '/'
2. User clicks the create room to generate a url to share. i.e timerapp.com/few3!vf
   * This also redirects the user to that same url so they are in the same room.