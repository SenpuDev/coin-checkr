import { ErrorText } from './styled/styledComponents'

const Error = ({ children }) => {
  return (
    <ErrorText>
      {children}
    </ErrorText>
  )
}

export default Error
