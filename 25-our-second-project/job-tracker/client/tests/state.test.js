import { describe, expect, it } from 'vitest';
import {
    addToList,
    countByStatus,
    emptyListText,
    filterByStatus,
    filterLabel,
    formatDay,
    isWebLink,
    removeFromList,
    replaceInList,
} from '../src/state.js';

const acme = { id: 1, company: 'Acme', status: 'applied' };
const globex = { id: 2, company: 'Globex', status: 'offer' };
const initech = { id: 3, company: 'Initech', status: 'applied' };
const applications = [acme, globex, initech];

describe('countByStatus', () => {
    it('counts every status, including the ones with none', () => {
        expect(countByStatus(applications)).toEqual({
            all: 3,
            wishlist: 0,
            applied: 2,
            interview: 0,
            offer: 1,
            rejected: 0,
        });
    });
});

describe('filterByStatus', () => {
    it('keeps the applications with the status', () => {
        expect(filterByStatus(applications, 'applied')).toEqual([
            acme,
            initech,
        ]);
    });

    it("gives the whole list for 'all'", () => {
        expect(filterByStatus(applications, 'all')).toBe(applications);
    });
});

describe('the list changes', () => {
    it('addToList puts the new application first', () => {
        expect(addToList([acme], globex)).toEqual([globex, acme]);
    });

    it('replaceInList swaps in the changed application', () => {
        const changed = { ...acme, status: 'interview' };
        expect(replaceInList(applications, changed)).toEqual([
            changed,
            globex,
            initech,
        ]);
    });

    it('removeFromList leaves out the id', () => {
        expect(removeFromList(applications, 2)).toEqual([acme, initech]);
    });

    it('never changes the list it was given', () => {
        const before = [...applications];
        addToList(applications, { id: 4 });
        replaceInList(applications, { ...acme, company: 'Changed' });
        removeFromList(applications, 1);
        expect(applications).toEqual(before);
    });
});

describe('isWebLink', () => {
    it('accepts http and https links', () => {
        expect(isWebLink('https://jobs.example.com/42')).toBe(true);
        expect(isWebLink('http://jobs.example.com')).toBe(true);
    });

    it('refuses other protocols, half links and nothing at all', () => {
        expect(isWebLink('javascript:alert(1)')).toBe(false);
        expect(isWebLink('data:text/html,<p>hi</p>')).toBe(false);
        expect(isWebLink('jobs.example.com')).toBe(false);
        expect(isWebLink(null)).toBe(false);
    });
});

describe('formatDay', () => {
    it('prints the day the text names, whatever the time zone', () => {
        expect(formatDay('2026-11-03', 'en-GB')).toBe('3 Nov 2026');
        expect(formatDay('2026-11-03', 'en-US')).toBe('Nov 3, 2026');
    });
});

describe('the texts', () => {
    it('filterLabel adds the count to the name of the status', () => {
        const counts = countByStatus(applications);
        expect(filterLabel('all', counts)).toBe('All (3)');
        expect(filterLabel('applied', counts)).toBe('Applied (2)');
        expect(filterLabel('rejected', counts)).toBe('Rejected (0)');
    });

    it('emptyListText says why the list is empty', () => {
        expect(emptyListText('all')).toBe(
            'No applications yet. Add the first one with the form.',
        );
        expect(emptyListText('offer')).toBe(
            'No applications with the status Offer.',
        );
    });
});
