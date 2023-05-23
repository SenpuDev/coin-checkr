import Error from './Error'
import { useState } from 'react'
import useGetCryptos from '../hooks/useGetCriptos'
import useSelectCoins from '../hooks/useSelectCoins'
import useGetCoinValue from '../hooks/useGetCoinValue'
import { ButtonSubmitContainer, ButtonSubmit } from './styled/styledComponents'

const Form = () => {
  // Values for selects (options), need to API request to obtain cryptos
  const { cryptos } = useGetCryptos()
  const coins = [
    { id: 'USD', name: 'Dolar' },
    { id: 'EUR', name: 'Euro' },
    { id: 'MXN', name: 'Peso mexicano' },
    { id: 'GBP', name: 'Libra' }
  ]

  // Creates UI by cryptos & coins
  const [cryptoCoin, SelectCryptoCoin] = useSelectCoins('Select your', 'cryptocoin', cryptos)
  const [coin, SelectCoin] = useSelectCoins('Select your', 'coin', coins)

  const [error, setError] = useState(false)

  // API request by object
  const { setObjectQuery } = useGetCoinValue()

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([coin, cryptoCoin].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setObjectQuery({ coin, cryptoCoin })
  }

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoin />
        <SelectCryptoCoin />
        <ButtonSubmitContainer>
          <ButtonSubmit type='submit'>Check value</ButtonSubmit>
        </ButtonSubmitContainer>
      </form>
    </>
  )
}

export default Form
