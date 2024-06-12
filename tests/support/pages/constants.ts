
require('dotenv').config()

//BOTOES FRONT
export const APP_URL = "/"
export const BOTAO_CREATE = "//button[@type='submit']"
export const BOTAO_REMOVE = "//button[@type='submit']"
export const CAMPO_DIGITA = "//input[@type='text']"
export const CAMPO_NOME_CRIADO = value => `//div[@data-testid='task-item']/p[contains(text(),'${value}')]`
export const BOTAO_DELETA = value => `//div[@data-testid='task-item']/p[contains(text(),'${value}')]/../button[contains(@class,"DeleteButton")]`

//APIS
const BASE_API = process.env.BASE_API
export const POST_CARD = `${BASE_API}/tasks`
export const DELETE_CARD = id => `${BASE_API}/tasks/${id}`
export const GET_CARDS = `${BASE_API}/tasks`
export const UPDATE_CARD = id => `${BASE_API}/tasks/${id}`