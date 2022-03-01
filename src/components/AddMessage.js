function AddMessage(props) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.addMessage(e.target.message.value);
				e.target.reset();
			}}
		>
			<input
				className="message-input"
				name="message"
				placeholder="Type a message"
				required
			/>
		</form>
	);
}

export default AddMessage;
