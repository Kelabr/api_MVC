const userController = {
    async showOk(req, res){
        res.send({message:"OK, deu certo o modelo MVC"})
    }
}

export {userController}