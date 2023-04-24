import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi'
import axios from 'axios';
import { useRouter } from 'next/router';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Articles() {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    const fetchpost = () => {
        axios.get(`${BACKEND_URL}/posts`).then((res) => setPosts(res.data));
    }

    function deleteArticle(id) {
        if (confirm("Eniig ustagahuu?") === true) {
            axios.delete(`${BACKEND_URL}/posts/${id}`).then(() => {
                const index = posts.findIndex((post) => post._id === id);
                posts.splice(index, 1);
                setPosts([...posts]);
            });
        }
        console.log('bnauu', id);
    }

    function showArticle(id) {

    }

    useEffect(() => {
        fetchpost();
    }, []);

    function moreText(text, number) {
        return (
            text && <div className="relative cursor-pointer group">
                {`${text.slice(0, number)}${(text.length > number) ? '...' : ''
                    }`}
                <p className="absolute -top-10  w-[300px] invisible group-hover:visible bg-slate-600 p-2 rounded-lg text-white">
                    {text}
                </p>
            </div>
        )
    }
    return (
        <main className="m-4">
            <section className="w-full flex justify-between items-center mb-4">
                <h1 className="text-lg">Нийтлэл</h1>
                <button onClick={() => router.push('/articles/create')} className="btn">
                    Нэмэх
                </button>
            </section>
            <section>
                <table className="bg-white">
                    <thead className=" bg-gray-100 rounded-lg">
                        <tr className="border-none">
                            <th>ID</th>
                            <th>Гарчиг</th>
                            <th>Дэлгэрэнгүй</th>
                            <th>Таг</th>
                            <th>Status</th>
                            <th>Үйлдэл</th>
                        </tr>
                    </thead>
                    {posts &&
                        posts?.map((post, index) => (
                            <tbody>
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td>{moreText(post.title, 14)}</td>
                                    <td>{moreText(post.description, 40)}</td>
                                    <td>{post.tag}</td>
                                    <td>{post.status}</td>
                                    <td>
                                        <img src={post.image} alt="" className="w-15 h-10" />
                                    </td>
                                    <td>
                                        <div className="flex gap-4">
                                            <button onClick={() => deleteArticle(post._id)}><AiOutlineDelete /></button>
                                            <button onClick={() => router.push(`/articles/${post._id}/edit`)}><AiOutlineEdit /></button>
                                            <button onClick={() => router.push(`/articles/${post._id}/show`)}><BiShow /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </section>
        </main>
    );
}

export default Articles;
