import fastify from "fastify";
import useRouter from "../router/useRouter.js"
import prodRouter from "../router/prodRouter.js";
import cors from "@fastify/cors"

const app = fastify()

app.register(useRouter, {prefix:"api"})
app.register(prodRouter, {prefix:"prod"})

app.register(cors, {
    origin: "http://localhost:3000",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})

export {app}