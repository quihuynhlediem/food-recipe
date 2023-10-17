import MethodStep from "./MethodStep";
import styles from "./Method.module.css";

const method = [
	[
		{
			description:
				"Preheat oven to 400° and line two large baking sheets with parchment paper. In a bowl, combine the goat cheese, chorizo and chives. Season to taste with salt and pepper.",
			img: "https://foodrecipes.inspirythemes.com/classic/wp-content/uploads/sites/2/2012/08/Goat-Cheese-Chorizo-Rolls21-940x721.jpg",
		},
		{
			description:
				"Lay a sheet of phyllo on a clean, dry work surface and brush it with melted butter. Top with two more sheets, lightly buttering each as you go. Cut the layered phyllo into six long rectangles. Place one tablespoon of the goat cheese filling at the base of each rectangle and roll up the phyllo, folding in the sides as you go. Repeat twice more to make 18 rolls total.",
			img: "https://foodrecipes.inspirythemes.com/classic/wp-content/uploads/sites/2/2012/08/Goat-Cheese-Chorizo-Rolls21-940x721.jpg",
		},
		{
			description:
				"Place the rolls on the prepared baking sheets and brush the rolls with butter; bake for 10 minutes, or until golden. Serve hot with chimichurri rojo for dipping.",
			img: "https://foodrecipes.inspirythemes.com/classic/wp-content/uploads/sites/2/2012/08/Goat-Cheese-Chorizo-Rolls21-940x721.jpg",
		},
	],
	[],
];

function Method() {
	let methodItem = method[0]; //thay id của món vào để truy xuất dữ liệu
	return (
		<div className={styles.method_container}>
			<h2 className="heading2">Method</h2>
			{methodItem.map((item, index) => (
				<MethodStep key={index} description={item.description} img={item.img} />
			))}
		</div>
	);
}

export default Method;
