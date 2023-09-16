import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Импорт библиотеки для HTTP запросов
import { Form } from '../../components/form';
import { TextField } from '../../components/text-field';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc'

const RegisterButton = styled.button`
  width: 70%;
  padding: 20px 60px;
  margin-right: auto;
  margin-left: auto;

  border: none;
  border-radius: 30px;
  color: #fff;
  background-color: #68C052;
`;

const RegisterWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoogleButton = styled.button`
  width: 70%;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 60px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 30px;
  color: #000;
  background-color: #fff;

  font-size: 16px;
  line-height: 24px;
`

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка POST запроса к API для регистрации
      const response = await axios.post('/api/register', form);

      if (response.status === 200) {
        // Успешная регистрация
        navigate('/login'); // Перенаправить пользователя на страницу входа после успешной регистрации
      } else {
        setError('Произошла ошибка при регистрации');
      }
    } catch (error) {
      setError('Произошла ошибка при регистрации');
    }
  };

  return (
    <RegisterWrapper>
      <h2>Катталуу</h2>
      <Form onSubmit={handleSubmit}>
        <h3>Аты</h3>
        <TextField
          type="text"
          name="firstName"
          placeholder="Имя"
          value={form.firstName}
          onChange={handleChange}
        />
        <h3>Фамилясы</h3>
        <TextField
          type="text"
          name="lastName"
          placeholder="Фамилия"
          value={form.lastName}
          onChange={handleChange}
        />
        <h3>Почтасы</h3>
        <TextField
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <h3>Сыр сөз</h3>
        <TextField
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
        />
        <h3>Сыр сөздү кайталоо</h3>
        <TextField
          type="password"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <GoogleButton><FcGoogle size={30}/> Google менен кирүү</GoogleButton>
        <RegisterButton type="submit">Катталуу</RegisterButton>
      </Form>
      {error && <p>{error}</p>}
      <p>
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </RegisterWrapper>
  );
};

export default SignUpPage;
