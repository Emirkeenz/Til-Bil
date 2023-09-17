function path(root, sublink) {
  return `${root}${sublink}`;
}

export const HOME_ROOT_PATH = '/';

export const PATHS = {
  home: {
    root: HOME_ROOT_PATH,
    lessons: path(HOME_ROOT_PATH, 'lessons'),
  },
  games: 'games',
};
