export type BlackListApi = {
    check: (value: string) => Promise<{
        rating: number
        comment: string
    }>
}