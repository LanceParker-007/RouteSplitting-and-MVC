import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port! ${process.env.PORT}`);
})