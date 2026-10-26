import existing from './project-stories.json';
import updates from './october-26-projects.json';
export default [...updates,...existing.filter(p=>!updates.some(u=>u.slug===p.slug))];
