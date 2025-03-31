import {prisma} from "../config/db.js"

    async function createUser(name, email, insta){

        const newUser = await prisma.users.create({
            data:{
                name:name,
                email:email,
                insta:insta
            }
        })

        return newUser
    }

    async function findUser(email){

        const user = await prisma.users.findUnique({
            where:{
                email
            }
        })

        return user
        
    }



export {createUser, findUser}