import {Selector} from 'testcafe';
import { enter } from './google1';
fixture('Function Calling')
.page('https://www.google.com/')
test('My Test', async t=>{
   // const text='Nykaa';
    await enter('Nykaa');
});