import userModel from "../models/userModel.js";

const userController = {
    getAllUsers: async(req, res) => {
        try {
            const user = await userModel.getAllUsers();
            res.status(200).json(user);
        }
        catch (error) {
            console.log("Error ferching users:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getUserById: async(req, res) => {
        const {id} = req.params;
        try {
            const user = await userModel.getUserById(id);
            res.status(200).json(user)
        } catch (error) {
            console.log("Error ferching users:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createUser: async (req, res) => {
        const userData = req.body;
        console.log(req.body);
        try {
            const newUser = await userModel.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const userData = req.body;
        try {
            const updateUser = await userModel.updateUser(id, userData);
            res.status(200).json(updateUser);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
}

export default userController;