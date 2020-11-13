export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const delteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        pid: productId
    }
}