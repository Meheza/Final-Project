var newdirectionsaromatics = {}
module.exports ={
    beforeEach: browser => {
        newdirectionsaromatics =browser.page.newdirectionsaromaticsPage()
        newdirectionsaromatics
            .navigate()
    },
    after: browser =>{
        newdirectionsaromatics
            .end()
    },
    'Home Page Button Test': browser => {
            browser
            newdirectionsaromatics
            .buttons()
        
    },
    'Search Field Test': browser => {
            browser
            newdirectionsaromatics
            .search()
    }

}
