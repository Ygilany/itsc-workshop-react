import { InstitutionAvatar } from "./InstitutionAvatar";
import { InstitutionName } from "./InstitutionName";
import { InstitutionWebsite } from "./InstitutionWebsite";

export interface InstitutionProps {
    institution: {
        name: string;
        website: string;
        img?: string;
    }
}

export const Institution: React.FC<InstitutionProps> = ({institution: { name, website, img }}) => {
    return <>
        <InstitutionName name={name} />
        <InstitutionWebsite website={website} />
        { img ? <InstitutionAvatar name={name} img={img} /> : null }
        {/* { img && <PersonAvatar name={name} img={img} /> } */}
    </>;
};