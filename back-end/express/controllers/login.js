

const user = {
    username: "anas",
    password: "rocher"
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (user.username == username && user.password == password) {
            res.status(301).redirect();
        } else {
            res.status(401).json({error: true, message: "false credentials"});
        }
        return
    } catch {

    }
}

module.exports = {login}