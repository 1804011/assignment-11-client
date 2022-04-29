import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Question.css";
const Question = () => {
	return (
		<div className="question-container d-flex ">
			<div className="question">
				<h2>
					<span>Have any</span>
					<span>questions?</span>
				</h2>
				<p className="my-3">
					Feel free to ask if you guys have any question.We are open to
					questions and reply as soon as possible
				</p>
			</div>
			<div className="input-info">
				<form>
					<input type="text" name="name" id="name" placeholder="Your name" />
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
					/>
					<textarea
						name="question"
						id="question"
						cols="30"
						rows="6"
						placeholder="Question"
					></textarea>
					<button type="submit" className="btn">
						Send it &nbsp;
						<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Question;
