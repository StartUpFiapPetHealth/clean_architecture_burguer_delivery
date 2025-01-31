import type React from "react";
import { useState, type HTMLAttributes } from "react";

interface IQuantityInputProps extends HTMLAttributes<HTMLInputElement> {
	label: string;
}

export const QuantityInput: React.FC<IQuantityInputProps> = ({ label, ...props }) => {
    const [value, setValue] = useState<number>(Number(props.defaultValue) ?? 0)

    const handleIncrement = () => {
        if(value === 0) return;
        setValue(old => old + 1)
    }

    const handleDecrement = () => {
        setValue(old => old - 1)
    }

	return (
		<>
			<label
				htmlFor="counter-input"
				className="block mb-1 text-sm font-medium text-gray-900 "
			>
				{label}
			</label>
			<div className="relative flex items-center">
				<button
                    disabled={value === 1}
					type="button"
					id="decrement-button"
                    onClick={handleDecrement}
					data-input-counter-decrement="counter-input"
					className="shrink-0 bg-gray-700 disabled:bg-gray-300   inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:outline-none"
				>
					<svg
						className="w-2.5 h-2.5 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 2"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h16"
						/>
					</svg>
				</button>
				<input
					type="text"
					id="counter-input"
					data-input-counter
					className="shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
					placeholder=""
					required
                    value={value}
                    {...props}
				/>
				<button
					type="button"
					id="increment-button"
                    onClick={handleIncrement}
					data-input-counter-increment="counter-input"
					className="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
				>
					<svg
						className="w-2.5 h-2.5 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</div>
		</>
	);
};
