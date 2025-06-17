const express = require("express");
const app = express();
const groupmembersRoute = require("./routes/groupmembers");
const PORT = 5000;

app.use(express.json());

// Routes
app.use("/api/groupmembers", groupmembersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
