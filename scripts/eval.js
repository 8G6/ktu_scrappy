async function show(page){
    await page.waitForSelector('#curriculamTab')

    await page.evaluate(()=>{
       for(i=1;i<9;i++){ 
           try{
            document.querySelector(`#collapseFiveS${i}`).classList.add('in')
           }
           catch(e){
               console.log(e)
           }
        }
    })
}


async function login(page,user){
    await page.goto('https://app.ktu.edu.in/login.jsp').then(()=>{
        console.log("Page loaded");
    });

    await page.waitForSelector('#login-username').then(()=>{
        console.log("Found user name feild");
    });

    await page.type('#login-username', user.name).then(()=>{
        console.log("entered user name");
    });

    await page.type('#login-password', user.pass).then(()=>{
        console.log("entered password");
    });

    await page.click('#btn-login').then(()=>{
        console.log("Clicked on login button");
    });
}

module.exports = {
    show:show,
    login:login
}