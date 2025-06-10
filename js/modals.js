// Donate and phone modal helpers

  /* --------- variables globales --------- */
  let currentPaymentMethod = '';
  let phoneToReveal = '';       // número que enseñaremos tras la verificación

  /* ---------- DONATE MODAL ---------- */
  function openDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  /* ---------- PHONE MODAL ---------- */
  function openPhoneModal() {
    const modal = document.getElementById('phoneModal');
    if (modal) modal.style.display = 'block';
  }

  function closePhoneModal() {
    const modal = document.getElementById('phoneModal');
    if (modal) modal.style.display = 'none';
    resetPhoneModal();
  }

  function resetPhoneModal() {
    const input       = document.getElementById('phoneInput');
    const error       = document.getElementById('phoneError');
    const form        = document.getElementById('phoneForm');
    const display     = document.getElementById('phoneDisplay');
    const title       = document.getElementById('phoneModalTitle');

    if (input)   input.value = '';
    if (error)   error.style.display = 'none';
    if (form)    form.style.display = 'block';
    if (display) display.style.display = 'none';
    if (title)   title.textContent = 'Privacy Protection';
  }

  /* ---------------- flujo principal ---------------- */
  //  Llamado desde las tarjetas: requestPhoneNumber('twint', '+41 772770797')
  function requestPhoneNumber(method, phone) {
    currentPaymentMethod = method;
    phoneToReveal        = phone;

    // Cambiamos el título para más claridad
    const title = document.getElementById('phoneModalTitle');
    if (title) title.textContent = `Unlock ${method.charAt(0).toUpperCase() + method.slice(1)} Number`;

    resetPhoneModal();
    openPhoneModal();
  }

  function confirmPhone() {
    const input   = document.getElementById('phoneInput');
    const error   = document.getElementById('phoneError');
    const form    = document.getElementById('phoneForm');
    const display = document.getElementById('phoneDisplay');
    const number  = document.getElementById('phoneNumber');

    if (!input) return;

    const rawValue = input.value.trim();
    if (!isValidPhone(rawValue)) {
      if (error) error.style.display = 'block';
      return;
    }
    if (error) error.style.display = 'none';

    // Guardar (o enviar al servidor, simulado aquí)
    savePhoneToServer(rawValue, currentPaymentMethod);

    // Mostrar el número solicitado
    if (number)  number.textContent = phoneToReveal;
    if (form)    form.style.display = 'none';
    if (display) display.style.display = 'block';
  }

  /* ---------------- helpers ---------------- */
  function isValidPhone(str) {
    // Quitamos espacios, guiones y paréntesis para comprobar longitud y dígitos
    const digitsOnly = str.replace(/[\s\-()\u00A0]+/g, '');
    return /^\+?\d{7,15}$/.test(digitsOnly);
  }

  function savePhoneToServer(userPhone, method) {
  fetch('save-phone.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: userPhone,
      paymentMethod: method
    })
  })
  .then(r => r.ok ? console.log('saved') : console.error('server error'))
  .catch(console.error);
}

  /* ---- cerrar modales con clic fuera o Esc ---- */
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('donateModal')) closeDonateModal();
    if (e.target === document.getElementById('phoneModal'))  closePhoneModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDonateModal();
      closePhoneModal();
    }
  });
