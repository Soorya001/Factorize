import React, {useState} from 'react'

const News = () => {

    const [val, setVal] = useState('')

    const nameEl = React.useRef(null);

    const handleChange = (e) => {
        setVal(e.target.value)
        console.log(val)
    }

    const submitLink = (e) => {
        e.preventDefault();
        setVal(nameEl.current.value);
        alert(val)
        console.log(val)
    }

    return (
        <div>
            <div className="container border">
            <div className="row">
                    <div className="col-3">
                        <h2 className="my-md-5">Enter link here:</h2>
                    </div>
                    <div className="col-9">
                        <div className="form-group my-md-5">
                            <input type="text" name="tlink" class="form-control form-control-lg" placeholder="Enter News Link" onChange={handleChange} ref={nameEl}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-grid gap-2 col-2   mx-auto mb-sm-3 mb-md-4">
                        <button type="submit" value="submit" className="btn btn-primary" onClick={submitLink}>
                        Submit
                        </button>
                    </div> 
                </div>
        </div>
        </div>
    )
}

export default News
