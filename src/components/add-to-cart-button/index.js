"use client";

import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function AddToCartButton({ productItem }) {
  //get cart in state
  const { cart } = useSelector((state) => state);

  return (
    <div className="mt-8 max-w-md">
      <Button>
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from cart"
          : "Add to cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
