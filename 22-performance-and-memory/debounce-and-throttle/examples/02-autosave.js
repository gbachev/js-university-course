// Four calls, one save, 300 ms after the last call.
import { debounce } from './01-debounce.js';

const saveDraft = debounce((text) => {
    console.log(`Saved: ${text}`);
}, 300);

saveDraft('D');
saveDraft('Du');
saveDraft('Dun');
setTimeout(() => saveDraft('Dune'), 100);
// Saved: Dune
