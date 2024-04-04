console.log(1);

fetch("https://itunes.apple.com/search?term=syntax")
  .then((response) => {
    // return response.text();
    return response.json();
  })
  .then((data) => {
    console.log("itunes API data", data.resultCount);
  });

console.log(2);
