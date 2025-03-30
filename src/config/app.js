import fastify from "fastify";
import useRouter from "../router/useRouter.js"
import prodRouter from "../router/prodRouter.js";

const app = fastify()

app.register(useRouter, {prefix:"api"})
app.register(prodRouter, {prefix:"prod"})

export {app}