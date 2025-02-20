function selectOffer(units, price) {
    document.querySelectorAll('.offer-box').forEach(box => box.classList.remove('active'));
    document.querySelectorAll('input[name="unit"]').forEach(radio => radio.checked = false);

    let selectedBox = document.querySelectorAll('.offer-box')[units - 1];
    selectedBox.classList.add('active');
    selectedBox.querySelector('input').checked = true;

    document.getElementById('total-price').innerText = `$${price.toFixed(2)} USD`;
}