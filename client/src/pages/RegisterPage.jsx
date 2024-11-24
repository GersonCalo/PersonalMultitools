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
      <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
        <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
          <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
            <p className="text-[32px] font-bold text-zinc-950 dark:text-white">
              Sign In
            </p>
            <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
              Enter your email and password to sign in!
            </p>
            <div>
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
                    <p
                      className="text-zinc-950 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </p>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="email"
                    />
                    {errors.email && (
                      <p className="text-red-500">email is required</p>
                    )}
                    <p
                      className="text-zinc-950 dark:text-white"
                      htmlFor="email"
                    >
                      Password
                    </p>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="password"
                    />
                    {errors.password && (
                      <p className="text-red-500">password is required</p>
                    )}
                    <p
                      className="text-zinc-950 dark:text-white"
                      htmlFor="email"
                    >
                      Username
                    </p>
                    <input
                      type="text"
                      {...register("username", { required: true })}
                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                      placeholder="username"
                    />
                    {errors.username && (
                      <p className="text-red-500">user name is required</p>
                    )}

                    <button
                      className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-zinc-950 mt-2 dark:text-white">
                <Link to="/login" className="text-sky-500">
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
