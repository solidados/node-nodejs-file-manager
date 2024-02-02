import openSession from "./src/module/openSession.js";
import readlineListener from "./src/module/readlineListeners.js";

const App = () => {
  openSession();
  readlineListener();
}

App();
