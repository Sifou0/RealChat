interface credentialsType {
    email: string;
    password: string;
}

const authService = {
    login: async (credentials: credentialsType) => {
            return fetch("http://localhost:5555/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }).then((data) => data.json());
    },
};

export default authService