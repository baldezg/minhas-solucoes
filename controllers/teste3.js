let  data =  require("../fakeData");

const deleteUser = (req, res) => {
    
    const { id } = req.params;

    try {
    const user = data.find(( user ) => user.id === Number(id));

    if (!user) {
        return res.status(404).send({ message: `No person with id ${id}` });
      }
    
    const filteredUsers = data.filter((user) => user.id !== Number(id));

    data.splice(user, 1);

    return res.status(200).json({ success: true, data: filteredUsers })

  } catch (err) {
    res.status(500).send({
      error: err
    });
  }
};

module.exports = deleteUser;