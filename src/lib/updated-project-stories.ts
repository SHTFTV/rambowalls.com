import existing from './project-stories.json';
import updates from './october-26-projects.json';
import batch2 from './october-26-batch2-projects.json';
import batch3 from './october-26-batch3-projects.json';
const recent=[...batch3,...batch2,...updates];
export default [...recent,...existing.filter(p=>!recent.some(u=>u.slug===p.slug))];
