export default function handleSubmit(e) {
    e.preventDefault();
    const status = document.querySelector(".status");
    const data = new FormData(e.target);
    fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        }).then(res => {
            if (!res.ok) {
                throw new Error('Niestety nie udało się wysłać wiadomości. Podaj prawidłowe dane i spróbuj jeszcze raz!');
            }
            status.classList.add('show');
            status.textContent = "Udało się wysłać wiadomość. Dziękujemy!";
            setTimeout(() => {
                status.classList.remove('show');
                status.textContent = "";
            }, 5000);
        form.reset();
        }).catch(err => {
            status.classList.add('show');
            status.textContent = "Niestety nie udało się wysłać wiadomości. Podaj prawidłowe dane i spróbuj jeszcze raz!";
            setTimeout(() => {
                status.classList.remove('show');
                status.textContent = "";
            }, 5000);
        });
}