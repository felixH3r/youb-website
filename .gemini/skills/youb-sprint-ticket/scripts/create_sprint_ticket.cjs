const { execSync } = require('child_process');

/**
 * Erstellt ein Ticket im YOUB Projekt für den aktuellen Sprint.
 * Nutzung: node create_sprint_ticket.cjs "Titel" "Body" "UI|BACKEND" "priority" "area"
 */
function run() {
    const [title, body, type, , areaInput] = process.argv.slice(2);
    
    if (!title) {
        console.error('Fehler: Titel ist erforderlich.');
        process.exit(1);
    }

    try {
        const repo = "YoubDev/issues";
        const projectNumber = 1;
        const projectId = "PVT_kwDODwNYiM4BQ8oW";
        const sprintFieldId = "PVTIF_lADODwNYiM4BQ8oWzg-66W8";
        const isUi = type === 'UI';
        const assignee = isUi ? "felixH3r" : "RingoDev";
        
        // 1. Aktuellen Sprint finden
        const itemsData = execSync('gh project item-list 1 --owner YoubDev --limit 20 --format json', { encoding: 'utf-8' });
        const items = JSON.parse(itemsData).items;
        const today = new Date();
        
        let currentSprintId = null;
        let currentSprintTitle = "Unbekannt";

        for (const item of items) {
            if (item.sprint && item.sprint.iterationId) {
                const start = new Date(item.sprint.startDate);
                const end = new Date(start.getTime() + item.sprint.duration * 24 * 60 * 60 * 1000);
                if (today >= start && today <= end) {
                    currentSprintId = item.sprint.iterationId;
                    currentSprintTitle = item.sprint.title;
                    break;
                }
            }
        }

        if (!currentSprintId) {
            console.error('Kein aktiver Sprint gefunden.');
            process.exit(1);
        }

        // 2. Issue erstellen
        const labels = ['enhancement'];
        if (areaInput) labels.push(`area: ${areaInput}`);
        const labelsArg = labels.map(l => `--label "${l}"`).join(' ');
        
        console.log(`Erstelle Ticket: ${title} (${currentSprintTitle})...`);
        const createCmd = `gh issue create --repo ${repo} --title "${title}" --body "${body || ''}" --assignee "${assignee}" ${labelsArg}`;
        const issueUrl = execSync(createCmd, { encoding: 'utf-8' }).trim();
        
        // 3. Zum Projekt hinzufügen
        const addCmd = `gh project item-add ${projectNumber} --owner YoubDev --url ${issueUrl} --format json`;
        const itemId = JSON.parse(execSync(addCmd, { encoding: 'utf-8' })).id;

        // 4. Sprint setzen
        execSync(`gh project item-edit --id ${itemId} --project-id ${projectId} --field-id ${sprintFieldId} --iteration-id ${currentSprintId}`, { encoding: 'utf-8' });

        console.log(`Erfolg: ${issueUrl} wurde zu ${currentSprintTitle} hinzugefügt.`);
    } catch (err) {
        console.error('Fehler bei der Ticket-Erstellung:', err.message);
        process.exit(1);
    }
}

run();
