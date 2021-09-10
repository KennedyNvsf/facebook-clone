
import React,{useRef, useState} from 'react';
//firebase 
import firebase from "firebase";
import {db, storage} from "../firebase";
//next
import Image from "next/image";
//icons
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";



function InputBox() {

    const inputRef = useRef(null);
    const imgFileRef = useRef(null);

    const [imgTo_post, setImgTo_post] = useState(null);

    const sendPost = (e) =>{

        e.preventDefault();

        if(!inputRef.current.value) return;

        db.collection("posts").add({

            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        }).then((doc) => {

            if(imgTo_post){

                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imgTo_post, 'data_url');

                removeImgPost();

                uploadTask.on('state_change', null, error => console.error(error), () => {

                    //when the upload completes
                    storage.ref(`posts/${doc.id}`).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({

                            postImage: url,

                        }, {merge: true});
                    })
                })
            }
        })

        inputRef.current.value = "";
    }

    const addImgPost = (e) =>{

        e.preventDefault();

        const reader = new FileReader();

        if(e.target.files[0]){

            reader.readAsDataURL(e.target.files[0]);

        }

        reader.onload = (readerEvent) => {

            setImgTo_post(readerEvent.target.result);

        }

    }

    const removeImgPost = () => {

        setImgTo_post(null);
    }

    return (

        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">

            <div className="flex space-x-4 p-4 items-center">

                <Image
                    src="https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg"
                    className="rounded-full"
                    width={40}
                    height={40}
                    layout="fixed"
                />

                <form className="flex flex-1">

                    <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder="What's on your mind Kennedy" />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>

                {imgTo_post && (

                    <div onClick={removeImgPost} className="flex flex-col filter hover:brightness-110 transtion duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imgTo_post} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}

            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="inputIcon" onClick={() => imgFileRef.current.click()} >
                    <CameraIcon className="h-7 text-blue-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={imgFileRef} onChange={addImgPost} type="file" hidden />
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
            
        </div>
    )
}

export default InputBox;
