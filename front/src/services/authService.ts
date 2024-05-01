interface credentialsType {
    email: string;
    password: string;
}

const authService = {
    login: async (credentials: credentialsType): Promise<string> => {
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            return data.token;
        } catch (error) {
            throw error;
        }
    },
};
