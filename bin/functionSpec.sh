#!/bin/bash
CWD=$(pwd)

FILE_NAME=$1

echo "/**
 * ${FILE_NAME}
 * @param name The name to be used
 */
export function ${FILE_NAME}(name: string): string {
    return name;
}" > $CWD/src/$FILE_NAME.ts

echo "import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ${FILE_NAME} } from './${FILE_NAME}';

describe('${FILE_NAME}', () => {
    describe('${FILE_NAME}()', () => {
        it('should say NAME', () => {
            expect(${FILE_NAME}('Alice')).to.equal('Alice');
        });
    });
});" > $CWD/src/$FILE_NAME.spec.ts
