window.addEventListener('DOMContentLoaded',() => {
    const replaceText =(selector,text) => {
        const el = document.getElementById(selector);
        if(el)
        {
            el.innerHTML=text;
        }

        
    }
    for(const type of ['chrome', 'node', 'electron','laravel'])
        {
            replaceText(`${type}-version`,process.versions[type]);
        }
})