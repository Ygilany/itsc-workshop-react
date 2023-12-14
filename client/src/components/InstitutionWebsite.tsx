interface InstitutionWebsiteProps {
    website: string;
}
export const InstitutionWebsite = ({ website }: InstitutionWebsiteProps) => {
return <a href={website}>{website}</a>;
};