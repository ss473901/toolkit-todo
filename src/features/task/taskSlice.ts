import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

/* stataの型 */
export interface TaskState {
  // taskが何個あるのかを管理する
  idCount: number;
  // storeに保存するtaskの一覧(配列にこれらのデータが入る。)
  tasks: { id: number; title: string; completed: boolean }[];
  // taskのtitleを編集する際にどのtaskが選択されているか
  selectedTask: { id: number; title: string; completed: boolean };
  // Modalを開くか閉じるかのフラグ
  isModalOpen: boolean;
}

/* stateの初期値 */
const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "task A", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

/* createSliceを用いてsliceの作成 */
export const taskSlice = createSlice({
  // name
  name: "task",
  // initialState
  initialState,
  // reducers
  reducers: {
    // action①:taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
  },
});

// actionをexport
export const { createTask } = taskSlice.actions;

// useSelectorを用いることで、stataの中身をReactのcomponentに反映させることができる
// stata.task.tasksのtaskは27行目のstataの名前。tasksはstoreに保存するtasksの一覧の名前
export const selectTask = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

export default taskSlice.reducer;
