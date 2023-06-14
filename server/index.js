const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const helmet = require("helmet");
const chalk = require('chalk');
const mongoose = require("mongoose");

// express app
const app = express();

const CartRouter = require("./routes/Cart.routes");
const UserRouter = require("./routes/User.routes");
const ProductRouter = require("./routes/Product.routes");
const errorHandler = require("./middlewares/errorHandler");
// const sendMessageToEmail = require("./utility/sendMessageToEmail");

const port = 4000 || process.env.PORT;

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(morgan('tiny'))
app.use(helmet())

mongoose.set('strictQuery', false);
// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.green("Database connection successful!")))
  .catch((err) => console.log(chalk.red(err)));

// app.use(sendMail)

// all routes
app.use("/api/user", UserRouter);
app.use("/api/cart", CartRouter);
app.use("/api/product", ProductRouter);

app.get("/", async (req, res) => {
  // const result = await sendMessageToEmail('mehedihasannabil49@gmail.com', 'Sending Email using Node.js', "That was easy")
  // console.log(result)
  res.json({
    message: "Hello World"
  })
})

// app.post("/mail", sendMail)

app.use(errorHandler)


app.listen(port, () => {
  console.log()
  console.log(chalk.yellow('/'))
  console.log(chalk.yellow('/api/user'))
  console.log(chalk.yellow('/api/product'))
  console.log(chalk.yellow('/api/cart'))
  // console.log(chalk.yellow('/api/service'))
  console.log()
  console.log(`Server is running on http://localhost:${port}`);
  console.log()
});
