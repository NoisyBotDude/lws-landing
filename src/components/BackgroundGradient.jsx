
const BackgroundGradient = () => {
	return (
		<>
			{/* Base background */}
			<div className="fixed inset-0 -z-10 bg-black" />

			{/* Static ambient corner gradients */}
			<div
				className="fixed inset-0 -z-10"
				style={{
					background: `
						radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 30%),
						radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 30%)
					`,
				}}
			/>
		</>
	);
};

export default BackgroundGradient; 