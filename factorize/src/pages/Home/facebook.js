import React, {useState} from 'react'



const Facebook = () => {

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
                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Facebook Link" onChange={handleChange} ref={nameEl}/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-2 mb-md-5">
                    <button type="submit" className="btn btn-primary" onClick={submitLink}>Submit</button>
                </div> 
            </div>

            <div className="row">

            </div>
        </div>
        </div>
    )
}

export default Facebook
