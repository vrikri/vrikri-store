function getCart() {
  return JSON.parse(localStorage.getItem('vrikriCart') || '{}');
}
function saveCart(cart) {
  localStorage.setItem('vrikriCart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count')?.textContent = count;
}
function addToCart(id, name, price) {
  const cart = getCart();
  if (cart[id]) cart[id].qty++;
  else cart[id] = { name, price: +price, qty: 1 };
  saveCart(cart);
  updateCartCount();
}
function renderCartPage() {
  const container = document.getElementById('cart-items');
  const totalWrap = document.getElementById('cart-total');
  if (!container || !totalWrap) return;
  const cart = getCart();
  container.innerHTML = '';
  let total = 0;

  for (const id in cart) {
    const item = cart[id];
    total += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div>${item.name}</div>
      <div>₹${item.price} x ${item.qty}</div>
      <div>
        <button class="remove" data-id="${id}">Remove</button>
      </div>`;
    container.appendChild(row);
  }

  totalWrap.textContent = total ? `Total: ₹${total}` : 'Your cart is empty.';
  container.querySelectorAll('.remove').forEach(btn => {
    btn.onclick = () => {
      delete cart[btn.dataset.id];
      saveCart(cart);
      renderCartPage();
      updateCartCount();
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.onclick = () => {
      const p = btn.closest('.product');
      addToCart(p.dataset.id, p.dataset.name, p.dataset.price);
    };
  });
  renderCartPage();
  updateCartCount();
});
