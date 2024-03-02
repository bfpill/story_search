
import { useEffect,useState } from 'react'
import './Landing.css'
import kidPicture1 from './How-Reading-Can-Help-Your-Child-Be-More-Happy-and-Healthy-01.jpg'
import kidPicture2 from './article_142_width_710_height_340_crop_true_center_true_quality_75.jpg'
import kidPicture3 from './best-ipad-apps-for-kids-1.jpg'
import kidPicture4 from './ipad_kid.png'
import { HomeBar } from "../NavBar"


function Landing(){
    const [visibleLetters, setVisibleLetters] = useState(0);
    const text = "Is your little one mesmerized by endless scroll of TikTok?";
    useEffect(() => {
        
        const interval = setInterval(() => {
            setVisibleLetters(prevVisibleLetters => prevVisibleLetters + 1);
        }, 40); // Adjust the interval duration as needed

        // Clear interval when all letters are visible
        if (visibleLetters === text.length) {
            clearInterval(interval);
        }

        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, [visibleLetters]);

    return(
        <>
        <div className="z-20 absolute top-4 rounded-full navbar-landing">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.");
        } } expand={false} />
      </div>
        <div className="full-pages">

            <div className='statement'>
                {text.split('').slice(0, visibleLetters).join('')}
            </div>
            <div className='under-statement'>
                Get them here, we are a safe place for kids to enjoy as well as learn something .
                </div>
            
            <div className='img-container1'>
                <img src={kidPicture1} alt="kid" />
            </div>
            
            <div className='img-container2'>
                <img src={kidPicture2} alt="kid" />
            </div>
            <div className='img-container3'>
                <img src={kidPicture3} alt="kid" />
            </div>
            <div className='img-container4'>
                <img src={kidPicture4} alt="kid" />
            </div>


        </div>
        </>
    )
}
export default Landing