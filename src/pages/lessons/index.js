import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/lessons/header';
import { Link, Outlet } from 'react-router-dom';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { LESSONS_ONLINE_LESSON_ROOT_PATH, LESSONS_SAVED_LESSONS_ROOT_PATH } from '../../utils/constants/paths';

const StyledLessons = styled.div`
  height: 100%;
  width: 100%;
  display: block;

  & .sidebar-content {
    display: flex;
  }
`;

const Lessons = () => {
  return (
    <StyledLessons>
      <Header />
      <div className="sidebar-content">
        <Sidebar style={{ height: '91vh' }}>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem>Башкы бет</MenuItem>
            <MenuItem component={<Link to={LESSONS_ONLINE_LESSON_ROOT_PATH} />}>Онлайн сабактар</MenuItem>
            <MenuItem component={<Link to={LESSONS_SAVED_LESSONS_ROOT_PATH} />}>Сакталган сабактар</MenuItem>
            <MenuItem>Оюндар</MenuItem>
            <MenuItem>Тапшырмалар</MenuItem>
            <MenuItem>Жүктөө</MenuItem>
          </Menu>
        </Sidebar>
        <Outlet />
      </div>
    </StyledLessons>
  );
};

export default Lessons;
