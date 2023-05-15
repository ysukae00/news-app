import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [error, setError] = useState('');
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  function onSubmit() {
    axios
      .post(`${BACKEND_URL}/auth/login`, { username: userName, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        router.push('/admin');
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          hideProgressBar: true,
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
      });
  }

  return (
    <section className="w-full flex justify-center h-80 items-center">
      <section className="w-1/4 rounded-full  shadow-sm shadow-black/10 ">
        <h1>Нэвтрэх хэсэг</h1>
        <section className="flex flex-col mt-2 ">
          <label htmlFor="">Хэрэглэгчийн нэр</label>
          <input
            type="string"
            className="border border-black rounded py-1 px-2 mt-1.5"
            name="usernmae"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setError('');
            }}
          />
        </section>
        <section className="flex flex-col mt-2">
          <label htmlFor="">Нууц үг</label>
          <input
            className="border border-black rounded py-1 px-2 mt-1.5"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
        </section>
        <button onClick={onSubmit} className="btn mt-5 w-full">
          Нэвтрэх
        </button>
      </section>
    </section>
  );
}

export default LoginPage;
