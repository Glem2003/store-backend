const convertToArray = (data: any) => {
    const categoryMap: Record<string, Set<string>> = {}
    for (const { mainCategory, subCategory } of data) {
        if (!mainCategory || !subCategory) continue
        if (!categoryMap[mainCategory]) {
            categoryMap[mainCategory] = new Set()
        }
        categoryMap[mainCategory].add(subCategory)
    }

    const result: Record<string, string[]> = {}
    for (const [main, subSet] of Object.entries(categoryMap)) {
        result[main] = Array.from(subSet)
    }
    return result
}

export default convertToArray