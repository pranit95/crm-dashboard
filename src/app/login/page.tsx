"use client";
import { useContext, useState } from "react";
import { AuthContext } from "../_context/AuthContextProvider";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = form;
    let isLoggedIn = false;
    let role = "user";
    if (username && password) {
      if (username === "pranit123" && password === "admin@12345")
        ((isLoggedIn = true), (role = "admin"));
      if (username === "pranit" && password === "test@12345")
        ((isLoggedIn = true), (role = "user"));
    }
    console.log("form", { form, isLoggedIn });
    if (isLoggedIn) {
      setUser((prev) => ({
        ...prev,
        isLoggedIn,
        role,
      }));
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[10px] justify-center items-center w-full"
    >
      <div className="font-bold">Login User</div>
      <div>
        <label>
          Username<span className="text-red-300">*</span>:
        </label>
        <input
          name="username"
          type="text"
          required
          onChange={handleChange}
          style={{ border: "1px solid black", borderRadius: "4px" }}
        />
      </div>
      <div>
        <label>
          Password<span className="text-red-300">*</span>:
        </label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          style={{ border: "1px solid black", borderRadius: "4px" }}
        />
      </div>
      <button
        className="bg-teal-600 text-white p-[10px] rounded-sm cursor-pointer"
        type="submit"
      >
        Submit Form
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
};

export default LoginPage;
