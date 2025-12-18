import Framework7 from "framework7";

const app = new Framework7({
  el: "#app",
  name: "Para fazer",
  panel: {
    swipe: true,
  },
});

const mainView = app.views.create(".view-main");
