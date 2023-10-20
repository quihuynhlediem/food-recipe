import styles from "./InputPage.module.css";
import { useState } from "react";
import MainHeader from "./MainHeader";
import PostsList from "./PostsList";

function InputPage() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

	return (
    <div className={styles.input_page}>
      <MainHeader onCreatePost={showModalHandler} />
			<main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
			</main>
		</div>
	);
}

export default InputPage;
