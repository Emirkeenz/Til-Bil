function path(root, sublink) {
  return `${root}/${sublink}`;
}

export const HOME_ROOT_PATH = '/';
export const LESSONS_ROOT_PATH = '/lessons';
export const LESSONS_SAVED_LESSONS_ROOT_PATH = 'saved-lessons';
export const LESSONS_ONLINE_LESSON_ROOT_PATH = 'online-lesson';

export const PATHS = {
  home: {
    root: HOME_ROOT_PATH,
    lessons: {
      root: LESSONS_ROOT_PATH,
      savedLessons: path(LESSONS_ROOT_PATH, LESSONS_SAVED_LESSONS_ROOT_PATH),
      onlineLesson: path(LESSONS_ROOT_PATH, LESSONS_ONLINE_LESSON_ROOT_PATH),
    },
  },
  games: 'games',
};
