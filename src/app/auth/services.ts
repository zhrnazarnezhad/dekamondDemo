export const loginReq = () => {
  return fetch(process.env.NEXT_PUBLIC_URL + "/api/?results=1&nat=us");
};
