const toggleButton = document.getElementById("toggle-button");
        const toggleContent = document.getElementById("toggle-content");

        toggleButton.addEventListener('click', () => {
            toggleContent.classList.toggle('active');
        });