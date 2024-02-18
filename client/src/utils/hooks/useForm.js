import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useForm = ({ additionalData }) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    const getFormData = (e, additionalData) => {
        const inputs = Array.from(e.target.elements).filter(input => input.type !== 'submit');
        let data = {}
        inputs.forEach(input => data[input.name] = input.value);
        data = { ...data, ...additionalData }
        return data;
    }

    const setInitialState = () => {
        toast.dismiss();
        setLoading(true);
        setResult('');
    }

    const handleSuccess = (message) => {
        setLoading(false);
        setResult(message);
        toast.success(message, { duration: 5000 });
        navigate('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInitialState();
        const endpoint = e.target.action;
        const data = getFormData(e, additionalData);
        try {
            const result = await fetch(endpoint, {
                method: e.target.method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const response = await result.json();
            if (result.status !== 200) throw Error(response.error)
            handleSuccess(response.message);
        } catch (error) {
            toast.error(error.message, { duration: 5000 });
        }
    }

    return { handleSubmit, loading, result }
}

export default useForm;