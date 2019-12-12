var commands = {
    buttons: function () {
        this
            .waitForElementPresent('body')
            .pause(5000)
            .waitForElementPresent('@organic')
            .click('@organic')
            .pause(5000)
            .waitForElementPresent('@organicpage')
            .verify.containsText('@organicpage', "ORGANIC PRODUCTS" )
            .api.back()
            .pause(5000)
        this
            .waitForElementPresent('@fairtrade')
            .click('@fairtrade')
            .pause(5000)
            .waitForElementPresent('@fairtradepage')
            .verify.containsText('@fairtradepage', "FAIR TRADE PRODUCTS" )
            .api.back()
            .pause(5000)
        this
           .waitForElementPresent('@newarrivals')
           .click('@newarrivals')
           .waitForElementPresent('@newarrivalspage')
           .api.back()
        this
           .waitForElementPresent('@pricedrops')
           .click('@pricedrops')
           .waitForElementPresent('@pricedropspage')
           .api.back()
        this
           .waitForElementPresent('@discounts')
           .click('@discounts')
           .waitForElementPresent('@discountspage')
           .api.back()
        this
           .waitForElementPresent('@liquidation')
           .click('@liquidation')
           .waitForElementPresent('@liquidationpage')
           .api.back()
        this
           .waitForElementPresent('@newsletter')
           .click('@newsletter')
           .waitForElementPresent('@newsletterpage')
           .api.back()
        this
           .waitForElementPresent('@marketreport')
           .click('@marketreport')
           .waitForElementPresent('@marketreportpage')
           .api.back()
        this
           .waitForElementPresent('@blog')
           .click('@blog')
           .waitForElementPresent('@blogpage')
           .api.back()
        return this
    },
    search: function () {
        this
        .waitForElementPresent('body')
        .pause(5000)
        .click('@searchfield')
        .setValue('@searchfield', "avocado")
        .pause(5000)
        .waitForElementPresent('@records')
        .click('@records')
        .waitForElementPresent('@avocadorecords')
        .api.back()
        this
        .setValue('@searchfield', "cocoa butter")
        .click('@records')
        .waitForElementPresent('@cocoabutterrecords')
        .pause(5000)
        return this

    }
}
module.exports = {
    url: 'https://www.newdirectionsaromatics.com/',
    commands: [commands],
    elements: {
        organic: {
            selector: '(//a[@href="/products/organic/"])[2]',
            locateStrategy: 'xpath'
    },
        organicpage: {
            selector: '(//h1[text()="ORGANIC PRODUCTS"])',
            locateStrategy: 'xpath'
    },
        fairtrade: {
            selector: '(//a[@href="/products/fair_trade.php"])[2]',
            locateStrategy: 'xpath'
    },
        fairtradepage: {
            selector: '(//h1[text()="FAIR TRADE PRODUCTS"])',
            locateStrategy: 'xpath'
    },
        newarrivals: {
            selector: '(//a[@href="/products/new-arrivals/"])[2]',
            locateStrategy: 'xpath'
    },
        newarrivalspage: {
            selector: '(//h1[text()="New Arrivals"])',
            locateStrategy: 'xpath'
    },
        pricedrops: {
            selector: '(//a[@href="/products/price-drops/"])[2]',
            locateStrategy: 'xpath'
    },   
        pricedropspage: {
            selector: '(//h1[text()="Products on Price Drops"])',
            locateStrategy: 'xpath'
    },   
         discounts: {
            selector: '(//a[@href="/products/discounts/"])[2]',
            locateStrategy: 'xpath'
    },   
        discountspage: {
             selector: '(//h1[text()="Products on Discounts"])',
             locateStrategy: 'xpath'
    },
        liquidation: {
             selector: '(//a[@href="/products/liquidation/"])[2]',
             locateStrategy: 'xpath'
    },
        liquidationpage: {
            selector: '(//h1[text()="Final Sale & Liquidation Items!"])',
            locateStrategy: 'xpath'
    },
        newsletter: {
        selector: '(//a[@href="/company/newsletter.php"])[2]',
        locateStrategy: 'xpath'
    },
        newsletterpage: {
            selector: '(//h1[text()="Newsletter"])',
            locateStrategy: 'xpath'
    },
        marketreport: {
            selector: '(//a[@href="/market-reports/market-report-nov-2019.php"])[2]',
            locateStrategy: 'xpath'
    },
        marketreportpage: {
            selector: '(//h1[text()="MARKET REPORT NOVEMBER 2019"])',
            locateStrategy: 'xpath'
    },
        blog: {
            selector: '(//a[@href="https://www.newdirectionsaromatics.com/blog/"])[2]',
            locateStrategy: 'xpath'
    },
        blogpage: '[class="blog-body"]',
        newdirectionshomepage: 'body',
        searchfield: '#product-search',
        records: {
            selector: '(//a[text()="Click here to view all records"])',
            locateStrategy: 'xpath'
    },
        avocadorecords: '[class="col-md-18 visible-lg visible-md"]',
        cocoabutterrecords: '[value="cocoa butter"]'

    }
}


