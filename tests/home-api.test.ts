import { test, expect, request } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { DELETE_CARD, GET_CARDS, POST_CARD } from './support/pages/constants'

const card_name = faker.person.firstName()
let id_card

type Cards = {
    id: string,
    name: string,
    is_done: boolean,
    created_at: string,
}

test('Adicionar nova task atraves da API', async ({ }) => {

    const apiContext = await request.newContext()

    const data = {
        name: card_name,
        is_done: false,
    }

    const headers = {
        'Content-Type': 'application/json',
    }

    console.log('Enviando requisição POST para', POST_CARD)
    console.log('Dados da requisição:', JSON.stringify(data, null, 2))
    console.log('Header da requisição:', JSON.stringify(headers, null, 2))

    const response = await apiContext.post(POST_CARD, {
        data,
        headers
    })

    console.log('Status da resposta:', response.status())

    if (response.status() !== 201) {
        const responseBody = await response.json()
        console.log('Corpo da resposta de erro:', JSON.stringify(responseBody, null, 2))
    }

    expect(response.status()).toBe(201)


})

test('Buscar task criada atraves da API', async ({ }) => {

    const apiContext = await request.newContext()

    const headers = {
        'Content-Type': 'application/json',
    }

    console.log('Enviando requisição GET para', GET_CARDS)
    console.log('Header da requisição:', JSON.stringify(headers, null, 2))

    const response = await apiContext.get(GET_CARDS, {
        headers
    })

    expect(response.status()).toBe(200)

    console.log('Status da resposta:', response.status())

    const responseBody = await response.json()
    console.log('Corpo da resposta:', JSON.stringify(responseBody, null, 2))
    const data: Cards[] = await response.json()

    id_card = data.find(user => user.name == card_name)?.id
    expect(id_card).toBeDefined()
    console.log('Usuario encontrado com id:', id_card)

})

test('Remover task criada atraves da API', async ({ }) => {
    const apiContext = await request.newContext()

    const headers = {
        'Content-Type': 'application/json',
    }
    console.log('Enviando requisição DELETE para', DELETE_CARD(id_card))
    console.log('Header da requisição:', JSON.stringify(headers, null, 2))

    const response = await apiContext.delete(DELETE_CARD(id_card), {
        headers,
    })

    expect(response.status()).toBe(204)
})