import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/form';
import { TextField } from '../../components/text-field';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import axiosInstance from '../../utils/helpers/axios';

const LogButton = styled.button`
  width: 70%;
  padding: 20px 60px;
  margin-right: auto;
  margin-left: auto;

  border: none;
  border-radius: 30px;
  color: #fff;
  background-color: #68c052;
`;

const LoginWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoogleButton = styled.button`
  width: 83%;
  margin-top: 15px;
  padding: 20px 60px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 30px;
  color: #000;
  background-color: #fff;

  font-size: 16px;
  line-height: 24px;
`;

const ForgotPassword = styled.button`
  margin-right: 0;
  margin-bottom: 15px;
  border: none;
  background-color: transparent;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка POST запроса к API для входа в систему
      const response = await axiosInstance.post('/api/token/', form);

      if (response.status === 200) {
        // Успешный вход в систему
        // navigate('/');
      } else {
        setError('Неверное имя пользователя или пароль');
      }
    } catch (error) {
      setError('Произошла ошибка при входе в систему');
    }
  };

  return (
    <LoginWrapper>
      <h2>Кош келиңиз!</h2>
      <GoogleButton>
        <FcGoogle size={30} /> Google менен кирүү
      </GoogleButton>
      <Form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <TextField type="text" name="email" placeholder="username" value={form.email} onChange={handleChange} />
        <h3>Сыр сөз</h3>
        <TextField
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <ForgotPassword>Сыр сөзүмдү унуттум</ForgotPassword>
        <LogButton type="submit">Кирүү</LogButton>
      </Form>
      {error && <p style={{ color: 'red', padding: '0.5rem 0' }}>{error}</p>}
      <p>
        Сизде аккаунт жокпу ? <a href="/auth/signup">Катталуу</a>
      </p>
    </LoginWrapper>
  );
};

export default LoginPage;
