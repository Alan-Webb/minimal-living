const Hero = () => {
	return (
		<div className="w-full h-[90vh]">
			<img
				src="./src/assets/heroBg.webp"
				alt="cabin in woods"
				className="w-full h-full object-cover"
			/>
			<div className="max-w-285 m-auto">
				<div className="absolute top-[40%] w-full md:-[50%] max-w-150 h-full flex flex-col text-white tracking-wider p-4">
					<h1 className="font-bold text-4xl pb-4">
						Remote getaways for focused minds
					</h1>
					<p className="text-3xl italic">
						Minimal Living offers thoughtfully chosen remote cabins for
						corporate retreats that value focus over excess. Step away from
						notifications and meeting rooms, and into an environment built for
						alignment, reflection, and meaningful progress.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
