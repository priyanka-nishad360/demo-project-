import Section from "../../../components/pageLayouts/Section";
import { H1,H3 } from "../../../components/pageLayouts/Headings";
import InvoiceForm from "../../../components/invoice/InvoiceForm";
export default function InvoiceGenerator() {
    return (
		<>
			<Section>
            <H1 className=" justify-center" >Invoice Generator</H1>
				<InvoiceForm/>
			</Section>
		</>
	);
}
