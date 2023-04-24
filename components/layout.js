import Link from 'next/link';

function Layout({ children }) {
    return (
        <section className="flex">
            <section className="w-[180px] pt-4">
                <Link href="/admin">
                    <h3>Хэрэглэгч</h3>
                </Link>
                <Link href="/articles">
                    <h3>Нийтлэл</h3>
                </Link>
                <Link href="articles/create">
                    <h3>Create</h3>
                </Link>
            </section>
            <section className="w-full">{children}</section>
        </section>
    );
}

export default Layout;
