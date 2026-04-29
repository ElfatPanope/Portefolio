{
    "builds";[
        { "src": "index.html", "use": "@vercel/static" }
    ]
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('toggle-theme');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        btn.textContent = 'Light mode';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = 'Dark mode';
        localStorage.setItem('theme', 'light');
    }
}

// Mémorise le choix au rechargement de la page
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('toggle-theme').textContent = 'Light mode';
    }
}