import React, { useState } from "react";
// import CommentShow from "./CommentShow";
import styles from "./CommentInput.module.css";
import avatarImg from "../images/user-avatar.png";

function CommentInput() {
	const [commentText, setCommentText] = useState("");
  const [commentDate, setCommentDate] = useState("");
  
  const commentStoreHandler = (date, commentContent) => {
    let commentData = (localStorage.getItem("commentData") === null) ? [] : JSON.parse(localStorage.getItem("commentData"));
    const comment = {
      date: date,
      content: commentContent
    }
    commentData.push(comment);
    localStorage.setItem("commentData", JSON.stringify(commentData));
   };

	const handleCommentSubmit = () => {
		// You can access the commentText state to get the textarea value here
    console.log("Comment submitted:", commentText);
    
		let dt = new Date();
		const day = dt.getDate();
		const month = dt.getMonth() + 1; // Month is 0-based, so add 1 to get the actual month (1-12)
    const year = dt.getFullYear();
    setCommentDate(`${day}/${month}/${year}`);
    console.log("Comment date:", commentDate);

    commentStoreHandler(commentDate, commentText);
    window.location.reload();

    // return (
    //   <CommentShow
    //     commentDate={commentDate}
    //     commentText={commentText}
    //   />)
    // Add logic to send the comment data to your server or perform other actions
	};

	return (
		<div className={styles.comment_box}>
			<div className={styles.comment_box_container}>
				<img className={styles.user_avatar_cmt} alt="avatar" src={avatarImg} />
				<form className={styles.form_container}>
					<textarea
						className={styles.comment}
						name="comment"
						placeholder="Note your cooking journey here"
						onChange={(e) => setCommentText(e.target.value)}
					></textarea>
				</form>
			</div>
			<div className={styles.button_container}>
				<button
					type="submit"
					className={styles.submit_btn}
					onClick={handleCommentSubmit}
				>
					Comment
				</button>
				<button type="cancel" className={styles.cancel_btn}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default CommentInput;
