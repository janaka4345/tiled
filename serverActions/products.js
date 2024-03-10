'use server'

import axios from "axios"

export async function products(param) {
    console.log({ param });

    const response = await axios.get('https://dummyjson.com/products'
        , {
            params: {
                limit: 5,
                skip: (param - 1) * 5
            }
        }
    )
    const products = response?.data?.products
    return products
}