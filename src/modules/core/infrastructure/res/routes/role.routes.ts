import { getRoles, getRoleByPk, createRole, updateRole } from "../controllers/role.controller";
import { validateToken } from "../../../../../config/middleware/token.middleware"; 
import { Router } from "express";

const roleRouter = Router()

roleRouter.get('/', [validateToken, getRoles])
roleRouter.get('/:id', [validateToken, getRoleByPk])
roleRouter.post('/', [validateToken, createRole])
roleRouter.put('/', [validateToken, updateRole])

export default roleRouter;
