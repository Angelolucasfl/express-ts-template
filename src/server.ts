import app from "./app";
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server runing on http://127.0.0.1:${port}`);
});
