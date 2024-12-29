export default function Auth() {
  localStorage.setItem("isAuthenticated", "true");
  window.location.href = "/";
}
