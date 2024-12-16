import  { useState } from 'react';

export default function Hero() {
    const [students, setStudents] = useState([]); // Öğrenci listesini tutar
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false); // Öğrenci ekleme popup'ı açık mı
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false); // Silme onayı popup'ı açık mı
    const [studentToRemove, setStudentToRemove] = useState(null); // Silinecek öğrenci
    const [newStudent, setNewStudent] = useState({
        name: '',
        surname: '',
        memberId: '',
    });

    // Yeni öğrenci ekle
    const addStudent = () => {
        setStudents([...students, { ...newStudent, id: Date.now() }]);
        setIsAddPopupOpen(false); // Popup'ı kapat
        setNewStudent({ name: '', surname: '', memberId: '' }); // Formu sıfırla
    };

    // Öğrenciyi sil
    const removeStudent = () => {
        setStudents(students.filter((student) => student.id !== studentToRemove));
        setStudentToRemove(null);
        setIsConfirmPopupOpen(false); // Onay popup'ı kapat
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Öğrenci Yönetimi</h1>

            {/* Tablo */}
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Ad</th>
                        <th className="border border-gray-300 px-4 py-2">Soyad</th>
                        <th className="border border-gray-300 px-4 py-2">Üye No</th>
                        <th className="border border-gray-300 px-4 py-2">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            {/* Sıra Numarası */}
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.surname}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.memberId}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => {
                                        setStudentToRemove(student.id);
                                        setIsConfirmPopupOpen(true);
                                    }}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Öğrenci Ekle Butonu */}
            <button
                onClick={() => setIsAddPopupOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
                Öğrenci Ekle
            </button>

            {/* Öğrenci Ekle Popup */}
            {isAddPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Yeni Öğrenci Ekle</h2>
                        <div className="mb-2">
                            <label className="block mb-1">Ad:</label>
                            <input
                                type="text"
                                value={newStudent.name}
                                onChange={(e) =>
                                    setNewStudent({ ...newStudent, name: e.target.value })
                                }
                                className="border border-gray-300 px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">Soyad:</label>
                            <input
                                type="text"
                                value={newStudent.surname}
                                onChange={(e) =>
                                    setNewStudent({ ...newStudent, surname: e.target.value })
                                }
                                className="border border-gray-300 px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Üye No:</label>
                            <input
                                type="text"
                                value={newStudent.memberId}
                                onChange={(e) =>
                                    setNewStudent({ ...newStudent, memberId: e.target.value })
                                }
                                className="border border-gray-300 px-2 py-1 w-full"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsAddPopupOpen(false)}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                İptal
                            </button>
                            <button
                                onClick={addStudent}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Ekle
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Silme Onayı Popup */}
            {isConfirmPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Silmek istediğinizden emin misiniz?</h2>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsConfirmPopupOpen(false)}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                İptal
                            </button>
                            <button
                                onClick={removeStudent}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}