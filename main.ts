import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My agent wrote 400 lines to fix a typo, called it 'a refactor', and asked me to star the repo.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
