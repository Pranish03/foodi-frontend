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

NEXT_PUBLIC_STRAPI_API_TOKEN=e0aafc3b404d20ef9e5e450e8a16bd7669e31336cc8ac478867f6d254a60a6efb86f544d10863ee51cfb4d49f3d828f9453dda889d02b8321bb276ba80b85250e6873ee45ab08d57e206cb52e8050838ef1a16d20892b8771b08fb14584426103dac547e3705a4d0d1b85dbea56066c94a52d92a32f8e04adfeb8a78c6824808
NEXT_PUBLIC_API_URL=
```