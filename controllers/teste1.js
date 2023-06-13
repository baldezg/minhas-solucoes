const data =  require("../fakeData");

const getUser = ( req, res ) => {
    
    const { id } = req.params;

    try {
        const user = data.find(user => user.id === Number(id));
        
        if (!user ) {
            return res.status( 404 ).send({
                error: "User not found"
            });
    }
    
    user.views++;

    return res.send(user);
    } catch (err) {
        res.status( 500 ).send({
            error: err
    });
};
}
const getUsers = ( req, res ) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};