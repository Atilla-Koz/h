import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Hooks/AuthProvider";

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "teacher1", password: "teacher123", role: "teacher", name: "Hoca 1" },
  { username: "teacher2", password: "teacher123", role: "teacher", name: "Hoca 2" },
];

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { login } = useAuth();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      login(user);
      user.role === "admin" ? history.push("/admin") : history.push(`/teacher/${user.name}`);
    } else {
      setError("Geçersiz kullanıcı adı veya şifre.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">Hoş Geldiniz</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}