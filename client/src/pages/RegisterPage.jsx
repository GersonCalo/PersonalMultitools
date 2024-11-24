import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-400 overflow-hidden">
        <div className="mt-40 mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
          <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
            <p className="text-[32px] font-bold text-zinc-950 dark:text-white">
              Sign Up
            </p>
            <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
              Enter your email, username, and password to sign up!
            </p>
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  {registerErrors.map((error, i) => (
                    <div
                      className="bg-red-500 p-2 text-white rounded-md my-2"
                      key={i}
                    >
                      {error}
                    </div>
                  ))}
                  {/* Email Input */}
                  <label className="text-zinc-950 dark:text-white">
                    Email
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="email"
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </label>

                  {/* Password Input */}
                  <label className="text-zinc-950 dark:text-white">
                    Password
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="password"
                    />
                    {errors.password && (
                      <p className="text-red-500">Password is required</p>
                    )}
                  </label>

                  {/* Username Input */}
                  <label className="text-zinc-950 dark:text-white">
                    Username
                    <input
                      type="text"
                      {...register("username", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="username"
                    />
                    {errors.username && (
                      <p className="text-red-500">Username is required</p>
                    )}
                  </label>

                  <button
                    className="mt-2 bg-black text-white hover:bg-black/90 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
            <p className="text-zinc-950 mt-2 dark:text-white">
              <Link to="/login" className="text-sky-500">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
