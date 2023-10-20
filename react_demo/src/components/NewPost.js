import classes from "./NewPost.module.css";
import { useState } from "react";
import { v4 } from "uuid";
import { imgStorage } from "./Config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function NewPost(props) {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");
	const [ingreInput, setIngreInput] = useState([]);
	const [stepInput, setStepInput] = useState([]);
	const [image, setImage] = useState("");
	let imgInputStyle = classes.img_step;

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		let enterStep = [];
		let enterIngre = [];
		for (let i = 0; i < ingreInput.length; i++) {
			let enteredIngre = document.getElementById(ingreInput[i]).value;
			enterIngre.push(enteredIngre);
		}
		for (let i = 0; i < stepInput.length; i++) {
			let enteredStepDescription = document.getElementById(stepInput[i]).value;
			let enteredStepImg = JSON.parse(localStorage.getItem("currentImgUrl"));
			let enteredStep = {
				description: enteredStepDescription,
				img: enteredStepImg[i],
			};
			enterStep.push(enteredStep);
		}
		const postData = {
			title: enteredBody,
			author: enteredAuthor,
		};
		const postDetail = {
			title: enteredBody,
			author: enteredAuthor,
			ingredients: enterIngre,
			methods: enterStep,
		};
		props.onAddPost(postData, postDetail);
		const imgUrlArray = [];
		localStorage.setItem("currentImgUrl", JSON.stringify(imgUrlArray));	
		props.onCancel();
	}

	function ingredientNumberHandler(event) {
		let enteredIngredientNumber = Number(
			event.target.parentElement.previousElementSibling.value
		);
		let stepArray = [];
		for (let i = 0; i < enteredIngredientNumber; i++) {
			let stepItem = "Ingredient " + (i + 1);
			stepArray.push(stepItem);
		}
		setIngreInput(stepArray);
	}

	function methodNumberHandler(event) {
		let enteredMethodNumber = Number(
			event.target.parentElement.previousElementSibling.value
		);
		let stepArray = [];
		for (let i = 0; i < enteredMethodNumber; i++) {
			let stepItem = "Step " + (i + 1);
			stepArray.push(stepItem);
		}
		setStepInput(stepArray);
	}

	function methodImgHandler() {
		//set up mỗi lần upload ảnh thì sẽ lưu vào local storage
		let imgId = v4();
		const imgRef = ref(imgStorage, `files/${imgId}`);
		uploadBytes(imgRef, image);
		setTimeout(() => {
			getDownloadURL(ref(imgStorage, `files/${imgId}`)).then((url) => {
				let imgUrlArray =
					localStorage.getItem("currentImgUrl") === null
						? []
						: JSON.parse(localStorage.getItem("currentImgUrl"));
				imgUrlArray.push(url);
				localStorage.setItem("currentImgUrl", JSON.stringify(imgUrlArray));
			});
		}, 1000);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="title">Title</label>
				<textarea id="title" required rows={3} onChange={bodyChangeHandler} />
			</p>
			<p>
				<label htmlFor="name">Author name</label>
				<input type="text" id="name" required onChange={authorChangeHandler} />
			</p>
			<p>
				<label htmlFor="ingredients_number">Ingredients</label>
				<input
					type="number"
					id="ingredients_number"
					placeholder="Enter the number of ingredients"
					required
				/>
				<span className={classes.actions}>
					<button type="button" onClick={ingredientNumberHandler}>
						Next
					</button>
				</span>
				{ingreInput.length === 0
					? null
					: ingreInput.map((ingredient) => (
							<>
								<input
									type="text"
									className="ingredients"
									id={ingredient}
									key={ingredient}
									placeholder={ingredient}
									required
								/>
							</>
					  ))}
			</p>
			<p>
				<label htmlFor="methods_number">Methods</label>
				<input
					type="number"
					id="methods_number"
					placeholder="Enter the number of methods"
					required
				/>
				<span className={classes.actions}>
					<button type="button" onClick={methodNumberHandler}>
						Next
					</button>
				</span>
				{stepInput.length === 0
					? null
					: stepInput.map((step) => (
							<>
								<input
									type="text"
									className="methods"
									id={step}
									key={step}
									placeholder={step}
									required
								/>
								<input
									className={{ imgInputStyle, mainName: "methodImgInput" }}
									id={step}
									type="file"
									onChange={(e) => {
										setImage(e.target.files[0]);
										methodImgHandler();
									}}
								/>
								{/* <span onClick={methodImgHandler}>Upload</span> */}
							</>
					  ))}
			</p>
			<p className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button>Submit</button>
			</p>
		</form>
	);
}

export default NewPost;
