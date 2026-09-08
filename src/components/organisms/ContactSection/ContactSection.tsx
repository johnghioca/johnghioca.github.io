import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";
import { FormField } from "@/components/molecules/FormField";
import type { FormFieldConfig } from "@/content/home";

type ContactSectionProps = {
	id: string;
	title: string;
	formAction: string;
	formMethod: "post";
	fields: FormFieldConfig[];
	requiredNote: string;
	submitLabel: string;
};

const ContactSection = ({
	id,
	title,
	formAction,
	formMethod,
	fields,
	requiredNote,
	submitLabel,
}: ContactSectionProps) => {
	return (
		<Section id={id}>
			<Heading>{title}</Heading>
			<form
				className="m-0 px-0 pt-4 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-2"
				action={formAction}
				method={formMethod}
			>
				{fields.map((field) =>
					field.as === "textarea" ? (
						<FormField key={field.id} {...field} />
					) : (
						<FormField key={field.id} className="mb-4" {...field} />
					),
				)}
				<div className="m-0 p-0 border-0 md:col-span-2">
					<Paragraph className="mb-4">
						<small>{requiredNote}</small>
					</Paragraph>
					<Button type="submit">{submitLabel}</Button>
				</div>
			</form>
		</Section>
	);
};

export { ContactSection, type ContactSectionProps };
