import { createUser } from "../model/userModel.js"

const userController = {
    async showOk(req, res){
        res.send({message:"OK, deu certo o modelo MVC"})
    },

    async createUser(req, res){
        const {name, email, insta} = req.body


        try{
            const newuser = await createUser(name, email, insta)

            if(!newuser){
                console.log("Usuário não cadastrado")
            }

        }catch(error){
            console.error("Erro ao cadastrar o usuário", error)
        }

        return res.status(200).send({message:"Usuário Cadastrado"})
    }
}

export {userController}