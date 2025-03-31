import { createUser, findUser } from "../model/userModel.js"

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
    },

    async login(req, res) {
        const {email, password} = req.body

        try{
            const user = await findUser(email)

            if(!user){
                return res.status(404).send({message:"Usuário não encontrado"})
            }
    
            if(user.password != password){
                return res.status(404).send({message:"Senha ou email invalidos"})
            }
        }catch(error){
            console.error("ERROR", error)
        }

        res.status(200).send({message:"Usuário logado"})
        console.log("logado")

    }
}

export {userController}