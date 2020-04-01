

export function authHeader() {
  return { headers: { authorization: localStorage.getItem('_TOKEN') } };
}