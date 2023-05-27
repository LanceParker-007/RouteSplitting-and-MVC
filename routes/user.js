import express from "express";
import { deleteUser, getAllUsers, getUserDetails, register, updateUser } from "../controllers/user.js";
const router = express.Router();


//USER API routes
router.get("/all", getAllUsers);
router.post("/new", register);
// router.get("/userid/:id", getUserDetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);
// If we have same routes then what we can do is
router
    .route("/userid/:id")
    .get(getUserDetails)
    .put(updateUser)
    .delete(deleteUser);


export default router;