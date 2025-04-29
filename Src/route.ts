import expPromiseRouter from "express-promise-router"; 
import { inserting_UsersData, UserData_Fetching, deleteUserHandler, UpdateUserHandler } from "./controller.ts";


const router = expPromiseRouter();  

router.get("/fetch", UserData_Fetching);
router.post("/insert", inserting_UsersData);
router.delete("/delete/:id", deleteUserHandler);
router.put("/update/:id", UpdateUserHandler); 





export default router;
