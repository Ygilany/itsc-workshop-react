import { PersonAvatar } from "./PersonAvatar";
import { PersonName } from "./PersonName";

export interface PersonProps {
    name: string;
    img: string;
}

export const Person: React.FC<PersonProps> = ({ name, img }) => {
    return <>
        <PersonName name={name} />
        <PersonAvatar name={name} img={img} />
    </>;
};