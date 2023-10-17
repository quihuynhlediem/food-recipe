import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentShow from "./CommentShow";

function Comment() {
	let comment =
		localStorage.getItem("commentData") === null
			? []
			: JSON.parse(localStorage.getItem("commentData"));
	const [commentText, setCommentText] = useState("");
	const [commentDate, setCommentDate] = useState("");
	const [commentData, setCommentData] = useState(comment);

	function enteredCommentContent(content) {
		setCommentText(content);
	}

	function enteredCommentDate(date) {
		setCommentDate(date);
	}

	function enteredCommentData(data) {
		setCommentData(data);
	}

	return (
		<div>
			<CommentInput
				updateCommentContent={enteredCommentContent}
				updateCommentDate={enteredCommentDate}
				updateCommentData={enteredCommentData}
			/>
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
