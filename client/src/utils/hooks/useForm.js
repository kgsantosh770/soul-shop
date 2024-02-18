import { useState } from "react"

const useForm = ({ additionalData }) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult('');
        const endpoint = e.target.action;
        console.log(endpoint);
        const inputs = Array.from(e.target.elements).filter(input => input.type !== 'submit');
        let data = {}
        inputs.forEach(input => data[input.name] = input.value);
        data = { ...data, ...additionalData }

        try {
            const result = await fetch(endpoint, {
                method: e.target.method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const response = await result.json();
            console.log(response);
            if(response.status !== 200) throw Error(response.error)
            setLoading(false);
            setResult(response.message);
        } catch (error) {
            console.log(error);
        }
    }

    return { handleSubmit, loading, result }
}

export default useForm;