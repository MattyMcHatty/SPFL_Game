export type RootState = {
  // Define the shape of your application's state here
};

export type AppAction = 
  | { type: 'ACTION_TYPE_1'; payload: any }
  | { type: 'ACTION_TYPE_2'; payload: any };
// Add more action types as needed

export interface AppThunkAction {
  (dispatch: (action: AppAction) => void, getState: () => RootState): void;
}