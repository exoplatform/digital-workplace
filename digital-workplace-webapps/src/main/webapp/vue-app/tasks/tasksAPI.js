export function getMyAllTasks() {
  return fetch('/portal/rest/tasks', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } else {
      throw new Error ('Error when getting my all tasks');
    }
  })
}

export function getMyIncomingTasks() {
  return fetch('/portal/rest/tasks?status=incoming&returnSize=true', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting my incoming tasks');
    }
  })
}

export function getMyOverdueTasks() {
  return fetch('/portal/rest/tasks?status=overdue&returnSize=true', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting my overdue tasks');
    }
  })
}
export function getUserInformations(userName) {
  return fetch(`/portal/rest/v1/social/users/${userName}`, {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when getting user informations');
    }
  })
}

export function updateTask(taskId, task) {
  return fetch(`/portal/rest/tasks/${taskId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(task)
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when updating task');
    }
  })
}

export function getMyAllLabels() {
  return fetch('/portal/rest/tasks/labels', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting my all labels');
    }
  })
}

export function getTaskLabels(taskId) {
  return fetch(`/portal/rest/tasks/labels/${taskId}`, {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when getting task labels');
    }
  })
}

export function addTaskToLabel(taskId, label) {
  return fetch(`/portal/rest/tasks/labels/${taskId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(label)
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when adding task to label');
    }
  })
}

export function removeTaskFromLabel(taskId, labelId) {
  return fetch(`/portal/rest/tasks/labels/${taskId}/${labelId}`, {
    method: "delete",
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when deleting task from label');
    }
  })
}

export function getProjects() {
  return fetch('/portal/rest/tasks/projects', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting projects');
    }
  })
}

export function getDefaultStatusByProjectId(projectId) {
  return fetch(`/portal/rest/tasks/projects/status/${projectId}`, {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when getting default status');
    }
  })
}

export function getAllUsers() {
  return fetch('/portal/rest/v1/social/users', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when getting users');
    }
  })
}

export function getTaskLogs(taskId) {
  return fetch(`/rest/tasks/logs/${taskId}`, {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    }
    else {
      throw new Error ('Error when getting task logs');
    }
  })
}
