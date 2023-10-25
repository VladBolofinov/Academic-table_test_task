import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import IApiRequest from "../stateTypes/IApiRequest";
import {useHttp} from "../../../hooks/http.hook";

const initialState: IApiRequest = {
    data: [],
    teachers: [],
    error: '',
    isLoading: false
}


export const fetchData = createAsyncThunk(
    'apiRequest/fetchData',
    () => {
        const {fetchData} = useHttp();
        return fetchData();
    }
)

export const apiRequestSlice = createSlice({
    name: 'apiRequest',
    initialState,
    reducers: {
        changeTeacher(state, action: PayloadAction<any>) { //тоже потом поменяй any
            state.data[0].exam = action.payload;
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchData.pending, (state) => {state.isLoading = true;})
                .addCase(fetchData.fulfilled, (state,action: PayloadAction<any>) => {//поменяй тип(типизировать приходящие объекты с апишки)
                    state.isLoading = false;
                    state.error = '';
                    state.data = action.payload.data;
                    state.teachers = action.payload.teachers
                })
                .addCase(fetchData.rejected, (state) => {
                    state.isLoading = false;
                })
                .addDefaultCase(() => {})
        }
})

const {reducer} = apiRequestSlice;
export default reducer;
