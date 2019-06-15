const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const cors = require("cors");
app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/hubble", (req, res) => {
  axios.get("http://hubblesite.org/api/v3/image/3").then(response => {
    res.send(response.data);
  });
});

app.get("/hubble/:id", (req, res) => {
  const id = req.params.id;
  axios.get(`http://hubblesite.org/api/v3/image/${id}`).then(response => {
    res.send(response.data);
  });
});

app.get("/spaceX", (req, res) => {
  axios.get("https://api.spacexdata.com/v3/launches/latest").then(response => {
    res.send(response.data);
    console.log(response.data);
  });
});
