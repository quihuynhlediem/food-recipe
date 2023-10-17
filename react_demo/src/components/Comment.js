import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentShow from "./CommentShow";

function Comment() {
	let comment =
		localStorage.getItem("commentData") === null
			? []
			: JSON.parse(localStorage.getItem("commentData"));
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
					key={index}
				/>
			))}
			;
		</div>
	);
}

export default Comment;
