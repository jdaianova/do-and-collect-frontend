import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../shared/config';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
        }),
        addTask: builder.mutation({
            query: (newTask) => ({
                url: '/tasks',
                method: 'POST',
                body: newTask,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
        }),
        updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `/tasks/${updatedTask.id}`,
                method: 'PATCH',
                body: updatedTask,
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
} = tasksApi;