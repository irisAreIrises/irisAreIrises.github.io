document.addEventListener("DOMContentLoaded", () => {
    const startBtns = document.querySelectorAll('.start-btn'); 
    const exitBtns = document.querySelectorAll('.exit-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const assignImagesWebDev = document.querySelectorAll('#popup-info-webdev .assign');
    const assignImagesDB = document.querySelectorAll('#popup-info-db .assign');

    const popupInfoWebDev = document.querySelector('#popup-info-webdev');
    const popupInfoDB = document.querySelector('#popup-info-db');

    let currentImageIndexWebDev = 0;
    let currentImageIndexDB = 0;

    startBtns.forEach(startBtn => {
        startBtn.onclick = () => {
            const popupId = startBtn.getAttribute('data-popup'); 

            popupInfoWebDev.classList.remove('active');
            popupInfoDB.classList.remove('active');

            if (popupId === 'popup-info-webdev') {
                popupInfoWebDev.classList.add('active');
                currentImageIndexWebDev = 0; 
                updateImageDisplayWebDev();
            } else if (popupId === 'popup-info-db') {
                popupInfoDB.classList.add('active');
                currentImageIndexDB = 0; 
                updateImageDisplayDB();
            }
        };
    });

    exitBtns.forEach(exitBtn => {
        exitBtn.onclick = () => {
            popupInfoWebDev.classList.remove('active');
            popupInfoDB.classList.remove('active');
        };
    });

    nextBtns.forEach(nextBtn => {
        nextBtn.onclick = () => {
            const popupId = nextBtn.closest('.popup-info').id; 

            if (popupId === 'popup-info-webdev') {
                if (currentImageIndexWebDev < assignImagesWebDev.length - 1) {
                    currentImageIndexWebDev++;
                } else {
                    currentImageIndexWebDev = 0; 
                }
                updateImageDisplayWebDev();
            } else if (popupId === 'popup-info-db') {
                if (currentImageIndexDB < assignImagesDB.length - 1) {
                    currentImageIndexDB++;
                } else {
                    currentImageIndexDB = 0;
                }
                updateImageDisplayDB();
            }
        };
    });


    function updateImageDisplayWebDev() {
        assignImagesWebDev.forEach((img, index) => {
            img.classList.toggle('active', index === currentImageIndexWebDev);
        });
    }

    function updateImageDisplayDB() {
        assignImagesDB.forEach((img, index) => {
            img.classList.toggle('active', index === currentImageIndexDB);
        });
    }
});

function sendEmail(event) {
    event.preventDefault();  
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        message: formData.get('message')
    });

    
    emailjs.send('service_irissigrid', 'template_irissigrid', {
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        message: formData.get('message'),
    }).then((response) => {
        alert('Message Sent Successfully!');
        form.reset();
    }).catch((error) => {
        console.error('Error sending message:', error);
        alert('Error Sending Message: ' + error.text);
    });
}

