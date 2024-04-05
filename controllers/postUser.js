const { User } = ("--/DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(email && password) {
            const newUser = User.findOrCreate({
                where: {  }
            })
        }
        return res.status(400).send("Faltan datos")
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

module.exports = postUser;