import Link from 'next/link';
import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <section className="flex">
            <section className="w-[180px] pt-4 h-screen flex flex-col items-between justify-between p-2">
                <section>
                    <Link href="/admin">
                        <h3>Хэрэглэгч</h3>
                    </Link>
                    <Link href="admin/articles">
                        <h3>Нийтлэл</h3>
                    </Link>
                </section>

                <button onClick={logout} className="bg-red-600 rounded">
                    <h3 className="text-white">Гарах</h3>
                </button>
            </section>
            <section className="w-full">{children}</section>
        </section>
    );
}

export default Layout;
