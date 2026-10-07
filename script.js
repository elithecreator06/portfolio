document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event =>{
        const targetId = link.getAttribute('href');
        if(targetId.startsWith('#')){
            event.preventDefualt();
            const section = document.querySelector(targetId);
            if (section) {
                section.scrollIntoView({behaviour: 'smooth'});
            }
        }
    });
});