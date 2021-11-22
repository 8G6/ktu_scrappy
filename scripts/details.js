
function get_mark_json(){
    json = {}
    $ = (a) => document.querySelector(a).innerText
    
    for(i=1;i<9;i++){
        try{
            json[`S${i}`] = []
            $(`#collapseFiveS${i} > div > table > tbody > tr:nth-child(2) > td:nth-child(2)`)
        }
        catch(e){
            delete json[`S${i}`]
            console.log(e)
        }
        for(j=1;j<9;j++){
                try{   
                        sub    = $(`#collapseFiveS${i} > div > table > tbody > tr:nth-child(${j}) > td:nth-child(2)`)
                                .replaceAll('\t','').replaceAll('\n','')  
                        credit = $(`#collapseFiveS${i} > div > table > tbody > tr:nth-child(${j}) > td:nth-child(3)`) 
                        grade  = $(`#collapseFiveS${i} > div > table > tbody > tr:nth-child(${j}) > td:nth-child(7)`) 
                    
                        if(grade!='Result Not Published'){
                            json[`S${i}`].push({
                                grade : grade,
                                credit : credit,
                                suject : sub
                            })
                        }
                        else{
                            delete json[`S${i}`]
                        }
                }
                catch(e){
                    console.log(e)
                }
            }
        
        }

    return json
}

module.exports = get_mark_json