import { useState } from 'react'

function Form({ getFormData }) {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [alert, setAlert] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            setAlert(true)
        } else {
            setAlert(false)
            getFormData(height, weight)
        }
    }
    return (
        <div className="mx-auto col-8">
            <div className="m-4">
                <form onSubmit={onSubmit}>
                    <fieldset >
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">weight</label>
                            <div className="col-sm-10">
                                <input type="text" value={weight} required className="form-control" placeholder="Weight" onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">height</label>
                            <div className="col-sm-10">
                                <input type="text" value={height} required className="form-control" onChange={(e) => setHeight(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-10 offset-sm-2">
                                <button type="submit" className="btn btn-primary">Calculate</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

            {alert && <span className='text-danger'>invalid</span>}

        </div>
    )
}

export default Form
