
const fs = require('fs');

try {
    // Helper to read file with potential encoding issues
    const readFile = (path) => {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf8'));
        } catch (e) {
            console.error("Read Error:", e.message);
            return [];
        }
    };

    const repos = readFile('repos_utf8.json');
    const events = readFile('events_utf8.json');

    // Process Repos
    const projects = repos.map(repo => {
        return {
            name: repo.name,
            description: repo.description,
            language: repo.language,
            html_url: repo.html_url,
            homepage: repo.homepage,
            updated_at: repo.updated_at,
            topics: repo.topics || [],
            is_fork: repo.fork
        };
    });

    // Simple sorting by update time
    projects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    console.log(JSON.stringify(projects.slice(0, 5), null, 2));

} catch (error) {
    console.error("Error parsing:", error);
}
