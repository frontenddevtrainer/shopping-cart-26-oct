import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadProductsThunk = createAsyncThunk(
  "products/loadProducts",
  async () => {
    try {
      const json = await (
        await fetch("https://jsonplaceholder.typicode.com/photos")
      ).json();

      return json;
    } catch (error) {
      throw new Error("No failed");
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },

  // Sync
  reducers: {
    loadProducts: () => {},
  },
  // Async
  extraReducers: (builder) => {
    builder.addCase(loadProductsThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loadProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(loadProductsThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

const { loadProducts } = ProductsSlice.actions;

export { loadProducts };
