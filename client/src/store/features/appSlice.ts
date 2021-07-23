import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch, RootState } from '../store';
import { changeProfile } from './profileSlice';


function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const initialState = {
    status: 'idle',
    loading: true,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        _changeStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
            switch (state.status) {
                case 'idle':
                    state.loading = false;
                    break;
                case 'verifyAuthentication':
                    state.loading = true;
                    break;
                case 'authenticated':
                    state.loading = false;
                    break;
                case 'notAuthenticated':
                    state.loading = false;
                    break;
            }
        },
    }
});

export const { _changeStatus } = appSlice.actions;

export const getStatus = (state: RootState) => { return state.app.status }
export const getLoading = (state: RootState) => { return state.app.loading }

export default appSlice.reducer;


export const startApp = (): AppThunk => async (dispatch: AppDispatch) => {
    await timeout(1500);
    const response = {
        status: 200,
        message: {
            username: 'MateoSRQ',
            name: 'Mateo',
            role: 'Administrator',
            profile: {
                steps: [
                    {
                        title: 'Datos Generales',
                        description: 'Cuéntanos un poco más de tí',
                        content: 'Ingresa la información para saber más de ti',
                        items: [
                            {type: 'QuestionText', name: 'nombres', rules: [{ required: true, message: 'Please input your password!' }], text: 'Nombres', maxSize: 40},
                            {type: 'QuestionText', name: 'apellido_paterno', rules: [{ required: true, message: 'Please input your password!' }], text: 'Apellido Paterno', maxSize: 40}
                        ]
                    },
                    {
                        title: 'Second',
                        description: 'Second-content',
                        content: 'Second-content',
                        items: [
                            {type: 'QuestionText', name: 'nombres', rules: [{ required: true, message: 'Please input your password!' }], text: 'Nombres', maxSize: 40},
                            {type: 'QuestionText', name: 'apellido_paterno', rules: [{ required: true, message: 'Please input your password!' }], text: 'Apellido Paterno', maxSize: 40}
                        ]
                    },
                    {
                        title: 'Last',
                        description: 'Last-content',
                        content: 'Last-content',
                        items: [
                            {type: 'QuestionText', name: 'nombres', rules: [{ required: true, message: 'Please input your password!' }], text: 'Nombres', maxSize: 40},
                            {type: 'QuestionText', name: 'apellido_paterno', rules: [{ required: true, message: 'Please input your password!' }], text: 'Apellido Paterno', maxSize: 40}
                        ]
                    },
                ]
            }
        }
    }
    if (response?.status == 200) {
        dispatch(changeProfile(response.message.profile))
        dispatch(_changeStatus('authenticated'))
    }
    else {
        dispatch(_changeStatus('notAuthenticated'))
    }
}

