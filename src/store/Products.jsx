import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Gọi API lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    category: "",
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
