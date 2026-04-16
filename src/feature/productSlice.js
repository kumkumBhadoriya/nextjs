import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
  },
});

 export default productSlice.reducer;