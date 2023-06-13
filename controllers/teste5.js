const data =  require("../fakeData");

const userViews = (req, res) => {
    const name = req.query.name;
    
    const user = data.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    console.log(user)
    if (user && user.views) {
        res.send(`The user ${name} has been viewed ${user.views} ${user.views === 1 ? 'time' : 'times'}.`);
    } else {
        res.send(`Usuário ${name} não foi encontrado ou ainda não foi lido.`);
    }
};

module.exports = userViews;