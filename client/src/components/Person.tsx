import { PersonAvatar } from "./PersonAvatar";
import { PersonName } from "./PersonName";

export interface PersonProps {
    person: {
        name: string;
        img?: string;
    }
}

export const Person: React.FC<PersonProps> = ({person: { name, img }}) => {
    return <>
        <PersonName name={name} />
        { img ? <PersonAvatar name={name} img={img} /> : null }
        {/* { img && <PersonAvatar name={name} img={img} /> } */}
    </>;
};