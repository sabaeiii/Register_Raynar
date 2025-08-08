
        const form = document.getElementById("registerForm");
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            
            confetti({
                particleCount: 150,
                spread: 60,
                origin: { y: 0.4 }
            });

            
            const banner = document.createElement('div');
            banner.textContent = '🎉 Selamat! 🎂';
            banner.style.position = 'fixed';
            banner.style.top = '20px';
            banner.style.left = '50%';
            banner.style.transform = 'translateX(-50%)';
            banner.style.background = 'var(--color-primary)';
            banner.style.color = '#fff';
            banner.style.padding = '10px 20px';
            banner.style.borderRadius = '8px';
            banner.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            document.body.appendChild(banner);
            setTimeout(() => banner.remove(), 3000);

            
            const data = [
                this.Nama.value,
                this.Email.value,
                this.Tanggal.value,
                this.Handphone.value,
                document.querySelector('input[name="JenisKelamin"]:checked').value
            ];
            const tbody = document.getElementById("tableForm").querySelector("tbody");
            const row = tbody.insertRow();
            data.forEach((t,i) => row.insertCell(i).textContent = t);

            this.reset();
        });