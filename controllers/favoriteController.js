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
    },
    getFavoriteByUserId: async(req, res) => {
        const {userId} = req.params;
        try {
            const user = await favoriteModel.getFavoriteByUserId(userId);
            res.status(200).json(user)
        } catch (error) {
            console.log("Error ferching favorites:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default favoriteController;