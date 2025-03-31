import { prodController } from "../controller/prodController.js"



export default function prodRouter(app, options){

    app.get("/prod",prodController.showOk)

    app.post("/prod",prodController.createProd)
}