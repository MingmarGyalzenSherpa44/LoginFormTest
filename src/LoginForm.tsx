import React, { useState, FormEvent, useEffect } from 'react';

interface FormData {
    username: string;
    email: string;
}

const LoginForm: React.FC = () => {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
    };

    useEffect(() => {

        console.log(formData.username)
    }, [formData])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>{submit && formData.username}</p>
        </>
    );
};

export default LoginForm;