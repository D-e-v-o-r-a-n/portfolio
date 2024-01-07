export interface projectInterface {
    name: string;
    description: string;
    image: string
}
const projectsArray:projectInterface[] = [];
projectsArray.push({name: 'Witm', description: 'A web game where user can log in with his Spotify account and try to guess songs after listening to snippets',image:'none'})
projectsArray.push({name: 'DSRP', description: 'Web app which creates spotify playlist with recommended songs, based on user input',image:'none'})

export default projectsArray