
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
                    <p>

                        StorySpark: DEVPOST.

                        Our motivation:

                        With the recent emergence of artificial intelligence, it has permeated every aspect of our lives. From your university friends using it for assignments to your parents relying on it for recipes, and even your 90-year-old neighbour utilising it to inquire about her medical condition, AI is ubiquitous! However, young children do not use it enough, despite being the future and the ones tasked with "saving the world from the dangers of AI’. Instead, we give them short-form content on social media platforms, which has “harmful effects on [their] attention span and mental development”, hindering their academic prospects. We want the future generation to develop into leaders that can help us save the world for the disasters that we are currently facing.

                        What purpose does it serve?

                        Our primary objective was to provide young children with engaging and positive content that educates them, offering entertainment while allowing them to explore topics of interest at their discretion. This empowers them with a sense of control, mirroring the adaptive nature of short-form content that adjusts to individual preferences, a feature we aimed to preserve in our product.

                        How it works:

                        [ maia can you write this]


                        How did we build it?

                        [max can you write this]


                        Obstacles that we run into:

                        We ran into quite a bit of obstacles over the last 2 days. Our main problem was bugs in the code, which took some time to fix. The bugs include

                        Our coding team worked hard to resolve these problems in the end. StorySearch also did not contain as many features as we originally liked, as we ran out of time.


                        However, none of this compares to our biggest challenge, staying awake. Our team worked countless hours during the night to tackle the challenges that we run into.


                        We weren't able to implement as many features as we wanted
                        Story user information:
                        Staying awake



                        What we will take away for the future:

                        Over the past few days, we've gained valuable insights and knowledge. Participating in UNIHACK has provided us with an incredible opportunity for learning. We feel that this experience has equipped us with valuable lessons that will benefit our future entrepreneurial endeavours. Through this event, we've developed a deeper understanding of the processes and challenges involved, along with effective strategies for managing them. We've enhanced our teamwork skills through this experience, recognizing that collaboration often requires compromises, which can be challenging. Nonetheless, we view it as a vital lesson in our personal and professional growth

                        What next for us:

                        We came into the weekend not knowing what to expect as many of us had never met. However, as we approach the end of the weekend now, we've formed a strong bond with like minded individuals, and I'm confident that this experience has forged lifelong friendships among us and that we will continue working on projects together as the chemistry is great.

                        What is next for StorySearch, we originally wanted to add more features than we currently have, however did not have enough time to complete. Some extra features include imagine search, option for parents to moderate it for their children and 3D features for our book.

                        We will keep working on this product and try to improve StorySearch. We currently don’t have any plans to monetise it, however that is something that we would like to do if we can further develop our product.


                    </p>
                </div>
            </div>
        </>
    )
}
export default Landing