import styles from "./Ingredient.module.css";
import classes from "./DetailPage.module.css";

// const ingredients = [
// 	"6 medium to small russet potatoes",
// 	"3 tablespoons melted butter",
// 	"Kosher salt and pepper",
// 	"8 ounces sharp cheddar",
// 	"2 ounce cream cheese, softened",
// 	"1 teaspoon crushed red pepper flakes",
// 	"1 roasted red bell pepper, diced into 1/4-inch piece",
// 	"4 slices bacon, cooked until crispy and crumbled",
// 	"3 tablespoons chives, chopped",
// 	"1/2 cup sour cream (optional)",
// ];

const ingredients = localStorage.getItem("post-detail") ? JSON.parse(localStorage.getItem("post-detail")).ingredients : [];

function Ingredient() {
	return (
		<div className="ingredient">
			<h2 className={classes.heading2}>Ingredients</h2>
			<ul className={styles.ingredient_list}>
				{ingredients.map((ingredient, index) => (
					<li className={styles.ingredient_item} key={index}>
						{ingredient}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Ingredient;
