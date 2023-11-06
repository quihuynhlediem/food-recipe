import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { database } from "./Config";
import { ref, set, onValue } from "firebase/database";
import { v4 } from "uuid";

function PostsList({ isPosting, onStopPosting }) {
	onValue(ref(database, "posts"), (snapshot) => {
    const data = snapshot.val() === null ? [] : snapshot.val();
    // if (data === null) {
		// 	return;
    // } else {
			localStorage.setItem("postData", JSON.stringify(data));
    // };
	});
	let initialPostData = Object.values(
		localStorage.getItem("postData") === null
			? []
			: JSON.parse(localStorage.getItem("postData"))
  );
  let initialPostIdData = Object.keys(
		localStorage.getItem("postData") === null
			? []
			: JSON.parse(localStorage.getItem("postData"))
  );

	const [posts, setPosts] = useState(initialPostData);
	const [postId, setPostId] = useState(initialPostIdData);

	const addPostHandler = (newPostData, newPostDetail) => {
		setPosts((existedPost) => [...existedPost, newPostDetail]);
		let postId = v4();
		setPostId((existedPostId) => [...existedPostId, postId]);
		set(ref(database, `post-detail/${postId}`), newPostDetail);
		set(ref(database, `posts/${postId}`), newPostData);
	};
	
	const deletePostHandler = (event) => {
		let postId = event.target.id;
		setPosts((existedPost) => {
			return existedPost.filter((post) => post.id !== postId);
		});
		setPostId((existedPostId) => {
			return existedPostId.filter((id) => id !== postId);
		}
		);
		set(ref(database, `post-detail/${postId}`), null);
		set(ref(database, `posts/${postId}`), null);
		window.location.href = "/";
	}
  
  const setPostIdHandler = (event) => {
    localStorage.setItem("id", event.target.id);
    // console.log(event.target.id);
    window.location.href = "/detail";
  }

	return (
		<>
			{isPosting ? (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			) : null}
			{posts.length === 0 ? (
				<div style={{ textAlign: "center", color: "#0053a6" }}>
					<h2>No post yet</h2>
					<div>Start adding something now</div>
				</div>
			) : (
				<ul className={classes.posts}>
					{posts.map((postItem, index) => (
						<Post
							id={postId[index]}
							key={index}
							author={postItem.author}
							body={postItem.title}
							onOpen={setPostIdHandler}
							onDelete={deletePostHandler}
						/>
					))}
				</ul>
			)}
		</>
	);
}

export default PostsList;
