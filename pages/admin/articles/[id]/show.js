import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../create.module.css';
import Link from 'next/link';
import moment from 'moment';
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { id } };
}

function ArticleDetail(props) {
    const { id } = props;
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(false);

    function fetchArticle() {
        setLoading(true);
        axios
            .get(`${BACKEND_URL}/posts/${id}`)
            .then((res) => setArticle(res.data))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchArticle();
    }, [id]);

    if (loading) {
        return (
            <section className="mt-5">
                <h3 className={styles.create__header}>Нийтлэл</h3>
                <section
                    className={`${styles.create__container} bg-white rounded-lg mt-3 mr-5 p-6`}
                >
                    Өгөгдөл татаж байна ...
                </section>
            </section>
        );
    }

    return (
        <section className="mt-5">
            {/* {console.log(article)} */}
            <h3 className={styles.create__header}>Нийтлэл</h3>
            <section
                className={`${styles.create__container} bg-white rounded-lg mt-3 mr-5 p-6`}
            >
                {/* 1px solid #CBD5E1 */}
                <section className="w-full">
                    <p>Гарчиг</p>
                    <p className={`${styles.create__input_text} mt-2`}>
                        {article?.title || ''}
                    </p>
                </section>
                <section className="w-full mt-5">
                    <p>Агуулга</p>
                    <p className={`${styles.create__input_text} mt-2`}>
                        {article?.description || ''}
                    </p>
                </section>
                <section className="flex flex-row items-center justify-between w-full mt-5">
                    <p>Таг</p>
                    <div className="w-2/3">
                        <section className="border border-[#CBD5E1] w-2/3 outline-none px-2 py-1 rounded">
                            <select name="tag" className="w-full border-none outline-none">
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
                            <select name="tag" className="w-full border-none outline-none" disabled>
                                <option selected value="status">
                                    Published
                                </option>
                                <option value="Unpublished">Unpublished</option>
                            </select>
                        </section>
                    </div>
                </section>
                <section>
                    <p>Зураг</p>
                    <img src={article?.image || ''} className="w-1/2 h-[400px] mt-2" />
                    {/* <input
                        type="url"
                        name="image"
                        className={`${styles.create__input_text} border border-[#CBD5E1] w-2/3 outline-none px-3 py-1 rounded`}
                    /> */}
                </section>
                <section>
                    <section>
                        <p>Uusegsen ognoo</p>
                        <p className={`${styles.create__input_text} mt-2`}>
                            {moment(article?.createdAt || '').format('YYYY.MM.DD hh:mm:ss')}
                        </p>
                    </section>
                    <section>
                        <p>Zassan 0gnoo</p>
                        <p className={`${styles.create__input_text} mt-2`}>
                            {moment(article?.updatedAt || '').format('YYYY.MM.DD hh:mm:ss')}
                        </p>
                    </section>
                </section>
            </section>
            <Link href={`/articles/${id}/edit`}>
                <div className="flex">
                    <div type="button" className="btn mt-10">
                        Засах
                    </div>
                </div>
            </Link>
            <div className="h-10" />
        </section>
    );
}

export default ArticleDetail;
