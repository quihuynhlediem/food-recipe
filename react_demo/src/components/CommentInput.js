import styles from "./CommentInput.module.css";
import avatarImg from "../images/user-avatar.png";

function CommentInput(props) {
	function handleCommentSubmit() {
		let dt = new Date();
		let date =
			dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
		let commentText = document.getElementById("commentContent").value;

		let commentData =
			localStorage.getItem("commentData") === null
				? []
				: JSON.parse(localStorage.getItem("commentData"));
		let comment = {
			date: date,
			content: commentText,
		};
		commentData.push(comment);
		props.updateCommentData(commentData);
		localStorage.setItem("commentData", JSON.stringify(commentData));

		document.getElementById("commentContent").value = "";
	}

	return (
		<div className={styles.comment_box}>
			<div className={styles.comment_box_container}>
				<img className={styles.user_avatar_cmt} alt="avatar" src={avatarImg} />
				<form className={styles.form_container}>
					<textarea
						className={styles.comment}
						id="commentContent"
						name="comment"
						placeholder="Note your cooking journey here"
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
