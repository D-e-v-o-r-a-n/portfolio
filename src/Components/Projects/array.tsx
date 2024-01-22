export interface projectInterface {
    name: string;
    description: string;
    links: string[];
    images: string[];
    tags: string[];
    id: number;
}
const projectsArray:projectInterface[] = [];
projectsArray.push({
    name: 'WITM',
     description: 'A web game where user can log in with their Spotify account and try to guess songs after listening to snippets',
     links:['https://witm-2e81a.web.app/#','https://github.com/D-e-v-o-r-a-n/JTM'],
     images:['/Images/Witm1.png','/Images/Witm2.png','/Images/Witm3.png'],
     tags:['HTML','CSS','JavaScript','SCSS','React'],
     id:0
})

projectsArray.push({
    name: 'DSRP',
     description: 'Web app which creates spotify playlist with recommended songs, based on user input and allows for automatic assigment to their profile',
     links:['https://dsrp-d0017.web.app/#','https://github.com/D-e-v-o-r-a-n/DSR'],
     images:['/Images/Dsrp1.png','/Images/Dsrp2.png']
     ,tags:['HTML','CSS','JavaScript','SCSS','React'],
     id:1
})

projectsArray.push({
    name: 'Aurebesh Translator',
    description: 'Web app which allows for transcription to alphabeth from star wars - aurebesh',
    links:["https://aurebeshtranslator-6db2a.web.app/",''],
    images:['/Images/Arbsh1.png',],
    tags:['HTML','CSS','JavaScript','SCSS','React'],
    id:2
})

projectsArray.push({
    name: 'This Portfolio',
    description: 'This is the portfolio you are looking at right now!',
    links:["/",'https://github.com/D-e-v-o-r-a-n/portfolio'],
    images:['/Images/Portfolio1.png',],
    tags:['HTML','CSS','TypeScript','SCSS','React','Reach Router'],
    id:3
})

export default projectsArray