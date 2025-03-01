require("dotenv").config();
// Loads environment variables from a .env file into process.env for secure configuration.

const express = require("express");
// Imports the express framework to create a web server and handle routing.

const cors = require("cors");
// Imports CORS (Cross-Origin Resource Sharing) middleware to allow cross-origin requests.

const mongoose = require("mongoose");
// Imports mongoose to interact with MongoDB database.

const authRotes = require("./routes/auth-routes/index.js");
const mediaRoutes = require("./routes/instructor-routes/media-routes.js");
const instructorCourseRoutes = require("./routes/instructor-routes/course-routes.js");
const studentViewCourseRoutes = require("./routes/student-routes/course-routes.js");
const studentViewOrderRoutes = require("./routes/student-routes/order-routes.js");


const app = express();
// Initializes an Express app instance to handle HTTP requests.

const PORT = process.env.PORT || 5000;
// Defines the port for the server to listen on. Defaults to 5000 if not defined in environment variables.

const MONGO_URI = process.env.MONGO_URI;
// Retrieves the MongoDB URI from environment variables to connect to the database.

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    // Defines the allowed origin (client URL) for requests.
    methods: ["GET", "POST", "DELETE", "PUT"],
    // Specifies the allowed HTTP methods for cross-origin requests.
    allowedHeaders: ["Content-Type", "Authorization"],
    // Defines the allowed headers in the request.
  })
  // Configures CORS options to control which domains can make requests to this server.
);

app.use(express.json());
// Middleware to parse incoming requests with JSON payloads.

// Database connection
mongoose
  .connect(MONGO_URI) // Establishes a connection to the MongoDB database using the URI defined in the environment variable.
  .then(() => console.log("mongoose is connected")) // Logs a success message when the connection is successful.
  .catch((e) => console.log(e)); // Catches and logs any errors that occur during the connection process.

//routes configuration
app.use("/auth", authRotes);
app.use("/media", mediaRoutes);
app.use("/instructor/course", instructorCourseRoutes)
app.use("/student/course", studentViewCourseRoutes)
app.use("/student/order", studentViewOrderRoutes)


app.use((err, req, res, next) => {
  console.log(err.stack);
  // Logs the error stack trace for debugging.
  res.status(500).json({
    success: false,
    // Indicates that the request was not successful.
    message: "something went wrong",
    // A generic error message to be sent back to the client.
  }); // Sends a 500 status code (Internal Server Error) response with a JSON error message.
}); // Error-handling middleware to catch and process errors during request handling.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // Logs a message to confirm the server is running.
}); // Starts the Express server and listens for incoming requests on the specified port.
