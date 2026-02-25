const Activities = () => {
	return (
		<div className="max-w-285 mx-auto w-full md:flex -mt-36">
			{/* Cabins */}
			<div className="relative p-4">
				<h3
					className="absolute z-10 top-[50%] left-[50%]
				translate-x-[-50%] translate-y-[-50%] text-5xl text-white font-bold">
					Cabins
				</h3>
				<img
					src="/src/assets/activities-1.webp"
					alt="cabin in woods"
					className="w-full h-full object-cover relative rounded-xl border-4 border-white shadow-lg"
				/>
			</div>
			{/* Camping */}
			<div className="relative p-4">
				<h3
					className="absolute z-10 top-[50%] left-[50%]
				translate-x-[-50%] translate-y-[-50%] text-5xl text-white font-bold">
					Camping
				</h3>
				<img
					src="/src/assets/activities-2.webp"
					alt="campsite"
					className="w-full h-full object-cover relative rounded-xl border-4 border-white shadow-lg"
				/>
			</div>
			{/* Excursions */}
			<div className="relative p-4">
				<h3
					className="absolute z-10 top-[50%] left-[50%]
				translate-x-[-50%] translate-y-[-50%] text-5xl text-white font-bold">
					Excursions
				</h3>
				<img
					src="/src/assets/activities-3.webp"
					alt="bridge through woods"
					className="w-full h-full object-cover relative rounded-xl border-4 border-white shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Activities;
