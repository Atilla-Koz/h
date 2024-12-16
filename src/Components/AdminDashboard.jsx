import { useAuth } from "../Hooks/AuthProvider";
import { useHistory } from "react-router-dom";

const teachers = ["Hoca 1", "Hoca 2", "Hoca 3"];

export default function AdminDashboard() {
  const { logout } = useAuth();
  const history = useHistory();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Admin Paneli</h1>
        <button
          onClick={() => { logout(); history.push("/"); }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Çıkış Yap
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Öğretmenler</h2>
        <ul className="space-y-3">
          {teachers.map((teacher) => (
            <li key={teacher} className="flex justify-between items-center border-b py-2">
              <span className="text-lg text-gray-800">{teacher}</span>
              <button
                onClick={() => history.push(`/teacher/${teacher}`)}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                Görüntüle
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}