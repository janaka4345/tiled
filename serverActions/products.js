'use server'

import axios from "axios"

export async function products(limit = 10, skip = 10) {
    const products = await axios.get('https://dummyjson.com/products'
        , {
            params: {
                limit,
                skip
            }
        }
    )
    return products.data
}