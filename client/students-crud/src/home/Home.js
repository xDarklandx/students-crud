import React from "react";
import './Home.css';
// import stu from '../images/student.jpg'

const Home = () => {

    return <>

            <div className='overlay'>
                <h1 style={{marginTop: '10%',color:'white',textShadow: '1px 1px 2px black, 0 0 5px darkblue',fontFamily:'"Garamond", serif',fontSize:'8vw'}}>Welcome to the Students Database!</h1>
                {/* <img style={{maxWidth: '100%', maxHeight:'100%'}} src={stu} alt='student img'/> */}
            </div>

    </>
}

export default Home; 