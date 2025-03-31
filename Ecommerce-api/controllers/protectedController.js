const getUserProfile = async (req, res) => {
    try {
        res.status(200).json({
            message: 'User profile retrieved successfully',
            user: req.user,  // getting decoded data
        })
    } catch (error) {
        res.status(500).json(
            { message: 'Server error', error }
        )
    }
};

module.exports= getUserProfile ;
