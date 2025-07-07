
        // Handle file upload
        document.getElementById('fileInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const fileUpload = document.querySelector('.file-upload');
            
            if (file) {
                fileUpload.innerHTML = `
                    <div class="file-upload-icon">✅</div>
                    <div class="file-upload-text">${file.name}</div>
                    <div class="file-upload-size">${(file.size / 1024 / 1024).toFixed(2)} MB</div>
                `;
            }
        });

        // Handle form submission
        document.getElementById('internshipForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pendaftaran magang berhasil diajukan!');
        });

        // Menu item interaction
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
