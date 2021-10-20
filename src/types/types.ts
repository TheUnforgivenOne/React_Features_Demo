export type QueryType = Record<string, number | string>

export type TodoType = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}
