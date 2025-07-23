const orderList = document.getElementById("orderList");
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function renderOrders() {
  orderList.innerHTML = "";

  orders.forEach((order, index) => {
    const card = document.createElement("div");
    card.classList.add("order-card");

    const statusClass =
      {
        waiting: "waiting",
        ready: "ready",
        delivered: "delivered",
      }[order.status] || "waiting";

    const toppingsHTML = order.toppings?.length
      ? `<ul>${order.toppings.map((t) => `<li>${t}</li>`).join("")}</ul>`
      : "None";

    const extrasHTML = order.extras?.length
      ? `<ul>${order.extras.map((e) => `<li>${e}</li>`).join("")}</ul>`
      : "None";

    card.innerHTML = `
    <h3>Order #${order.id}</h3>
    <p><strong>Name:</strong> ${order.customerName}</p>
    <p><strong>Phone:</strong> ${order.phone}</p>
    <p><strong>Pancake:</strong> ${order.selectedPancake}</p>
    <p><strong>Toppings:</strong> ${toppingsHTML}</p>
<p><strong>Extras:</strong> ${extrasHTML}</p>
    <p><strong>Delivery:</strong> ${order.delivery}</p>
    <p><strong>Total:</strong> ${order.price}€</p>
    <span class="order-status ${statusClass}">${order.status}</span>
    <div class="status-buttons">
      <button onclick="updateStatus(${index}, 'waiting')">🟡</button>
      <button onclick="updateStatus(${index}, 'ready')">🔵</button>
      <button onclick="updateStatus(${index}, 'delivered')">🟢</button>
    </div>
  `;

    const buttons = card.querySelectorAll(".status-buttons button");
    buttons[0].addEventListener("click", () => updateStatus(index, "waiting"));
    buttons[1].addEventListener("click", () => updateStatus(index, "ready"));
    buttons[2].addEventListener("click", () =>
      updateStatus(index, "delivered")
    );

    orderList.appendChild(card);
  });
}

function updateStatus(index, newStatus) {
  orders[index].status = newStatus;
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

renderOrders();
