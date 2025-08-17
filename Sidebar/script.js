const sidebar = document.getElementById('sidebar1');
        const toggleBtn = document.getElementById('toggleBtn');

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('closed');
        });
