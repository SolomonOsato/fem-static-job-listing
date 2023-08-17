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
	chip: Chip;
	handleClick: (request: Request) => void;
}

export default function FilterChip({ chip, handleClick }: Props) {
	return (
		<span
			style={{ paddingInlineStart: "0.5rem", overflow: "hidden", }}
			className="bg-tab  flex-between text-primary fw-bold radius-regular"
		>
			<span className="bg-tab text-primary">{ chip.value }</span>
			<button
				className="bg-primary text-white fw-bold"
				onClick={ () => {
					handleClick({
						method: "DELETE",
						property: chip.property,
						value: chip.value
							})
				} }>
					X
				</button>
		</span>
	)
}
