interface PersonNameProps {
    name: string;
}
export const PersonName = ({ name }: PersonNameProps) => {
return <div>{name}</div>;
};