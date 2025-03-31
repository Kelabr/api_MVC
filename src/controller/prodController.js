import { createProd } from "../model/prodModel.js"

const prodController = {
    async showOk(req, res){
        res.send({message:"OK, deu certo o modelo MVC na roat de 'PROD'"})
    },

    async createProd(req, res){
        const {name, locality} = req.body

        try{
            const newProd = await createProd(name, locality)

            if(!newProd){
                console.log("Erro ao criar produto")
                return res.status(403).send({message:"Erro ao criar produto"})
            }
        }catch(error){
            console.error("Erro ao cadastrar produto", error)
            return res.status(403).send({message:"Erro ao tentar garvar dados"})
        }

        res.status(200).send({message:"Produto Cadastrado"})


        
    }
}

export {prodController}