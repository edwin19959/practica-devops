const fs = require('fs');
const path = require('path');

test('Check if index.html contains Hola Mundo', () => {
    const filePath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    expect(htmlContent).toMatch(/Hola Mundo/);
});
