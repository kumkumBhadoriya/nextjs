import { apiSlice } from "../services/apiSlice";
import { Todo } from "../../types/type";

export const todoApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      transformResponse: (res: Todo[]) => res.slice(0, 10),
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),

    updateTodo: builder.mutation<Todo, Todo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),

      async onQueryStarted(todo, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todoApiSLice.util.updateQueryData(
            "getTodos",
            undefined,
            (draft: Todo[]) => {
              const item = draft.find((t) => t.id === todo.id);
              if (item) item.title = todo.title;
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteTodo: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApiSLice;
