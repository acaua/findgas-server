const express = require("express");
const cors = require("cors");

const gasStations = require("./routes/gasStations");

const app = express();

app.use(cors());

app.use("/api/gasstations", gasStations);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
