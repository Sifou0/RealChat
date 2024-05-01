import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const credentials = {
            email: email,
            password: password,
        };
        authService.login(credentials).then((data) => console.log(data));
    };

    return (
        <div className="h-screen bg-red-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="w-96 bg-white rounded-sm p-6"
            >
                <h1 className="text-center text-3xl font-semibold">Login</h1>
                <div className="mt-3">
                    <label htmlFor="email" className="block text-base">
                        Email
                    </label>
                    <input
                        className="w-full border rounded-md px-2 py-1 mt-1"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="password" className="block text-base">
                        Password
                    </label>
                    <input
                        className="w-full border rounded-md px-2 py-1 mt-1"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className="w-full px-2 py-1 bg-indigo-500 rounded-md text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
