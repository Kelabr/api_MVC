import { userController } from "../controller/userController.js"


export default function useRouter(app, options){

    app.get("/user",userController.showOk)

    app.post("/user",userController.createUser)

    app.post("/login",userController.login)
}