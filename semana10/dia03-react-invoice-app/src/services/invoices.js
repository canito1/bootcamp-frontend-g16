const API_URL = import.meta.env.VITE_API_URL

export const fetchInvoices = async () => {
  const url = `http://localhost:3000/invoices`

  const response = await fetch(url)

  const data = response.json()

  return data
}
