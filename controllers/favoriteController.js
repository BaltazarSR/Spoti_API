import favoriteModel from "../models/favoriteModel.js"

const favoriteController = {
    createFavorite: async (req, res) => {
        try {
            const userId = req.params.userId;
            const favoriteData = req.body;


            console.log(userId);
            console.log(favoriteData);
            const newFavorite = await favoriteModel.createFavorite(userId, favoriteData);
            res.status(201).json(newFavorite);

        } catch (error) {
            console.error("Error creating favorite:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export default favoriteController;