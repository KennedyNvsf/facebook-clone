import React from 'react';
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";
import PostBlock from "./PostBlock";

function Posts() {

    const [realtime_posts, loading, error] = useCollection(

        db.collection('posts').orderBy("timestamp", "desc")
    )

    return (
        <div>

            {realtime_posts?.docs.map((post) => (

                <PostBlock

                    key={post.id}
                    message={post.data().message}
                    timestamp={post.data().timestamp}
                    postImage={post.data().postImage}

                />
            ))}
            
        </div>
    )
}

export default Posts;
