```
dispatch(
  removeFromBag({
    id: item.id,
    selectedOption: item.selectedOption,
  })
);


<select
  value={item.quantity}
  onChange={(e) => {
    const newQuantity = parseInt(e.target.value, 10);

    dispatch(
      updateBag({
        id: item.id,
        selectedOption: item.selectedOption,
        key: "quantity",
        val: newQuantity,
      })
    );
  }}
>
  {[...Array(10)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))}
</select>
```