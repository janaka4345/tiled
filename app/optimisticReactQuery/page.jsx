"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
const todos = [
  { id: 1, title: "todo 1" },
  { id: 2, title: "todo 2" },
  { id: 3, title: "todo 3" },
  { id: 4, title: "todo 4" },
];
export default function page() {
  const mutation = useMutation({
    mutationFn: async (todo) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      todos.push(todo);
    },
    //   gcTime:,
    //   mutationKey:,
    //   networkMode:,
    //   onError:,
    //   onMutate:,
    //   onSettled:,
    //   onSuccess:,
    //   retry:,
    //   retryDelay:,
    //   throwOnError:,
    //   meta:,
  });

  const data = useQuery({
    queryKey: ["todos"],
    queryFn: () => todos,
  });
  console.log(mutation);
  return (
    <div>
      <button onClick={() => mutation.mutate({ id: 5, title: "todo 5" })}>
        add todo
      </button>
      {data.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      {mutation.isPending && (
        <h1 key={mutation.variables.id}>{mutation.variables.title}</h1>
        // to check wether it is get updated . h1 turns to li item once updated
      )}
      {/* <pre>{JSON.stringify(mutation.variables, null, 2)}</pre> */}
    </div>
  );
}
