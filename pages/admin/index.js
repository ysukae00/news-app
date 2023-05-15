import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import UserModal from '../../components/UserModel';
import Layout from '../../components/layout';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home() {
    const [users, setUsers] = useState([]);

    let [isOpen, setIsOpen] = useState(false);
    let [isEditModal, setIsEditModal] = useState(false);

    const [loading, setLoading] = useState(false);

    const [editUserId, setEditUserId] = useState('');

    function closeModal() {
        setIsOpen(false);
    }

    function userUpdate(username, lastname) {
        axios
            .put(`${BACKEND_URL}/users/${editUserId}`, { username, lastname })
            .then((res) => {
                toast.success('Амжилттай шинэчллээ!!', {
                    hideProgressBar: true,
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    progress: undefined,
                });

                const index = users.findIndex((user) => user._id === editUserId);
                users[index] = res.data.data;
                setIsEditModal(false);
            });
    }

    function userHadgalah(username, lastname, phoneNumber) {
        // axios POST - өгөгдөл хадгалах
        axios
            .post(`${BACKEND_URL}/users`, { username, lastname, phoneNumber })
            .then((res) => {
                toast.success('Амжилттай хадгалсан!!', {
                    hideProgressBar: true,
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    progress: undefined,
                });

                users.push({
                    ...res.data.data,
                });
                closeModal();
            })
            .catch((err) => console.log('Create error', err));
    }

    // GET бүх хэрэглэгчийн мэдээллийг дуудах хүсэлт
    function fetchUsers() {
        setLoading(true);
        axios
            .get(`${BACKEND_URL}/users`)
            .then((res) => {
                setLoading(false);
                setUsers(res.data.data);
            })
            .catch((err) => console.log('Aldaa', err));
    }

    function onDelete(id) {
        axios.delete(`${BACKEND_URL}/users/${id}`).then(() => {
            fetchUsers();
            toast.success('Амжилттай устгалаа!!', {
                hideProgressBar: true,
                autoClose: 1000,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
            });
        });
    }

    function onEdit(id) {
        setEditUserId(id);
        setIsEditModal(true);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main className="m-4">
                <section className="w-full flex justify-between items-center mb-4">
                    <h1 className="text-lg">Хэрэглэгч</h1>
                    <button onClick={() => setIsOpen(true)} className="btn">
                        Нэмэх
                    </button>
                </section>
                <section>
                    {loading && <h1>Loading ....</h1>}
                    {!loading && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Хэрэглэгчийн нэр</th>
                                    <th>Хэрэглэгчийн овог</th>
                                    <th>Утас</th>
                                    <th>Үйлдэл</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users &&
                                    users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.username}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user?.phoneNumber}</td>
                                            <td>
                                                <button
                                                    className="btn ml-2 bg-yellow-500"
                                                    onClick={() => onEdit(user._id)}
                                                >
                                                    Засах
                                                </button>
                                                <button
                                                    className="btn ml-2 bg-red-500"
                                                    onClick={() => onDelete(user._id)}
                                                >
                                                    Устгах
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    )}
                </section>
                <UserModal
                    isOpen={isOpen}
                    btnTitle="Хадгалах"
                    onClose={() => setIsOpen(false)}
                    onSubmitAction={userHadgalah}
                />
                <UserModal
                    editUserId={editUserId}
                    isOpen={isEditModal}
                    btnTitle="Засах"
                    onClose={() => setIsEditModal(false)}
                    onSubmitAction={userUpdate}
                />
            </main>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
};
