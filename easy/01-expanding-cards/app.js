const panels = document.querySelectorAll('.panel')
for(let panel of panels){
    panel.addEventListener ('click', () => {
        panels.forEach(p => {
            p.classList.remove('active')
        panel.classList.add('active')})
    })
}