import {prisma} from "../config/db.js"

async function createProd(name, locality){

    const newProd = await prisma.products.create({
        data:{
            name:name,
            locality:locality
        }
    })

    return newProd
}

export {createProd}