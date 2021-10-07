import CookieStandAdmin from "../components/CookieStandAdmin/CookieStandAdmin";
import { useAuth } from "../contexts/auth";

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {/* <CookieStandAdmin /> */}
      {user ? (
        <>
          <h2 className="text-4xl">Welcome {user.username}</h2>
          <CookieStandAdmin />
          <button
            onClick={logout}
            className="p-2 text-white bg-gray-500 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Need to log in</h2>
          <button
            onClick={() =>
              login(
                process.env.NEXT_PUBLIC_USERNAME,
                process.env.NEXT_PUBLIC_PASSWORD
              )
            }
            className="p-2 text-white bg-gray-500 rounded"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}
