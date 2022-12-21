import "./scss/app.scss";
import Application from "./js/Application";
import anime from "animejs";


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  let article = document.querySelector('.article');
  
  article.addEventListener("click", ()=>{
    app.emit("click")
  })
  
  // Used to access the app instance by the automated tests
  window.__JS_APP = app;
});
