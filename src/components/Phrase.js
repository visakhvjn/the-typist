import { Letter } from "./Letter";
import '../App.css';

export function Phrase(props) {

	const originalLetters = props.original.split('');
	const typedLetters = props.typed.split('');

	return (
		<div className="phrase">
		{
			originalLetters.map((letter, position) => {

				const showCursor = position === typedLetters.length;

				return <Letter
					showCursor={showCursor}
					key={position}
					text={letter}
					typedText={typedLetters[position]}
				/>
			})
		}
		</div>
	)
}