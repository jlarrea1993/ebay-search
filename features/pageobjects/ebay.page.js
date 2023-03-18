const Page = require('./page');

class EbayPage extends Page {

    get inputSearch () {
        return $('#gh-ac');        
    }
    get btnSearch () {
        return $('#gh-btn');
    }
    get resultSearch () {
        return $('#mainContent > div.s-answer-region.s-answer-region-center-top > div > div.clearfix.srp-controls__row-2 > div:nth-child(1) > div.srp-controls__control.srp-controls__count > h1')
    }    
    get resultCount () {
        return $('#mainContent > div.s-answer-region.s-answer-region-center-top > div > div.clearfix.srp-controls__row-2 > div:nth-child(1) > div.srp-controls__control.srp-controls__count > h1 > span:nth-child(1)')
    }

    async search (key) {
        await this.inputSearch.setValue(key);        
        await this.btnSearch.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new EbayPage();