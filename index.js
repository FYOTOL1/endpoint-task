const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// مسار للترحيب

// مسار لعرض ملف JSON
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the JSON file:", err);
      res.status(500).json({ message: "Error reading the JSON file" });
      return;
    }

    try {
      const products = JSON.parse(data);
      res.json(products);
    } catch (err) {
      console.error("Error parsing the JSON file:", err);
      res.status(500).json({ message: "Error parsing the JSON file" });
    }
  });
});

const PORT = 3999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
