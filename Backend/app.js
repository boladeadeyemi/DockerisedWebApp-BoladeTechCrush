const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const groupmembersRoute = require("./routes/groupmembers");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",   // Allow requests from the React app
  methods: ["GET", "POST"], // Specify allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
// Routes
app.use("/api/groupmembers", groupmembersRoute);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
