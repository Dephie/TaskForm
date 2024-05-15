import { revalidatePath } from "next/cache"
import { Button } from "./ui/button"
import { removeTask } from "@/actions/task-actions"

function TaskButtonDelete({ taskId }: { taskId: number }) {


    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button
                variant="destructive"
            >
                Delete
            </Button>
        </form>
    )
}

export default TaskButtonDelete