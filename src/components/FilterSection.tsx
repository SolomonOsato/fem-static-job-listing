import FilterChip from "./FilterChip";

interface Chip {
	property: string;
	value: string;
}

interface Request {
	method: "PUT" | "DELETE" | "CLEAR";
	property: string;
	value: string;
}

interface Props {
	chipStore: Chip[];
	handleClick: (request: Request) => void;
}

export default function FilterSection({ chipStore, handleClick }: Props) {
	return (
		<>
		{ chipStore.length !== 0 &&
		<div className='sortBy bg-white flex-between radius-regular shadow-regular'>
		<div className="cluster">
		{
			chipStore.map((chip, index) => (
				<FilterChip 
					key={index}
					chip={chip}
					handleClick={handleClick}
				/>
			))
		}
		</div>

				<button
					className="bg-white text-neutral-500 fw-regular"
					onClick={() => handleClick({
					method: "CLEAR",
					property: "",
					value: ""
				})}>Clear</button>

		</div>
		}
		</>
	)
}
