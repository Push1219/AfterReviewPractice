import{t} from 'testcafe';
export async function enter(text)
{
    await t
    .typeText('input[title="Search"]',text);
    
};