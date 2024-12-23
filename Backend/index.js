const express = require("express");
const cors = require("cors");
require("dotenv").config();
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const authRoute = require("./routes/authRoute");
const doctorsRoute = require("./routes/doctorsRoute");
const appointmentsRoute = require("./routes/appointmentsRoute");
const connectToDB = require("./DB/connectToDB");
const app = express(xss());
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
connectToDB();
app.use(express.json());
app.use("/api/rest/authRoute", authRoute);
app.use("/api/rest/doctorsRoute", doctorsRoute);
app.use("/api/rest/appointmentsRoute", appointmentsRoute);
// Error handling middlewares
// app.use(notFound);
// app.use(errorHandler);

app.listen(process.env.PORT || 4000, () => {
  console.log("server started");
});
