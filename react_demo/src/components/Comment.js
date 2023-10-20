import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentShow from "./CommentShow";
// import { onValue, ref } from "firebase/database";
// import { database } from "./Config";

function Comment() {

	let comment =
		localStorage.getItem("commentData") === null
			? []
			: JSON.parse(localStorage.getItem("commentData"));
	
	// let comment;
	// let postId = localStorage.getItem("id");
	// onValue(ref(database, `post-detail/${postId}/comments`), (snapshot) => {
	// 	console.log(snapshot.val());
	// 	comment = Object.values(snapshot.val());
	// 	// setCommentData(snapshot.val());
	// });
	const [commentData, setCommentData] = useState(comment);

	function enteredCommentData(data) {
		setCommentData(data);
	}

	return (
		<div>
			<CommentInput updateCommentData={enteredCommentData} />
			{commentData.map((comment, index) => (
				<CommentShow
					commentDate={comment.date}
					commentContent={comment.content}
					commentImage={comment.img}
					key={index}
					id={index}
				/>
			))}
			;
		</div>
	);
}

export default Comment;
