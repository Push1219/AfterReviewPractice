import{Selector} from 'testcafe';
import { enterText } from './functioncalling'; 
fixture('Google')
.page('https://www.google.com/')
test('Function Calling Test', async t=>{
    const text="Flipkart";
    await enterText(text);

});