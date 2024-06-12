import { test } from "@playwright/test"
import { APP_URL } from "./support/pages/constants"
import { faker } from '@faker-js/faker';
import { TaskPages } from "./support/pages/tasks/taskPages";

let task

test("adicao de uma nova task", async ({ page }, testInfo) => {
    const task: TaskPages = new TaskPages(page, testInfo)
    const task_name = faker.person.firstName()
    //Quando eu acessar a url
    await task.goToUrl(APP_URL)
    //E adicionar uma nova task
    await task.createTask(task_name)
    //Entao validar se a task foi criado
    await task.validateIfTaskExists(task_name)
})

test("remocao de uma task", async ({ page }, testInfo) => {
    const task: TaskPages = new TaskPages(page, testInfo)
    const task_name = faker.person.firstName()
    //Quando eu acessar a url
    await task.goToUrl(APP_URL)
    //E adicionar uma nova task
    await task.createTask(task_name)
    //E buscar uma task ja criada
    await task.validateIfTaskExists(task_name)
    //Entao remover a task
    await task.removeTask(task_name)
    //Entao validar que a task nao existe
    await task.validateIfTaskDoenstExists(task_name)
})