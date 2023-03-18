const { Given, When, Then } = require('@wdio/cucumber-framework');

const EbayPage = require('../pageobjects/ebay.page');

const pages = {
    ebay: EbayPage
}

Given(/^Accedo a la pagina de ebay$/, async () => {
    await pages.ebay.open()
});

When(/^Ingreso en el campo buscar producto la palabra (\w+) y hago click en el boton buscar$/, async (key) => {    
    await EbayPage.search(key)
});

Then(/^Muesto por consola la cantidad de (\w+) encontradas$/, async (key) => {    
    await expect(EbayPage.resultSearch).toHaveTextContaining(key);
    const elem = await EbayPage.resultCount 
    console.log("La cantidad de '" + key + "' encontradas es de: " + await elem.getText() + " unidades")    
});