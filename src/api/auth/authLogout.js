export default function authLogout() {
  sessionStorage.clear();
  window.location.href = "/";
}
