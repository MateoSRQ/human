import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch, RootState } from '../store'

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface Step {
    title: string,
    description: string,
    content: string,
    items: Array<any>
};

interface State {
    currentStep: number,
    steps: Array<Step>
};

const initialState: State = {
    currentStep: 0,
    steps: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfile(state, action: PayloadAction<any>) {
            state.steps = action.payload.steps;
        },
        changeCurrentStep(state, action: PayloadAction<any>) {
            state.currentStep = action.payload;
        },
    }
});

export const { changeProfile } = profileSlice.actions;

export const getSteps = (state: RootState) => { return state.profile.steps }
export const getStepItems = (state: RootState) => { return state.profile.steps[state.profile.currentStep].items }
export const getCurrentStep = (state: RootState) => { return state.profile.currentStep }

export default profileSlice.reducer;