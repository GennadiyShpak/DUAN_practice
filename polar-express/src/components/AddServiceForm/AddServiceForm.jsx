import './AddServiceForm.css';
import { useState } from "react";

const AddServiceForm = ({ formStateHandler, addServiceHandler }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priceFrom, setPriceFrom] = useState('')

    const clearState = () => {
        setTitle('')
        setDescription('')
        setPriceFrom('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newService = {
            title,
            description,
            priceFrom
        }
        addServiceHandler(newService)
        clearState()
    }


    return <>
        <div className="wrapper">
            <label className='label'>
                Title
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text"/>
            </label>

            <label className='label'>
                Description
                <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text"/>
            </label>

            <label className='label'>
                Price from
                <input value={priceFrom} onChange={(e) => {setPriceFrom(e.target.value)}} type="text"/>
            </label>
        </div>

        <div className="button-wrapper">
            <button type='button' onClick={() => {formStateHandler(false)}}>Cancel</button>
    
            <button type='button' onClick={handleSubmit}>Add Service</button>
        </div>
    </>
}

export default AddServiceForm;
