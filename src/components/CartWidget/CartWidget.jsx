import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div style={{ display: "flex" }}>
      <ShoppingCartIcon />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
