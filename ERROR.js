describe('Fix error', () => { 
    it('checkScreen', async() => {
       await browser.url(`https://www.sick.com/de/en`);
       await browser.pause(5000);

        //Static values
        const cookies = await $('[id="gdpr_modal_button_consent"]');
        console.log(await browser.sessionId)
        console.log(await browser.capabilities);
        console.log(await browser.options);
        
        await cookies.click();
        await browser.saveScreen('SaveStartPage', {});
        expect(await browser.checkScreen('CompareStartPage', {})).toEqual(0);
        //await browser.saveFullPageScreen('SaveFullPage', {});
        //expect(await browser.checkFullPageScreen('CompareFullPage', {})).toEqual(0); 
                    
    });
});


