import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useGetCoinValue = () => {
  const MySwal = withReactContent(Swal)

  const [objectQuery, setObjectQuery] = useState({})
  const [obtainedData, setObtainedData] = useState({})

  // API
  useEffect(() => {
    if (Object.keys(objectQuery).length > 0) {
      const getCryptoValue = async () => {
        const { cryptoCoin, coin } = objectQuery
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`
        const response = await fetch(url)
        const data = await response.json()
        setObtainedData(data.DISPLAY[cryptoCoin][coin])
      }
      getCryptoValue()
    }
  }, [objectQuery])

  // Data obtained? then show swal
  useEffect(() => {
    if (obtainedData.PRICE) {
      const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE } = obtainedData
      MySwal.fire({
        title: `${PRICE}`,
        html: `
            <p>Highest price in day: <span>${HIGHDAY}</span></p>
            <p>Lower price in day: <span>${LOWDAY}</span</p>
            <p>Last update: <span>${LASTUPDATE}</span</p>
            `,
        imageUrl: `https://cryptocompare.com${IMAGEURL}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
    }
  }, [obtainedData])

  return { setObjectQuery }
}

export default useGetCoinValue
