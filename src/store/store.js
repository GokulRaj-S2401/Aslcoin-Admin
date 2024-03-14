// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { authApi } from '@/store/services/authApi'
// import { authAPIs } from '@/store/services/authAPIs'
// import { EmployeesApi } from '@/store/services/EmployeesApi'
// import {organizationsApi} from '@/store/services/organizationsApi'
// export const store = configureStore({
//   reducer: {
//     [authApi.reducerPath]: authApi.reducer,
//     [authAPIs.reducerPath]: authAPIs.reducer,
//     // [EmployeesApi.reducerPath]: EmployeesApi.reducer,
//     // [organizationsApi.reducerPath]:organizationsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       [
//         authApi.middleware,
//         authAPIs.middleware,
//         // EmployeesApi.middleware,
//         // organizationsApi.middleware
//       ]
//     ),
// })

// setupListeners(store.dispatch)