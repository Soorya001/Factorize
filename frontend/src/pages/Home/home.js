import React, {useState, useEffect} from 'react'
import Twitter from './twitter'
import Facebook from './facebook'
import News from './news'

const Home = () => {

   const [currentTime, setCurrentTime] = useState(0);

   useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
    
   }, []);

   console.log('time is: ',currentTime)   

    return <>
        <div style={{
            '--color-1': 'deepskyblue',
            '--color-2': 'navy',
            background: `
            linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
            )
            `,
            'min-height': '90vh',

            // Unrelated styles:
            color: 'white',
            textAlign: 'center',
            padding: 30,
            borderRadius: 5,
        }}>

        <div className="jumbotron jumbotron-fluid my-md-5">
        <div className="container">
            <h1 className="display-5">Choose the link type</h1>
            <p className="lead">Allows a customized prediction for your links !</p>
             
            <ul class="nav nav-tabs bg-light rounded border-dark pt-1 p-1" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active text-white bg-primary" id="home-tab" data-bs-toggle="tab" data-bs-target="#twitter" type="button" role="tab" aria-controls="twitter" aria-selected="true">Twitter Link</button>
                </li>
                {/* <li class="nav-item" role="presentation">
                    <button class="nav-link text-dark  mx-2" id="contact-tab" data-bs-toggle="tab" data-bs-target="#facebook" type="button" role="tab" aria-controls="facebook" aria-selected="false">Facebook Link</button>
                </li> */}
                <li class="nav-item pl-1" role="presentation">
                    <button class="nav-link text-white bg-primary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#news" type="button" role="tab" aria-controls="news" aria-selected="false">News Link</button>
                </li>   
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="twitter" role="tabpanel" aria-labelledby="home-tab"><Twitter/></div>
                <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="profile-tab"><News/></div>
                <div class="tab-pane fade" id="facebook" role="tabpanel" aria-labelledby="contact-tab"><Facebook/></div>
            </div>
        </div>
        </div>
        </div>
        
    </>
}

export default Home
