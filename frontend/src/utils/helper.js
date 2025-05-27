export const checkUserToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return (window.location.href = "/login");
};
