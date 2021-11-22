const puppeteer       = require('C:\\Users\\The Ryu\\node_modules\\puppeteer-core');
const config          = require('./config/config');
const {show,login}    = require('./scripts/eval');
const detais          = require('./scripts/details');
const {writeFile}     = require('fs').promises

async function getMarks() {
    const browser = await puppeteer.launch(config.options);
    const page = await browser.newPage();
    
    await login(page,config.user);
 
    await page.waitForSelector('div.panel-heading',{visible:true})

    await page.goto('https://app.ktu.edu.in/eu/stu/studentDetailsView.htm').then(()=>{
        console.log("Going to carikulum");
    });

    await page.waitForSelector('#curriculamTab').then(()=>{
        console.log("waiting for  karikulum");
    });

    await page.click('#curriculamTab').then(()=>{
        console.log("clicking on  karikulum");
    });
    
   
    let json = await page.evaluate(detais)
    console.log(json)
    
    await writeFile('data.json',JSON.stringify(json))
}

getMarks();