import { useState } from "react";
import toast from "react-hot-toast";

const useForm = (validateForm = () => true) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const getFormData = (e) => {
        const inputs = Array.from(e.target.elements).filter(input => input.type !== 'submit');
        let data = {}
        inputs.forEach(input => data[input.name] = input.value);
        return data;
    }

    const setInitialState = () => {
        toast.dismiss();
        setLoading(true);
        setResult(null);
    }

    const handleSuccess = (response, responseData) => {
        setLoading(false);
        setResult({
            response,
            responseData,
        });
        toast.success(responseData.message, { duration: 5000 });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInitialState();
        if (validateForm) {
            const result = validateForm();
            if (result !== true) {
                toast.error(result, { duration: 5000 });
                return;
            }
        }
        const endpoint = e.target.action;
        const data = getFormData(e);
        try {
            const response = await fetch(endpoint, {
                method: e.target.method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const responseData = await response.json();
            if (!response.ok) throw Error(responseData.message);
            handleSuccess(response, responseData);
        } catch (error) {
            toast.error(error.message, { duration: 5000 });
        }
    }

    return { handleSubmit, loading, result }
}

useForm.defaultProps = {
    validateForm: () => { },
}

export default useForm;