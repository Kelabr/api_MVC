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



export {createUser}