import { del, get, post, patch } from "./api.js";

export async function getTaskById(id) {
    return get('/jsonstore/tasks/' + id);
}

export async function getAllTasks() {
    return get('/jsonstore/tasks');
}

export async function createTask(task) {
    return post('/jsonstore/tasks', task);
}

export async function updateTask(id, task) {
console.log('patch');
    return patch(`/jsonstore/tasks/` + id, task)
}

export async function deleteTask(id) {
    return del(`/jsonstore/tasks/` + id);
}





