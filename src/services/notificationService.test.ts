import { generateRandom3DigitNumber } from './notificationService';

describe('generateRandom3DigitNumber', () => {
    it('returns a three-digit number between 100 and 999', () => {
        for (let i = 0; i < 100; i++) {
            const num = generateRandom3DigitNumber();
            expect(num).toBeGreaterThanOrEqual(100);
            expect(num).toBeLessThanOrEqual(999);
        }
    });
});
