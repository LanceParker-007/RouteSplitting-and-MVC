import admin from "../databaseConnection/firebaseConfig.js";
const db = admin.firestore();
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {

    // To access query params
    // console.log(req.query.keyPai(Keyname));
    try {
        const RegisteredUsers = await db.collection("Users").get();
        const Users = RegisteredUsers.docs.map((doc) => ({
            userId: doc.id,
            ...doc.data(),
        }));
        console.log("Users fetched successfully!");
        return res.json({
            success: true,
            Users: Users,
        });
    } catch (error) {
        console.log("Some error occurred while fetching all users.");
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Failed to fetch users",
        });
    }
}

export const register = async (req, res) => {

    try {
        let { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = {
            name: name,
            email: email,
            password: hashedPassword
        }

        const UserRef = await db.collection("Users").add(User);
        return res.status(200).send(`User registered with id: ${UserRef.id}`);
    } catch (err) {
        console.log("Some error occured");
        res.status(400).send(`Some error occured: ${err}`);
    }
}

export const getUserDetails = async (req, res) => {
    const { id } = req.params;
    const userRef = (await db.collection("Users").doc(id).get());
    const userDetails = userRef.data();

    res.json({
        success: true,
        userDetails
    })
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const userRef = (await db.collection("Users").doc(id).get());
    // const userDetails = userRef.data();

    res.json({
        success: true,
        message: "updated",
    })
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    // const userRef = db.collection("Users").doc(id);
    // await userRef.delete();

    res.json({
        success: true,
        message: "delete",
    })
}