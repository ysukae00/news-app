import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi'
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Articles() {
    const [posts, setPosts] = useState([]);

    const fetchpost = () => {
        axios.get(`${BACKEND_URL}/posts`).then((res) => console.log(res.data));
    }

    useEffect(() => {
        fetchpost();
    }, []);

    return (
        <main className="m-4">
            <section className="w-full flex justify-between items-center mb-4">
                <h1 className="text-lg">Нийтлэл</h1>
                <button onClick={() => setIsOpen(true)} className="btn">
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
                            <th>Үйлдэл</th>
                        </tr>
                    </thead>
                    {posts &&
                        posts.map((post, index) => (
                            <tbody>
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td className="relative cursor-pointer group">
                                        {`${post.title.slice(0, 14)}${post.title.length > 14 && ' ...'
                                            }`}
                                        <p className="absolute -top-10  w-[300px] invisible group-hover:visible bg-slate-600 p-2 rounded-lg text-white">
                                            {post.title}
                                        </p>
                                    </td>
                                    <td>{post.description.slice(0, 40)}</td>
                                    <td>{post.tag}</td>
                                    <td>
                                        <img src={post.image} alt="" className="w-15 h-10" />
                                    </td>
                                    <td>
                                        <div className="flex gap-4">
                                            <button><AiOutlineDelete /></button>
                                            <button><AiOutlineEdit /></button>
                                            <button><BiShow /></button>
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
