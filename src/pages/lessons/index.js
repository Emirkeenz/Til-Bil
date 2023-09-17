import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/lessons/header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { LESSONS_ONLINE_LESSON_ROOT_PATH, LESSONS_SAVED_LESSONS_ROOT_PATH, PATHS } from '../../utils/constants/paths';
import { FaHome, FaPhotoVideo } from 'react-icons/fa';
import { HiOutlineSaveAs } from 'react-icons/hi';
import { CgScreen } from 'react-icons/cg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoDownload } from 'react-icons/go';

const StyledLessons = styled.div`
  height: 100%;
  width: 100%;
  display: block;

  & .sidebar-content {
    display: flex;
  }

  & #lessons-main {
    height: 100%;
    min-height: 100%;
    max-height: 91vh;
    overflow: auto;
  }
`;

const Lessons = () => {
  const { pathname } = useLocation();

  const isOnlineLessons = pathname === PATHS.home.lessons.onlineLesson;
  const isSavedLessons = pathname === PATHS.home.lessons.savedLessons;

  return (
    <StyledLessons>
      <Header />
      <div className="sidebar-content">
        <Sidebar style={{ height: '91vh' }}>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: active ? '#0E5EA3' : disabled ? '#0e5da383' : undefined,
                  };
              },
            }}
          >
            <MenuItem disabled />
            <MenuItem disabled icon={<FaHome />}>
              {' '}
              Башкы бет
            </MenuItem>
            <MenuItem
              active={isOnlineLessons}
              icon={<FaPhotoVideo />}
              component={<Link to={LESSONS_ONLINE_LESSON_ROOT_PATH} />}
            >
              Онлайн сабактар
            </MenuItem>
            <MenuItem
              active={isSavedLessons}
              icon={<HiOutlineSaveAs />}
              component={<Link to={LESSONS_SAVED_LESSONS_ROOT_PATH} />}
            >
              Сакталган сабактар
            </MenuItem>
            <MenuItem disabled icon={<CgScreen />}>
              Оюндар
            </MenuItem>
            <MenuItem disabled icon={<AiOutlineClockCircle />}>
              Тапшырмалар
            </MenuItem>
            <MenuItem disabled icon={<GoDownload />}>
              Жүктөө
            </MenuItem>
          </Menu>
        </Sidebar>
        <main id="lessons-main">
          <Outlet />
        </main>
      </div>
    </StyledLessons>
  );
};

export default Lessons;
