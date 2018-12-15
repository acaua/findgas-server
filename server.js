const express = require("express");

const gasStations = require("./routes/gasStations");

const app = express();

app.use("/api/gasstations", gasStations);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
