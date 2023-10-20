import styles from "./MethodStep.module.css";
import classes from "./DetailPage.module.css";

function MethodStep(props) {
	return (
		<div className="step-container">
			<h3 className={classes.heading3}>{"Step " + (props.index + 1)}</h3>
			<div className={styles.step_detail_container}>
				<img src={props.img} alt="step1" className={styles.step_img} />
				<p className={styles.step_content}>{props.description}</p>
			</div>
		</div>
	);
}

export default MethodStep;
