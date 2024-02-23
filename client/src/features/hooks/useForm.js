import { useState } from "react";
import toast from "react-hot-toast";

const useForm = (validateForm = () => true) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({});

    const getFormData = (e) => {
        const inputs = Array.from(e.target.elements).filter(input => input.type !== 'submit');
        let data = {}
        inputs.forEach(input => data[input.name] = input.value);
        return data;
    }

    const setInitialState = () => {
        toast.dismiss();
        setLoading(true);
        setResult({});
    }

    const handleSuccess = (response, responseData) => {
        setLoading(false);
        setResult({
            message: responseData.message,
            response: response,
            data: responseData.data,
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
            if (response.status !== 200) throw Error(responseData.error)
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