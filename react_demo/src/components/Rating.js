import React, { useEffect, useState } from "react";
import styles from "./Rating.module.css";

function Rating() {
	const [rating, setRating] = useState(0);

	const ratingHandler = (event) => {
		const rating = event.target.value;
		setRating(rating);
		localStorage.setItem("rating", rating);
	};

	useEffect(() => {
		// Change the color of labels with a value less than the rating value
		const starLabels = document.querySelectorAll(`.${styles.star_label}`);
		starLabels.forEach((label, index) => {
			const labelValue = index + 1;
			if (labelValue <= rating) {
				label.style.color = "#0053a6";
			} else {
				label.style.color = "gray"; // Set the color for unselected stars
			}
		});
	}, [rating]);

	return (
		<div className={styles.rating_container}>
			<p className={styles.rating_title}>Average Member Rating</p>
			<div className={styles.comment_star}>
				<label className={styles.star_label_comment}>&#9733;</label>
				<label className={styles.star_label_comment}>&#9733;</label>
				<label className={styles.star_label_comment}>&#9733;</label>
				<label className={styles.star_label_comment}>&#9733;</label>
				<label className={styles.star_label_comment}>&#9733;</label>
			</div>
			<p className={styles.rating_title}>Rate This Recipe</p>
			<div className={styles.rating}>
				<input
					type="radio"
					id="star1"
					name="rating"
					value="1"
					onClick={ratingHandler}
				/>
				<label className={styles.star_label} for="star1">
					&#9733;
				</label>
				<input
					type="radio"
					id="star2"
					name="rating"
					value="2"
					onClick={ratingHandler}
				/>
				<label className={styles.star_label} for="star2">
					&#9733;
				</label>
				<input
					type="radio"
					id="star3"
					name="rating"
					value="3"
					onClick={ratingHandler}
				/>
				<label className={styles.star_label} for="star3">
					&#9733;
				</label>
				<input
					type="radio"
					id="star4"
					name="rating"
					value="4"
					onClick={ratingHandler}
				/>
				<label className={styles.star_label} for="star4">
					&#9733;
				</label>
				<input
					type="radio"
					id="star5"
					name="rating"
					value="5"
					onClick={ratingHandler}
				/>
				<label className={styles.star_label} for="star5">
					&#9733;
				</label>
			</div>
			<p className={styles.rating_title}>
				<span className={styles.people_rating_number}>916</span> people have
				rated this recipe.
			</p>
		</div>
	);
}

export default Rating;
