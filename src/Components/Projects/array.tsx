export interface projectInterface {
    name: string;
    description: string;
    images: string[];
    id: number;
}
const projectsArray:projectInterface[] = [];
projectsArray.push({name: 'Witm', description: 'A web game where user can log in with his Spotify account and try to guess songs after listening to snippets',images:['/Images/Witm1.png','/Images/Witm2.png','/Images/Witm3.png'],id:0})
projectsArray.push({name: 'DSRP', description: 'Web app which creates spotify playlist with recommended songs, based on user input',images:['/Images/Dsrp1.png','/Images/Dsrp2.png'],id:1})
projectsArray.push({name: 'Aurebesh Translator', description: 'Web app which allows for transcription to alphabeth from star wars - aurebesh' ,images:['/Images/Arbsh1.png',],id:2})

export default projectsArray