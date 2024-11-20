import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { sigin, errors: singinErrors } = useAuth();

  const onSubmit = handleSubmit((date) => {
    sigin(date);
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
            <div className="mt-8"></div>
            <div className="relative my-4">
              <div className="relative flex items-center py-1">
                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
              </div>
            </div>
            <div>
              <form onSubmit={onSubmit} className="mb-4">
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    {singinErrors.map((error, i) => (
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
                      className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      {...register("email", { required: true })}
                      name="email"
                    />
                    {errors.email && (
                      <p className="text-red-500">user name is required</p>
                    )}

                    <p
                      className="text-zinc-950 mt-2 dark:text-white"
                      htmlFor="password"
                    >
                      Password
                    </p>
                    <input
                      id="password"
                      placeholder="Password"
                      type="password"
                      {...register("password", { required: true })}
                      className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                      name="password"
                    />
                    {errors.password && (
                      <p className="text-red-500">password is required</p>
                    )}
                  </div>
                  <button
                    className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                    type="submit"
                  >
                    <p className="text-white">Sign in</p>
                  </button>
                </div>
              </form>
              <p className="text-zinc-950 mt-2 dark:text-white">
                <Link to="/register" className="text-sky-500">Crar cuenta</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
