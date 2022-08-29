import { del, get, post, put } from "./api.js";

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
console.log('put');
    return put(`/jsonstore/tasks/` + id, task)
}

export async function deleteTask(id) {
    return del(`/jsonstore/tasks/` + id);
}





