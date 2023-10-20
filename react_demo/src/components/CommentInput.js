import styles from "./CommentInput.module.css";
import avatarImg from "../images/user-avatar.png";
import { imgStorage } from "./Config";
// import { database } from "./Config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { set, onValue } from "firebase/database";
import { useState } from "react";
import { v4 } from "uuid";

function CommentInput(props) {
	const [image, setImage] = useState("");

	function handleCommentSubmit() {
		let dt = new Date();
		let date =
			dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
		let commentText = document.getElementById("commentContent").value;

		let imgId = v4();
		const imgRef = ref(imgStorage, `files/${imgId}`);
		uploadBytes(imgRef, image);
		setTimeout(() => {
			getDownloadURL(ref(imgStorage, `files/${imgId}`)).then((url) => {
				let commentData =
					localStorage.getItem("commentData") === null
						? []
						: JSON.parse(localStorage.getItem("commentData"));
				let comment = {
					date: date,
					content: commentText,
					img: url,
				};
				commentData.push(comment);
				props.updateCommentData(commentData);
				// let postId = localStorage.getItem("id");
				// set(ref(database, `post-detail/${postId}`), {
				// 	comments: commentData
				// });
				localStorage.setItem("commentData", JSON.stringify(commentData));
			});
		}, 1000);

		document.getElementById("commentContent").value = "";
		document.getElementById("imgInput").value = "";
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
					<input id="imgInput" type="file" onChange={(e) => setImage(e.target.files[0])} />
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
