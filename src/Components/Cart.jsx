import { useCart } from "@/src/context/CartContext";
import { useToggleBackground } from "@/src/context/ToggleBackgroundContext";

const Cart = () => {
  const { toggleBackground } = useToggleBackground();
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate Subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Define Shipping Cost (free shipping for orders over $500)
  const shipping = subtotal > 500 ? 0 : 20;

  // Calculate Tax (e.g., 10% of the subtotal)
  const tax = (subtotal * 0.1).toFixed(2);

  // Calculate Total
  const total = (subtotal + shipping + parseFloat(tax)).toFixed(2);

  console.log("Cart Items:", cartItems);

  return (
    <section className="my-20 mx-14 lg:grid lg:grid-cols-3 lg:gap-x-10">
      <div className="lg:col-span-2 w-auto">
        <h1
          className={`${
            toggleBackground ? "text-gray-700" : "text-gray-200"
          } text-3xl font-semibold`}
        >
          Shopping Cart
        </h1>
        <hr
          className={`border-t-2 ${
            toggleBackground ? "border-gray-100" : "border-gray-800"
          } mb-4 mt-4`}
        />

        {cartItems.length === 0 ? (
          <p className="text-center w-full">Your cart is empty</p>
        ) : (
          <ul className="mt-10 space-y-10 w-full">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-start gap-y-4 md:grid md:grid-cols-4 w-full"
              >
                {/* Image Section */}
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Title and Color Section */}
                <div className="w-full">
                  <h2
                    className={`${
                      toggleBackground ? "text-gray-700" : "text-gray-200"
                    } text-base font-semibold`}
                  >
                    {item.title}
                  </h2>
                  <div className="my-2">
                    <p className="font-semibold">Color</p>
                    <div className="flex gap-2 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>

                {/* Amount and Remove Section */}
                <div className="w-full md:w-fit">
                  <p className="text-sm">Amount</p>
                  <select
                    className={`${
                      toggleBackground ? "bg-white" : "bg-gray-700"
                    } mt-2 border w-full py-[4px] px-2 rounded-lg border-violet-400`}
                  >
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`${
                      toggleBackground ? "text-blue-500 hover:text-blue-600" : "text-pink-400 hover:text-pink-600"
                    } py-2`}
                  >
                    remove
                  </button>
                </div>

                {/* Price Section */}
                <div className="w-full text-right md:text-left">
                  <p
                    className={`${
                      toggleBackground ? "text-gray-600" : "text-gray-100"
                    } text-lg font-semibold`}
                  >
                    ${item.price}.99
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <article
          className={`${
            toggleBackground ? "bg-blue-50" : "bg-gray-900"
          } p-4 mt-20 rounded-2xl text-sm space-y-4`}
        >
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <hr
            className={`border-t-2 ${
              toggleBackground ? "border-blue-100" : "border-gray-800"
            } mb-4 mt-4`}
          />

          <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>

          <hr
            className={`border-t-2 ${
              toggleBackground ? "border-blue-100" : "border-gray-800"
            } mb-4 mt-4`}
          />

          <div className="flex justify-between items-center">
            <p>Tax</p>
            <p>${tax}</p>
          </div>

          <hr
            className={`border-t-2 ${
              toggleBackground ? "border-blue-100" : "border-gray-800"
            } mb-4 mt-4`}
          />

          <div className="pt-4 flex justify-between items-center">
            <p>Order Total</p>
            <p>${total}</p>
          </div>
        </article>

        <div className="mt-8">
          <button
            className={`${
              toggleBackground
                ? "bg-blue-500 hover:bg-blue-600  text-gray-100"
                : "bg-pink-400 hover:bg-pink-600 text-gray-900"
            } font-semibold rounded-lg w-full py-3 uppercase text-sm`}
          >
            Please Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
