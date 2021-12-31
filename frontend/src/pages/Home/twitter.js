import React, {useState} from 'react'
import './twitter.css'

const Twitter = () => {

    const [val, setVal] = useState('')
    const [pred, setPred] = useState(0)
    const [showuser, setShowUser] = useState(0)
    const [recdata, setRecData] = useState({})
    const [links, setLinks] = useState([])
    const [correctLink, setCorrectLink] = useState(true)

    const nameEl = React.useRef(null);

    const handleChange = (e) => {
        setVal(e.target.value)
        console.log(val)
    };


    const submitLink = async (e) => {
        e.preventDefault();
        setVal(nameEl.current.value);

        const data = {val}
        const response = await fetch("/tlink", {
                timeout: 5000,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        })

        if(response.ok) {
            console.log("it worked damn it!!!")
            getPred()
        }

        else 
        {
            console.log("failed:")
            alert("Please enter correct tweet link")
        }

        console.log("inside")
    }    

    const getPred = async () => {
        console.log("inside getpred")
        const response = await fetch('/tlink', {method: "GET"});
        const data = await response.json();
        console.log(data)
        setRecData(data)
        setPred(data['pred'])
        console.log(data)
        console.log('Prediction is' , data['pred'])
        setShowUser(1)
        webscrap()
    }

    const webscrap = async () => {
        console.log('inside webscrap')
        const response = await fetch('/tlink_webscrap', {method: "GET"});
        const data = await response.json();
        setLinks(data['links'])
        console.log(data['links'])
    }


    return <>

        <div className="container border">
            
                <div className="row">
                    <div className="col-3">
                        <h2 className="my-md-5">Enter link here:</h2>
                    </div>
                    <div className="col-9">
                        <div className="form-group my-md-5">
                            <input type="text" name="tlink" class="form-control form-control-lg bg-light" placeholder="Enter Tweet Link" onChange={handleChange} ref={nameEl}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-grid gap-2 col-2   mx-auto mb-sm-3 mb-md-4">
                        <button type="submit" value="submit" className="glow-on-hover" onClick={submitLink}>
                        Submit
                        </button>
                    </div> 
                </div>
                
                
                {showuser > 0 && 
                    <div>
                        <div className="card bg-light-gray text-dark col-sm-6 mx-auto">
                            <div className="card-header text-center">
                                <h4 className="card-title">Name: {recdata['data']['name']}</h4>
                            </div>
                    
                            <div className="card-body"> 
                                <div className="text-center">
                                    <img className="col-lg-2 mb-sm-2" src={recdata['data']['profile_image_url']}/>
                                    <h5 className="card-subtitle mb-2" text-muted> @{recdata['data']['screen_name']}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item imppp">
                                        <h4>Prediction: {recdata['pred']}</h4>
                                    </li>
                                    <li class="list-group-item imppp">
                                        <h5>Tweets: {recdata['data']['statuses_count']}</h5>
                                    </li>
                                    <li class="list-group-item imppp">
                                        <h5>Followers: {recdata['data']['followers_count']} &nbsp;&nbsp;&&nbsp;&nbsp; Following: {recdata['data']['friends_count']}</h5>
                                    </li>
                                    <li class="list-group-item imppp">
                                        <h5>Verified: {recdata['data']['verified'] > 0 ? "True" : "False"}</h5>
                                    </li>                            
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5 pt-2"> 
                            <h2 className = "ml-5">Links related to the tweet:</h2>
                        </div>

                        <ul class="list-group list-group-flush pb-3 pt-2">
                            <li class="list-group-item imppp">
                            <div class="row">
                                <div class="col-12 text-truncate">
                                <h5>
                                    1. &nbsp;
                                    <a href= {links[0]} target="_blank"> 
                                    <span class="badge bg-primary rounded-pill">Open</span>
                                    </a> 
                                    &nbsp;{links[0]}
                                </h5>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item imppp">
                            <div class="row">
                                <div class="col-12 text-truncate">
                                <h5>
                                    2. &nbsp;
                                    <a href= {links[1]} target="_blank"> 
                                    <span class="badge bg-primary rounded-pill">Open</span>
                                    </a> 
                                    &nbsp;{links[1]}
                                </h5>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item imppp">
                            <div class="row">
                                <div class="col-12 text-truncate">
                                <h5>
                                    3. &nbsp;
                                    <a href= {links[2]} target="_blank"> 
                                    <span class="badge bg-primary rounded-pill">Open</span>
                                    </a> 
                                    &nbsp;{links[2]}
                                </h5>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item imppp">
                            <div class="row">
                                <div class="col-12 text-truncate">
                                <h5>
                                    4. &nbsp;
                                    <a href= {links[3]} target="_blank"> 
                                    <span class="badge bg-primary rounded-pill">Open</span>
                                    </a> 
                                    &nbsp;{links[3]}
                                </h5>
                                </div>
                            </div>
                            </li>    
                            <li class="list-group-item imppp">
                            <div class="row">
                                <div class="col-12 text-truncate">
                                <h5>
                                    5. &nbsp;
                                    <a href= {links[4]} target="_blank"> 
                                    <span class="badge bg-primary rounded-pill">Open</span>
                                    </a> 
                                    &nbsp;{links[4]}
                                </h5>
                                </div>
                            </div>
                            </li>                            
                        </ul>  
                        </div>
                } 

        </div>
    </>
}

export default Twitter
