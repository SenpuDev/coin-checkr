import { useEffect, useState } from 'react'
const useGetCryptos = () => {
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    const getCryptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url)
      const data = await response.json()

      const arrayCripto = data.Data.map(crypto => {
        const objectCrypto = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return objectCrypto
      })

      setCryptos(arrayCripto)
    }

    getCryptos()
  }, [])

  return { cryptos }
}

export default useGetCryptos
