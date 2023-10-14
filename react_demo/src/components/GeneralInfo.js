import styles from "./GeneralInfo.module.css";
import Ingredient from "./Ingredient";
import Author from "./Author";
import Rating from "./Rating";

function GeneralInfo() {
	return (
		<div className={styles.general_info_container}>
			<Ingredient />
			<div className={styles.author_rating}>
				<Author />
				<Rating />
			</div>
		</div>
	);
}

export default GeneralInfo;
