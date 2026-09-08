import { twMerge } from "tailwind-merge";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Textarea } from "@/components/atoms/Textarea";

type FormFieldBaseProps = {
	id: string;
	name: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
};

type FormFieldInputProps = FormFieldBaseProps & {
	as?: "input";
	type?: "text" | "email";
};

type FormFieldTextareaProps = FormFieldBaseProps & {
	as: "textarea";
	type?: never;
};

type FormFieldProps = FormFieldInputProps | FormFieldTextareaProps;

const FormField = ({
	id,
	name,
	label,
	placeholder,
	required,
	className = "",
	...otherProps
}: FormFieldProps) => {
	const as =
		"as" in otherProps && otherProps.as === "textarea" ? "textarea" : "input";
	const type =
		as === "input" && "type" in otherProps ? otherProps.type : "text";

	return (
		<div className={twMerge("m-0 p-0 border-0", className)}>
			<Label htmlFor={id}>{label}</Label>
			{as === "textarea" ? (
				<Textarea
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			) : (
				<Input
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			)}
		</div>
	);
};

export {
	FormField,
	type FormFieldInputProps,
	type FormFieldProps,
	type FormFieldTextareaProps,
};
