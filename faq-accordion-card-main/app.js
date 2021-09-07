const faq = document.querySelector('.faq-div');

faq.addEventListener('click',e=>{
    if(e.target.classList.contains('arrow')){
        let questionID = e.target.parentElement.id;
        if(!e.target.classList.contains('arrow-clicked')){
            e.target.classList.add('arrow-clicked')
        } else {
            e.target.classList.remove('arrow-clicked')
        }
        
        if(document.querySelector(`#${questionID}-answer`).classList.contains('hide')){
            document.querySelector(`#${questionID}-answer`).classList.remove('hide');
        } else {
            document.querySelector(`#${questionID}-answer`).classList.add('hide');
        }
    }
})