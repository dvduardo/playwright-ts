import { type Page, type TestInfo, expect } from "@playwright/test"
import { BOTAO_CREATE, BOTAO_DELETA, CAMPO_DIGITA, CAMPO_NOME_CRIADO } from "../constants"

export class TaskPages {
    private readonly page: Page
    private readonly testInfo: TestInfo

    constructor(page: Page, info: TestInfo) {
        this.page = page
        this.testInfo = info
    }

    async addEvidence(name: string) {
        let screenshotPath = `screenshots/${name}.png`
        await this.page.screenshot({ path: screenshotPath })
        this.testInfo.attachments.push({ name, path: screenshotPath, contentType: 'image/png' })
    }

    async goToUrl(url: string) {
        await this.page.goto(url)
        await this.addEvidence(`print_acessa_url_${Date.now()}`)
    }

    async createTask(task_name: string) {
        await this.page.fill(CAMPO_DIGITA, task_name)
        await this.addEvidence(`print_adiciona_nova_task_${Date.now()}`)
        await this.page.click(BOTAO_CREATE)
    }

    async validateIfTaskExists(task_name: string) {
        let card_criado = this.page.locator(CAMPO_NOME_CRIADO(task_name))
        await card_criado.scrollIntoViewIfNeeded()
        expect(card_criado).toBeVisible()
        await this.addEvidence(`print_task_criada_${Date.now()}`)
    }

    async removeTask(task_name: string) {
        const apaga_card = this.page.locator(BOTAO_DELETA(task_name))
        await apaga_card.scrollIntoViewIfNeeded()
        expect(apaga_card).toBeVisible()
        await apaga_card.click()
        await this.addEvidence(`print_task_removida_${Date.now()}`)
    }

    async validateIfTaskDoenstExists(task_name: string) {
        const card_criado = this.page.locator(CAMPO_NOME_CRIADO(task_name))
        await expect(card_criado).toHaveCount(0)
        await this.addEvidence(`print_task_nao_encontrada_${Date.now()}`)
    }
}