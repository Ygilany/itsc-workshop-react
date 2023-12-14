interface InstitutionNameProps {
    name: string;
}
export const InstitutionName = ({ name }: InstitutionNameProps) => {
return <div><b>{name}</b></div>;
};