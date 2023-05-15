import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../create.module.css';
import Layout from '../../../../components/layout';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { id } };
}

function ArticleEdit(props) {
    const router = useRouter();
    const { id } = props;
    const [article, setArticle] = useState({});

    function onChange(e) {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setArticle({
            ...article,
            [e.target.name]: e.target.value, // title: "Rinchindugar"
        });
    }

    function fetchArticle() {
        axios
            .get(`${BACKEND_URL}/posts/${id}`)
            .then((res) => setArticle(res.data))
    }


    useEffect(() => {
        fetchArticle();
    }, [id]);

    function submit() {
        axios.put(`${BACKEND_URL}/posts/${id}`, article).then(() => {
            toast.success('Амжилттай зассан!!', {
                hideProgressBar: true,
                autoClose: 1000,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
            });
            router.push('/admin/articles');
        });
    }

    return (
        <section className="mt-5">
            <h3 className={styles.create__header}>Нийтлэл Засах</h3>
            <form>
                <section
                    className={`${styles.create__container} bg-white rounded-lg mt-3 mr-5 p-6`}
                >
                    {/* 1px solid #CBD5E1 */}
                    <section className="flex flex-row items-center justify-between w-full">
                        <p>Гарчиг</p>
                        <input
                            value={article?.title || ''}
                            name="title"
                            onChange={onChange}
                            className={`${styles.create__input_text} border border-[#CBD5E1] w-2/3 outline-none px-3 py-1 rounded`}
                        />
                    </section>
                    <section className="flex flex-row justify-between w-full mt-5">
                        <p>Агуулга</p>
                        <textarea
                            value={article?.description || ''}
                            cols="50"
                            name="description"
                            onChange={onChange}
                            className={`${styles.create__input_text} border border-[#CBD5E1] w-2/3 outline-none px-3 py-1 rounded`}
                        />
                    </section>
                    <section className="flex flex-row items-center justify-between w-full mt-5">
                        <p>Гарчиг</p>
                        <div className="w-2/3">
                            <section className="border border-[#CBD5E1] w-2/3 outline-none px-2 py-1 rounded">
                                <select
                                    name="Uls tur"
                                    onChange={onChange}
                                    className="w-full border-none outline-none"
                                    defaultValue
                                >
                                    <option selected value="Улс төр">
                                        Улс төр
                                    </option>
                                    <option value="Нийгэм">Нийгэм</option>
                                    <option value="Спорт">Спорт</option>
                                    <option value="Технологи">Технологи</option>
                                </select>
                            </section>
                        </div>
                    </section>
                    <section className="flex flex-row items-center justify-between w-full mt-5">
                        <p>Status</p>
                        <div className="w-2/3">
                            <section className="border border-[#CBD5E1] w-2/3 outline-none px-2 py-1 rounded">
                                <select
                                    name="status"
                                    onChange={onChange}
                                    className="w-full border-none outline-none"
                                    defaultValue
                                >
                                    <option selected value="Published">
                                        Published
                                    </option>
                                    <option value="Unpublished">Unpublished</option>
                                </select>
                            </section>
                        </div>
                    </section>
                    <section className="flex flex-row items-center justify-between w-full mt-5">
                        <p>Зураг</p>
                        <input
                            value={article?.image || ''}
                            type="url"
                            onChange={onChange}
                            name="image"
                            className={`${styles.create__input_text} border border-[#CBD5E1] w-2/3 outline-none px-3 py-1 rounded`}
                        />
                    </section>
                </section>
                <button type="button" onClick={submit} className="btn mt-10">
                    Засварлах
                </button>
            </form>
        </section>
    );
}

ArticleEdit.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
};

export default ArticleEdit;
