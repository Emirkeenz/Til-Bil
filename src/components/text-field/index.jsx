import styled from 'styled-components'

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 0 20px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.body};
  font-size: 16px;
  width: 100%;
`

export const TextField = (props) => {
  return (
    <Input 
      {...props}
    />
  )
}