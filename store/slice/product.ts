import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadProductsThunk: any = createAsyncThunk(
  "products/loadProducts",
  async () => {
    try {
      const json = await (
        await fetch("https://jsonplaceholder.typicode.com/photos")
      ).json();

      return json;
    } catch (error) {
      throw new Error("api failed");
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    listing: [],
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
      state.listing = action.payload;
    });

    builder.addCase(loadProductsThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

const { loadProducts } = ProductsSlice.actions;
const ProductsReducer = ProductsSlice.reducer


export { loadProductsThunk, ProductsReducer };
