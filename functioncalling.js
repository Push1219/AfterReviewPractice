import {t} from 'testcafe';
export async function enterText(text)
{
    await t
    .typeText('input[title="Search"]',text);

};
