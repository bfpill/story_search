
import { useEffect, useState } from 'react'
import './Landing.css'
import kidPicture1 from './How-Reading-Can-Help-Your-Child-Be-More-Happy-and-Healthy-01.jpg'
import kidPicture2 from './article_142_width_710_height_340_crop_true_center_true_quality_75.jpg'
import kidPicture3 from './best-ipad-apps-for-kids-1.jpg'
import kidPicture4 from './ipad_kid.png'
import { HomeBar } from "../NavBar"


function Landing() {
    const [visibleLetters, setVisibleLetters] = useState(0);
    const text = "A safe, familar way for kids to learn whatever they please...";
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
        <div className="h-screen w-screen relative">
            <div className="z-20 absolute absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
                <HomeBar expand={false} />
            </div>
            <div className="flex flex-col mt-10">
                <div className='statement'>
                    <h1>
                        {text.split('').slice(0, visibleLetters).join('')}
                    </h1>
                </div>
                <div className='under-statement'>
                    Get them here, we are a safe place for kids to reach their potential.
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
            <div className="w-full h-screen flex justify-center mt-[300px] top-level">
                <div className="w-2/3">
                    <div className="container">
                        <div className="content">
                            <h1 className='h1'>StorySearch: Empowering Young Minds</h1>
                            <p>When building this website, we openly recognised the potential of AI in shaping our world, and saw its potential educational benefits for young children. Alongside this, we considered the issues facing children in our modern world. The content that many kids consume is what is often referred to as ‘short-form’, meaning it is easy to consume and ‘snackable’. This can negatively impact their attention span, and is not as educational as it supposedly could be.</p>    <div className="mission">

                            </div>

                            <div className="how-it-works">
                                <h2>How It Works:</h2>
                                <p>Our platform, StorySearch, is designed to captivate young minds through interactive and educational content. From captivating stories to immersive learning experiences, children can engage with a wide range of topics curated to stimulate their curiosity and creativity.</p>
                            </div>

                            <div className="development-journey">
                                <h2>What do we think:</h2>
                                <p>When building this website, we openly recognised the potential of AI in shaping our world. While these technologies have made so many aspects of our day to day lives easier, we identified an area where its content-generation capabilities have not yet been seen…. Educational benefits for young children. Alongside this, we considered the issues facing children in our modern world. The content that many kids consume is what is often referred to as ‘short-form’, meaning it is concise, straight to the point, and ‘snackable’. This can negatively impact their attention span, and is not as educational as it supposedly could be.

                                    Our platform, StorySearch, is designed to captivate young minds through interactive and educational content. From unique stories to immersive learning experiences, children can engage with a wide range of topics curated to stimulate their curiosity and creativity. Once parents create an account for their children, kids can customise their profile and gain access to a personal and open source library of books. Their personal library will include all the books they generate on their own… using the queries they enter into the search bar. Every generated book is powered by a large language model, and has unique images and text that is relevant to the query topic. In the open source library, kids can access books made by other kids their age, who also use StorySearch. Overall, kids can learn about any topic they please in a moderated format that has a complexity which correlates to their age group..
                                </p>
                            </div>

                            <div className="user-experience">
                                <h2>Development/Tech:</h2>
                                <p> In constructing our platform, we employed a multi-faceted approach. We employed OpenAI Image and content generation to create stories books from the users' query. Through API calls to our backend, we enabled users to effortlessly save their books for future access and into a shared book library for all users. We also leveraged Firebase Firestore to associate unique book identifiers with each user account. Additionally, we implemented a Vector Database to cache similar stories and images, optimising content retrieval. On our frontend, our interface was developed using React, enhancing the overall user experience.</p>
                            </div>

                            <div className="future-endeavors">
                                <h2>Future Endeavors:</h2>
                                <p>We came into the weekend not knowing what to expect as many of us had never met. When we approached the end of the weekend, we had formed a strong bond with like minded individuals, and I'm confident that this experience has forged lifelong friendships among us and that we will continue working on projects together.
                                    In terms of our app, StorySearch, we would hope to one day implement all the features we originally thought of. These features include an imagine search option for very young kids, a way for parents to moderate their child's search capabilities in a settings page, as well as a some extra UI features. We also hoped to create options in the book where they can learn about specific topics and ideas mentioned in their generated book.
                                    Moving forward, we would hope to keep working on this product and try to improve StorySearch.
                                </p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Landing