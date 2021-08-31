import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../components/files/const";
export const fetchTable = createAsyncThunk(
  "currency/getInit",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const responseCur = await fetch(
        `http://api.currencylayer.com/live?access_key=${apiKey}`
      );
      if (!responseCur.ok) {
        throw new Error("Server Error");
      }
      const dataMoney = await responseCur.json();

      dispatch(
        getInitList({
          cur: dataMoney,
        })
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currencyList: null,
    loading: false,
    errorMsg: null,
  },
  reducers: {
    getInitList(state, action) {
      const { cur } = action.payload;
      state.loading = false;
      state.currencyList = cur.quotes;
      console.log(cur);
    },
  },
  extraReducers: {
    [fetchTable.pending]: (state) => {
      state.loading = true;
      state.errorMsg = null;
    },
    [fetchTable.rejected]: (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
  },
});

const { getInitList } = currencySlice.actions;

export default currencySlice.reducer;
