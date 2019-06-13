const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const cors = require("cors");
app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/hubble", (req, res) => {
  axios.get("http://hubblesite.org/api/v3/image/5").then(response => {
    res.send(response.data);
  });
});
