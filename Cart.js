    document.addEventListener('DOMContentLoaded', function () {
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        const deleteBtns = document.querySelectorAll('.delete-btn');
        const likeBtns = document.querySelectorAll('.like-btn');
        const totalElement = document.querySelector('.total');

        function updateTotal() {
            let total = 0;
            document.querySelectorAll('.item').forEach((item) => {
                const quantity = item.querySelector('.qty');
                const price = item.querySelector('.price');
                total += quantity.innerHTML * price.innerHTML;
            });
            totalElement.innerText = `Total: $${total}`;
        }

        function updateQuantity(element, increment) {
            const span = element.parentElement.querySelector('span');
            let quantity = parseInt(span.innerText);

            if (increment) {
                quantity++;
            } else {
                quantity = Math.max(quantity - 1, 0);
            }

            span.innerText = quantity;
            updateTotal();
        }

        quantityBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                updateQuantity(this, this.innerText === '+');
            });
        });

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const item = this.closest('.item');
                item.remove();
                updateTotal();
            });
        });
        // for (let btn of deleteBtns) {
        //     btn.addEventListener('click', function () {
        //         const item = this.closest('.item');
        //         item.remove();
        //         updateTotal();
        //     });
        // }

        likeBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });
    });
