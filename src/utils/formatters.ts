export const formatPage = (page: any) => {
  return Number.isNaN(Number(page)) ? 1 : Math.max(Number(page), 1)
}
