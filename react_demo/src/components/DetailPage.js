import styles from "./DetailPage.module.css";
import GeneralInfo from "./GeneralInfo";
import Method from "./Method";
import Comment from "./Comment";
import { database } from "./Config";
import { ref, onValue } from "firebase/database";

function DetailPage() {
	// onValue(
	// 	ref(database, "post-detail/" + localStorage.getItem("id")),
	// 	(snapshot) => {
	// 		const data = JSON.stringify(snapshot.val());
	// 		localStorage.setItem("post-detail", data);
	// 	}
	// );

	let title = JSON.parse(localStorage.getItem("post-detail")).title;
	return (
		<>
			<h1 className={styles.heading1}>{title}</h1>
			<GeneralInfo />
			<Method />
			<Comment />
		</>
	);
}
export default DetailPage;
