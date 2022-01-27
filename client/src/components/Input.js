import {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const body = { description: value };
            await fetch('https://perntodo-emonfromearth.herokuapp.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            window.location = '/';
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
        <h1 className='text-center m-5'>PERN TODO</h1>
        <form className='d-flex m-5' onSubmit={handleSubmit}>
            <input type='text' className='form-control' placeholder='Add todo' value={value} onChange={e => setValue(e.target.value)}/>
            <button className='btn btn-success'>Add</button>
        </form>
        </>
    )
}

export default Input;