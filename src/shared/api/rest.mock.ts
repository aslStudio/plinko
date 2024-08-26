import { BlackListApi } from './types'

export const blackListApi: BlackListApi = {
    async check() {
        return {
            rating: 5.0,
            comment: 'Платит исправно. Прораб, заказывает на свои объекты. Проблем никогда не было.'
        }
    }
}