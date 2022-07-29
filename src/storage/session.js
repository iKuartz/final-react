export const setSession = (session) => {
  const str = JSON.stringify(session);
  localStorage.setItem('session', str);
};

export const getSession = () => {
  const log = localStorage.getItem('session');
  if (log) {
    return JSON.parse(log);
  }
  return { token: null };
};
