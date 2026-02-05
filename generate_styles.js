const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, 'prompts');
const stylesDataPath = path.join(__dirname, 'src/data/stylesData.js');

// Ensure directory exists
const dataDir = path.dirname(stylesDataPath);
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir, { recursive: true });
}

// 1. Get all style files
const files = fs.readdirSync(promptsDir)
    .filter(file => file.startsWith('style_') && file.endsWith('.md'));

// 2. Sort files numerically (style_1, style_2, ..., style_10)
files.sort((a, b) => {
    const numA = parseInt(a.match(/style_(\d+)\.md/)[1]);
    const numB = parseInt(b.match(/style_(\d+)\.md/)[1]);
    return numA - numB;
});

// 3. Extract data
const stylesData = files.map(file => {
    const content = fs.readFileSync(path.join(promptsDir, file), 'utf-8');

    // Extract Name (first line starting with #)
    const nameMatch = content.match(/^# (.*)/);
    const name = nameMatch ? nameMatch[1].trim() : file;

    // Extract Prompt (content inside ```text ... ```)
    const promptMatch = content.match(/```text\n([\s\S]*?)\n```/);
    let prompt = promptMatch ? promptMatch[1].trim() : '';

    // Replace about "xxx" content with {PROMPT}
    prompt = prompt.replace(/about ".*?"/g, 'about "{PROMPT}"');

    // Helper to extract list items from a section
    const extractList = (sectionHeaderRegex) => {
        const match = content.match(new RegExp(`${sectionHeaderRegex.source}\\n([\\s\\S]*?)(?=\\n##|$)`));
        if (!match) return [];
        return match[1]
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.startsWith('*') || line.startsWith('-'))
            .map(line => line.replace(/^[\*\-]\s*/, '').trim()); // Remove bullet and space
    };

    // Extract Core Features (核心特色)
    const features = extractList(/## 核心特色/);

    // Extract Applicable Scenarios (適用場景) - allowing for optional emoji or text after
    const scenarios = extractList(/## 適用場景.*/);

    return {
        name: name,
        features: features,
        scenarios: scenarios,
        prompt: prompt
    };
});

// 4. Update stylesData.js with ES Module export
const newContent = `export const stylesData = ${JSON.stringify(stylesData, null, 8)};`;

try {
    fs.writeFileSync(stylesDataPath, newContent, 'utf-8');
    console.log(`Successfully updated ${stylesDataPath} with ${stylesData.length} styles.`);
} catch (error) {
    console.error('Error writing to stylesData.js:', error);
    process.exit(1);
}