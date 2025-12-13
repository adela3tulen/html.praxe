const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

 const links = document.querySelectorAll('#menu a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            // odeber active ze všech
            links.forEach(l => l.classList.remove('active'));

            // přidej active na kliknutý
            link.classList.add('active');
        });
    });