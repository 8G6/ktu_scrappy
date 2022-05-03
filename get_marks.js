const puppeteer       = require('C:\\Users\\The Ryu\\node_modules\\puppeteer-core');
const config          = require('./config/config');
const login    = require('./scripts/eval');
const get_mark_json       = require('./scripts/details');
const {writeFile}     = require('fs').promises

async function getMarks() {
    const browser = await puppeteer.launch(config.options);
    const page = await browser.newPage();
    
    await login(page,config.user);
 
    await page.waitForSelector('div.panel-heading',{visible:true})

    await page.goto('https://app.ktu.edu.in/eu/stu/studentDetailsView.htm').then(()=>{
        console.log("Going to Curriculum");
    });

    await page.waitForSelector('#curriculamTab').then(()=>{
        console.log("waiting for  Curriculum");
    });

    await page.click('#curriculamTab').then(()=>{
        console.log("clicking on  Curriculum");
    });
    
   
    let json = await page.evaluate(get_mark_json);
    console.log(json)
    
    console.log('Writing to file');
    await writeFile('data.json',JSON.stringify(json))
    console.log('File written');

    await browser.close();
}

getMarks();