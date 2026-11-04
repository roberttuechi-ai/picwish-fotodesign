const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const name of ['index.html', 'impressum.html', 'datenschutz.html']) {
  assert.ok(fs.statSync(name).size > 100, name + ' must exist');
}
console.log('Required pages present');
