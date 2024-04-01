import {useEffect} from 'react'
function About(){
    useEffect(()=>{
        document.title ="About | LearnPro";
    }
    );
    return(
        <h2>About us</h2>
    )
}

export default About;