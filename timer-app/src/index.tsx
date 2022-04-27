import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { JoinedRoomContext } from "./App"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { reducer } from "./reducers/bankingReducer"

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
    <React.StrictMode>
      <ColorModeScript />
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":roomId" element={
            <App />
        } />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

    </React.StrictMode>
  </BrowserRouter>
  </Provider>
,
  document.getElementById("root"),
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
