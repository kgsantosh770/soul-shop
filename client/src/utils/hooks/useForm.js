import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useForm = ({ additionalData }) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.dismiss();
        setLoading(true);
        setResult('');
        const endpoint = e.target.action;
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
            if(result.status !== 200) throw Error(response.error)
            setLoading(false);
            setResult(response.message);
            toast.success(response.message, {duration: 5000});
            navigate('/');
        } catch (error) {
            toast.error(error.message, {duration: 5000});
        }
    }

    return { handleSubmit, loading, result }
}

export default useForm;