import './Landing.css'
import kidPicture1 from './tiktok-kig.jpg'
import kidPicture2 from './yo-kid.jpg'
import kidPicture3 from './ticktok-kids2.jpg'
import kidPicture4 from './tiktok-addict.png'


function Landing(){
    return(
        <div className="full-pages">
            <div className='statement'>
                Does your kid watch tik tok?
            </div>
            <div className='under-statement'>
                Get them here, we are a safe plce for kids to enjoy as well as learn something .
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
    )
}
export default Landing