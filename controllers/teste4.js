let data =  require("../fakeData");

const updateUser = ( req, res) => {
    const { id } = req.params;
    const { name, job } = req.body;

    const user = data.find(user => user.id === Number(id));
    console.log(user)
    if (!user) {
        return res.status(404).json({ satisfies: false, message: `No user with id: ${id} exists.`  });
    }
    
    user.name = name || user.name;
    user.job = job || user.job;
    
    return res.status(200).json({ satisfies: true, data: user });
}

module.exports = updateUser;