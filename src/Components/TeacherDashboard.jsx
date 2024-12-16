import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../Hooks/AuthProvider";
import { useState } from "react";

export default function TeacherDashboard() {
  const { name } = useParams();
  const { logout } = useAuth();
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", surname: "", memberId: "" });

  const addStudent = () => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
    setNewStudent({ name: "", surname: "", memberId: "" });
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">{name}'in Öğrencileri</h1>
        <button
          onClick={() => { logout(); history.push("/"); }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Çıkış Yap
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <button
          onClick={() => addStudent()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          Yeni Öğrenci Ekle
        </button>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Ad</th>
              <th className="border px-4 py-2">Soyad</th>
              <th className="border px-4 py-2">Üye No</th>
              <th className="border px-4 py-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.surname}</td>
                <td className="border px-4 py-2">{student.memberId}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => removeStudent(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}