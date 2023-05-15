import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const publicPaths = ['/', '/login', '/articles'];
const regexPublicPath = /^\/(articles)\/(\w|\d){1,}/;

function RouteGuard({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // хэрэглэгч нэвтрэсэн байнуу гэдгийг шалгах
    function authCheck(url) {
        setLoading(true);
        const path = url.split('?')[0];
        // /articles/ruinchindugar
        // /login, /admin
        const isPublicPath =
            publicPaths.includes(path) || regexPublicPath.test(path);
        if (!isPublicPath && !localStorage.getItem('token')) {
            return router.push('/login');
        }
        setLoading(false);
    }

    useEffect(() => {
        authCheck(router.asPath);

        const handleStart = (url) => url !== router.asPath && authCheck(url);
        const handleComplete = (url) => url === router.asPath && authCheck(url);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
        };
    }, [router.asPath]);

    if (loading) {
        return <h3>Loading ...</h3>;
    }

    return <section>{children}</section>;
}

export default RouteGuard;
