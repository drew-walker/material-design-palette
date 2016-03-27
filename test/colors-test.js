import { expect } from 'chai';

import * as colors from '../src/colors';

describe('Colors', () => {
    describe('Red', () => {
        it('should have the correct hex code for red 50', () => {
            expect(colors.red50).to.equal('#ffebee');
        });

        it('should have the correct hex code for red 100', () => {
            expect(colors.red100).to.equal('#ffcdd2');
        });

        it('should have the correct hex code for red 200', () => {
            expect(colors.red200).to.equal('#ef9a9a');
        });

        it('should have the correct hex code for red 300', () => {
            expect(colors.red300).to.equal('#e57373');
        });

        it('should have the correct hex code for red 400', () => {
            expect(colors.red400).to.equal('#ef5350');
        });

        it('should have the correct hex code for red 500', () => {
            expect(colors.red500).to.equal('#f44336');
        });

        it('should have the correct hex code for red 600', () => {
            expect(colors.red600).to.equal('#e53935');
        });

        it('should have the correct hex code for red 700', () => {
            expect(colors.red700).to.equal('#d32f2f');
        });

        it('should have the correct hex code for red 800', () => {
            expect(colors.red800).to.equal('#c62828');
        });

        it('should have the correct hex code for red 900', () => {
            expect(colors.red900).to.equal('#b71c1c');
        });

        it('should have the correct hex code for red A100', () => {
            expect(colors.redA100).to.equal('#ff8a80');
        });

        it('should have the correct hex code for red A200', () => {
            expect(colors.redA200).to.equal('#ff5252');
        });

        it('should have the correct hex code for red A400', () => {
            expect(colors.redA400).to.equal('#ff1744');
        });

        it('should have the correct hex code for red A700', () => {
            expect(colors.redA700).to.equal('#d50000');
        });
    })
});
