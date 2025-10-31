import{
    criarUsuario,
    listarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario
} from "../controllers/usuarios.controller.js"
const express = require("express")
const app = express()

const router = app.Router();
router.get("/", listarUsuario)
router.post("/",criarUsuario);
router.get("/:id", obterUsuario);
router.put("/:id",atualizarUsuario);
router.delete("/:id", deletarUsuario)
