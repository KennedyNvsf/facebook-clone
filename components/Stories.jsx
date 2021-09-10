import React from 'react';
//COMPONENTS
import StoryCard from "./StoryCard";

const stories = [

    {
        name: "Kennedy Devs",
        src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fm=jpg",
        profile:"https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/Kxk",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy",
    },
]


function Stories() {


    return (

        <div className="flex justify-center space-x-3 mx-auto">

            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
            
        </div>
    )
}

export default Stories;
