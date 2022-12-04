export type ResultExpected = {
    portas: string,
    dual: string,
    pattern?: string
}

export const ResultLinks = (type: string)=>{
    if(type==='a'){
        return 'https://www.google.com/search?q=roteador+ac1200&sa=X&biw=1920&bih=1005&tbm=shop&sxsrf=ALiCzsZAsNC_W9ea74MuNKn0ZCQrvTj6lQ%3A1670102466782&ei=wr2LY9KPL83O1sQP3pyHwAw&ved=0ahUKEwjS-JTCsN77AhVNp5UCHV7OAcgQ4dUDCAg&uact=5&oq=roteador+ac1200&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIIxAnMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABCwAxBDOggIABCABBCwAzoKCAAQgAQQsAMQGDoHCAAQgAQQGDoKCAAQFhAeEA8QGDoICAAQFhAeEBg6BQghEKABSgQIQRgBUJ4DWMclYJInaANwAHgAgAGAAogBowuSAQU1LjQuMpgBAKABAcgBCsABAQ&sclient=products-cc'
    }
    if(type==='b'){
        return 'https://www.google.com/search?q=roteador+300mbps&sxsrf=ALiCzsailM2KW_ZD3sOENlUKRA-Oktvosw:1670102295527&source=lnms&tbm=shop&sa=X&ved=2ahUKEwily8Dwr977AhW0ppUCHSvlDHYQ_AUoAXoECAMQAw&biw=1920&bih=1005&dpr=1'
    }
    if(type==='c'){
        return 'https://www.google.com/search?q=roteador+300mbps&sxsrf=ALiCzsailM2KW_ZD3sOENlUKRA-Oktvosw:1670102295527&source=lnms&tbm=shop&sa=X&ved=2ahUKEwily8Dwr977AhW0ppUCHSvlDHYQ_AUoAXoECAMQAw&biw=1920&bih=1005&dpr=1'
    }
}

export const Result = (type: string)=> {
    if(type==='a'){
        return{
            portas: 'Portas Giga',
            dual: 'Possuir Dual Band (2.4 e 5ghz)',
            pattern: 'Padrão AC1200'
        }
    }
    if(type==='b'){
        return{
            portas: 'Portas Fast (máx. 100mbps)',
            dual: 'Possuir Dual Band (2.4 e 5ghz)',
            pattern: ''
        }
    }
    if(type==='c'){
        return{
            portas: 'Portas Fast (máx. 100mbps)',
            dual: 'Sem necessidade de Dual Band (2.4 e 5ghz)',
            pattern: ''
        }
    }
}


export default Result;