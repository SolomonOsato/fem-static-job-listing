import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.1,
          },
        }}
        exit={{
          opacity: 0,
        }}
        key={chip.value}
        style={{ paddingInlineStart: "0.5rem", overflow: "hidden" }}
        className="bg-tab  flex-between text-primary fw-bold radius-regular"
      >
        <span className="bg-tab text-primary">{chip.value}</span>
        <button
          className="bg-primary text-white fw-bold"
          onClick={() => {
            handleClick({
              method: "DELETE",
              property: chip.property,
              value: chip.value,
            });
          }}
        >
          X
        </button>
      </motion.span>
    </AnimatePresence>
  );
}
