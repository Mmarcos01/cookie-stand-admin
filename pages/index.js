import CookieStandAdmin from "../components/CookieStandAdmin/CookieStandAdmin";
import LoginForm from "../components/LoginForm/LoginForm";
import { useAuth } from "../contexts/auth";
// import useResource from "../hooks/useResource";

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h2 className="text-4xl">Welcome {user.username}</h2>
          <CookieStandAdmin />
          <button
            onClick={logout}
            className="p-2 text-white bg-gray-800 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  );
}
