import '../App.css';

export function Letter(props) {

	const overlayText = props.showCursor ? <span className="cursor">_</span> : <></>;

	const letter = props.text === props.typedText ? 
	<b><span className='correctLetter'>{props.text}</span></b> : 
	<span className='letter'>{overlayText}{props.text}</span>;

	return (
		letter
	)
}