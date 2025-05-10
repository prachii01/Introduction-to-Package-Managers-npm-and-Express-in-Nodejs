
// index.js
import boxen from "boxen";
import chalk from "chalk";
import randomWords from "random-words";
import express from "express";
import fs from "fs";
import os from "os";
import dns from "dns";
import { customMessage } from "./fun.js";

// Task 1: Boxen
const message = boxen("Welcome to Node.js Tasks!", { padding: 1, borderColor: "green", borderStyle: "double" });
console.log(message);

// Task 2: Chalk
console.log(chalk.blue("This is a chalk-colored message."));
console.log(chalk.red.bgWhite("Red text with white background!"));

// Task 3: Random words + custom module
console.log(chalk.yellow("Random Word:"), randomWords());
console.log(customMessage());

// Task 4 and 5: Express server with routes
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Server!");
});

app.get("/file", (req, res) => {
  const data = fs.readFileSync("Data.txt", "utf-8");
  res.send(`<pre>${data}</pre>`);
});

app.get("/os", (req, res) => {
  const info = {
    hostname: os.hostname(),
    platform: os.platform(),
    freemem: os.freemem()
  };
  res.json(info);
});

app.get("/dns", (req, res) => {
  dns.lookup("example.com", (err, address) => {
    if (err) res.send("DNS Lookup Failed");
    else res.send(`IP address of example.com is ${address}`);
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
