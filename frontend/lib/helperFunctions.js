export const buildUrl=(url)=>{
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`
}

export const formatAmount=(amount) =>{
    const val = Math.abs(amount)
    if (val >= 10000000) return `${(amount / 10000000).toFixed(2)} Cr`
    if (val >= 100000) return `${(amount / 100000).toFixed(2)} Lac`
    return amount;
  }