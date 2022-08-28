import { del, get, post, put } from "./api.js";

export async function getTaskById(id) {
    return get('/data/tasks/' + id);
}

export async function getAllTasks() {
    return get('/data/tasks');
}

export async function createTask(task) {
    return post('/data/tasks', task);
}

export async function updateTask(id, task) {
    return put(`/data/tasks/` + id, task)
}

export async function deleteTask(id) {
    return del(`/data/tasks/` + id);
}





