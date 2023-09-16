import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../styles/adaptive';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;

  ${media.lg`
    width: 600px;
  `}
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
`

const LinkUnder = styled(Link)`
  font-size: 16px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  margin-top: 20px;
`

export const Form = ({ children, error, onSubmit, title, btnText = 'Save', linkUnder }) => {
  return (
    <FormContainer>
      {title && <Title>{title}</Title>}
      {children}
      {error && <Error>{error}</Error>}
      {linkUnder && (
        <LinkUnder to={linkUnder.path}>{linkUnder.text}</LinkUnder>
      )}
    </FormContainer>
  )
} 