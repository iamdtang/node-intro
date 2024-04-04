const express = require("express");

const app = express();

app.get("/itunes", (request, response) => {
  const term = request.query.term || "wecrashed";
  fetch(`https://itunes.apple.com/search?term=${term}`)
    .then((response) => {
      return response.json();
    })
    .then((itunesResponse) => {
      response.json(itunesResponse);
    });
});

app.listen(8000);
