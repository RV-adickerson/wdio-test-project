var assert = require('assert');

describe('Login Page', function () {
    it('should open cart', function () {
        browser.url('/');
        browser.click('#js-track-nav-shop-online');
        var pageUrl = browser.getUrl();

    })
})

describe('Check Title', function () {
    it('should get page title', function () {
        browser.url('/');
        var title = browser.getTitle();
        console.log(title);
    })
})

describe('Check INFR Phone Number', function () {
    it('should get phone number', function () {
        var form = $('a');
        var attr = form.getAttribute('href');
        console.log(browser.getAttribute('a', 'href'));
    })
})

describe('Check Shop Frontier Internet Plans button', function () {
    it('should go to plans page', function () {
        browser.click('#js-track-home-hero');
        pageUrl = browser.getUrl();

    })

})

describe('Check to see if drop down menu is enabled', function () {
    it('should detect if menu elements are enabled', function () {
        var isEnabled = browser.isEnabled('menu-item-5108');
        console.log(isEnabled);

        var isEnabled2 = browser.isEnabled('menu-item-4321');
        console.log(isEnabled2);

        var isEnabled3 = browser.isEnabled('menu-item-5159')
        console.log(isEnabled3);
    })

})

describe('Set value', function () {
    it('should set value to 28110', function () {
        var input = $('#zip');
        input.setValue('28110');
    })

})

describe('Click Check Availability Button', function () {
    it('should check availability', function () {
        browser.click('#js-track-form-check-availability');
        pageUrl = browser.getUrl();

    })

})

describe('Verify drop down menu items', function () {
    it('should click menu then click each item on menu', function () {
        browser.click('#menu-item-4313');
        browser.waitForVisible(".sub-menu", 5000);
        browser.click('#menu-item-5108');
        browser.click('#menu-item-4321');
        browser.click('#menu-item-5159');

    })
})