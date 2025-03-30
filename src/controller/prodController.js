const prodController = {
    async showOk(req, res){
        res.send({message:"OK, deu certo o modelo MVC na roat de 'PROD'"})
    }
}

export {prodController}