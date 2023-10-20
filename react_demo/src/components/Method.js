import MethodStep from "./MethodStep";
import styles from "./Method.module.css";
import classes from "./DetailPage.module.css";

//Link ảnh tạm thời
let imgUrl = "https://foodrecipes.inspirythemes.com/classic/wp-content/uploads/sites/2/2012/08/Goat-Cheese-Chorizo-Rolls21-940x721.jpg";

const method = localStorage.getItem("post-detail") ? JSON.parse(localStorage.getItem("post-detail")).methods : [];

function Method() {
	return (
		<div className={styles.method_container}>
			<h2 className={classes.heading2}>Method</h2>
			{method.map((item, index) => (
				<MethodStep index={index} key={index} description={item} img={imgUrl} />
			))}
		</div>
	);
}

export default Method;
