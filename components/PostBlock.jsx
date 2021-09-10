import React from 'react';
//next
import Image from "next/image";
//heroicons
import {ChatAltIcon, ThumbUpIcon, ShareIcon} from "@heroicons/react/outline"


function PostBlock({postImage, timestamp, message}) {

    return (

        <div className="flex flex-col"> 

            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm ">

                <div className="flex items-center space-x-2">

                    <img className="rounded-full" src="https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg"  width={40} height={40} />

                        <div>
                            <p className="font-medium">Kennedy Devs</p>
                            <p className="text-xs text-gray-400" >{new Date(timestamp?.toDate()).toLocaleString()}</p>
                        </div>

                 </div>

                 <p className="p-4">{message}</p>

            </div>

            {postImage && (

                <div className="relative h-56 md:-h-96 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill"/>
                </div>
            )}  

            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t ">

                <div className="inputIcon rounded-none rounded-bl-2xl">
                    <ThumbUpIcon className="h-4"/>
                    <p className="text-xs sm:text-base" >Like</p>
                </div>

                <div className="inputIcon rounded-none">
                     <ChatAltIcon className="h-4"/>
                    <p className="text-xs sm:text-base" >Comment</p>
                </div>

                <div className="inputIcon rounded-none rounded-br-2xl">
                    <ShareIcon className="h-4"/>
                    <p className="text-xs sm:text-base" >Share</p>
                </div>

            </div>          
            
        </div>
    )
}

export default PostBlock;
