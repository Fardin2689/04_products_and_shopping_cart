import { Grid, Card } from '@material-ui/core';
import { CItem, PriceBox } from '../components/checkoutItems';
import EmptyCart from '../components/checkoutItems/EmptyCart';
function ShoppingList({
  cart,
  handleAddQty,
  handleRemQty,
  handleDelItem,
  handleClearCart,
}) {
  if (cart.length === 0) return <EmptyCart />;

  return (
    <Grid container spacing={2} style={{ marginTop: 5 }}>
      <Grid item xs={12} sm={8}>
        <Card style={{ padding: '0.5rem' }}>
          {cart.map((item) => (
            <CItem
              key={item.id}
              item={item}
              handleAddQty={handleAddQty}
              handleRemQty={handleRemQty}
              handleDelItem={handleDelItem}
            />
          ))}
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PriceBox items={cart} handleClearCart={handleClearCart} />
      </Grid>
    </Grid>
  );
}

export default ShoppingList;
