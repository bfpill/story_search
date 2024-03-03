
import { useEffect, useState } from 'react'
import './Landing.css'
import kidPicture1 from './How-Reading-Can-Help-Your-Child-Be-More-Happy-and-Healthy-01.jpg'
import kidPicture2 from './article_142_width_710_height_340_crop_true_center_true_quality_75.jpg'
import kidPicture3 from './best-ipad-apps-for-kids-1.jpg'
import kidPicture4 from './ipad_kid.png'
import { HomeBar } from "../NavBar"


function Landing() {
    const [visibleLetters, setVisibleLetters] = useState(0);
    const text = "Is your little one mesmerized by endless scroll of TikTok?";
    useEffect(() => {

        const interval = setInterval(() => {
            setVisibleLetters(prevVisibleLetters => prevVisibleLetters + 1);
        }, 40);

        if (visibleLetters === text.length) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [visibleLetters]);

    return (
        <>
            <div className="z-20 absolute top-4 rounded-full navbar-landing">
                <HomeBar onSearchChange={function (event: any): unknown {
                    throw new Error("Function not implemented.");
                }} expand={false} />
            </div>
            <div className="flex flex-col mt-20">
                <div className='statement'>
                    <h1>
                        {text.split('').slice(0, visibleLetters).join('')}
                    </h1>
                </div>
                <div className='under-statement'>
                    Get them here, we are a safe place for kids to enjoy as well as learn something .
                </div>

                <div className='img-container1 rounded-md'>
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
            <div className="w-full h-screen flex justify-center mt-[300px]">
                <div className="w-2/3">
                <div className="container">
  <div className="content">
    <h1 className='h1'>Story Search: Empowering Young Minds</h1>
    At Story Search, we recognize the transformative potential of artificial intelligence (AI) in shaping our world. While AI has become integral to various aspects of daily life, its educational benefits for young children remain underutilized. Instead, children are often exposed to short-form content on social media platforms, which can negatively impact their attention span and hinder academic development.
    <div className="mission">
      <h2>Our Mission:</h2>
      <p>We aim to empower the next generation by providing engaging and positive content that educates and entertains. Our platform offers children the opportunity to explore topics of interest at their own pace, fostering a sense of control over their learning journey. Similar to the adaptive nature of short-form content, our product adjusts to individual preferences, ensuring a personalized experience for every user.</p>
    </div>
    
    <div className="how-it-works">
      <h2>How It Works:</h2>
      <p>Our platform, Story Search, is designed to captivate young minds through interactive and educational content. From captivating stories to immersive learning experiences, children can engage with a wide range of topics curated to stimulate their curiosity and creativity.</p>
    </div>
    
    <div className="development-journey">
      <h2>Development Journey:</h2>
      <p>Building Story Search was a collaborative effort fueled by passion and dedication. Despite encountering challenges such as code bugs and time constraints, our team persevered to deliver a high-quality product. Through late-night coding sessions and relentless problem-solving, we overcame obstacles to create a platform that inspires learning and explorati</p>
    </div>
    
    <div className="user-experience">
      <h2>User Experience:</h2>
      <p> Story Search is designed to keep children engaged and motivated to learn. By providing a safe and enriching environment, we aim to instill a love for learning and empower children to become future leaders equipped to address global challenges.</p>
    </div>
    
    <div className="future-endeavors">
      <h2>Future Endeavors:</h2>
      <p>As we reflect on our journey, we are grateful for the invaluable lessons learned and experiences gained. Moving forward, we are committed to further enhancing Story Search with additional features such as image search, parental moderation options, and 3D storytelling capabilities. While monetization is not currently a priority, we aspire to explore opportunities for growth and sustainability as we continue to develop our product.</p>
    </div>
    
    
  </div>
</div>

                </div>
            </div>
        </>
    )
}
export default Landing