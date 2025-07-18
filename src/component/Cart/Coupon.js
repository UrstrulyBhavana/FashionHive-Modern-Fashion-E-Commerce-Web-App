import React, { useState } from "react";
import Swal from "sweetalert2";

const Coupon = ({ onApplyCoupon }) => {

  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredCode = code.trim().toUpperCase();

    if (enteredCode === "DISCOUNT10") {
      Swal.fire("✅ Success", "Coupon applied! You saved 10%.", "success");
      if (onApplyCoupon) onApplyCoupon(0.1);
    } else {
      Swal.fire("❌ Invalid", "This coupon code is invalid.", "error");
      if (onApplyCoupon) onApplyCoupon(0);
    }

    setCode("");
  };

  return (
    <div className="coupon_inner mb-3">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Use code DISCOUNT10 for 10% off"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button
          type="submit"
          className="theme-btn-one btn-black-overlay btn_sm"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};

export default Coupon;
