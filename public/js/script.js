document.addEventListener('DOMContentLoaded', () => {

  const taskForm = document.getElementById('task-form');
  const titleInput = document.getElementById('title');
  const tableBody = document.getElementById('task-table-body');

  const editModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
  const editForm = document.getElementById('edit-task-form');
  const editTaskId = document.getElementById('edit-task-id');
  const editTaskTitle = document.getElementById('edit-task-title');
  const editTaskDescription = document.getElementById('edit-task-description');
  const editTaskStatus = document.getElementById('edit-task-status');
  const loadingSpinner = document.getElementById('loading-spinner');
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login';
  }

  // Spinner control
  const showSpinner = () => {
    loadingSpinner.classList.remove('d-none');
  };

  const hideSpinner = () => {
    loadingSpinner.classList.add('d-none');
  };


  const fetchTasks = async () => {
      try {
        showSpinner();
        // const res = await fetch('/api/tasks');
        const res = await fetch('/api/tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const tasks = await res.json();
        tableBody.innerHTML = '';
        tasks.forEach((task) => {
          const row = document.createElement('tr');

          row.innerHTML = `
            <td>${task.title}</td>
            <td>${getStatusBadge(task.status)}</td>
            <td>
              <button class="btn btn-sm btn-warning me-1 edit" data-id="${task.id || task._id}" data-title="${task.title}" data-description="${task.description}" data-status="${task.status}">Edit</button>
              <button class="btn btn-sm btn-danger delete" data-id="${task.id || task._id}">Delete</button>
            </td>
          `;
          tableBody.appendChild(row);
        });
      } catch (err) {
        showToast('Failed to load tasks.', 'danger');
      } finally {
        hideSpinner();
      }
  };


 const createTask = async (title, description) => {
    try {
      showSpinner();

      const token = localStorage.getItem('token');
      if (!token) {
        showToast('User not authenticated.', 'danger');
        hideSpinner();
        return;
      }

      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        showToast('Task added successfully!', 'success');
        fetchTasks();
      } else {
        showToast('Failed to add task.', 'danger');
      }
    } catch (err) {
      showToast('Error adding task.', 'danger');
    } finally {
      hideSpinner();
    }
  };


   // Handle form submission for adding task
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    createTask(title, description);

    title.value = '';
    description.value = '';
    
  });


  const updateTask = async (id, newTitle, newDescription, newStatus) => {
    try {
        showSpinner();
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ title: newTitle, description: newDescription, status: newStatus }),
        });

        if (res.ok) {
          showToast('Task updated successfully!', 'info');
          fetchTasks();
        } else {
          showToast('Failed to update task.', 'danger');
        }
    } catch (err) {
          showToast('Error updating task.', 'danger');
      }
      finally{
        hideSpinner();
      }
  };


  const deleteTask = async (id) => {
      try {
        showSpinner();
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.ok) {
          showToast('Task deleted successfully!', 'warning');
          fetchTasks();
        } else {
          showToast('Failed to delete task.', 'danger');
        }
      } catch (err) {
        showToast('Error deleting task.', 'danger');
      } finally{
        hideSpinner();
      }
  };


 

  // Handle click on Edit and Delete buttons
  tableBody.addEventListener('click', (e) => {
    const target = e.target;
    const id = target.dataset.id;
    

    if (target.classList.contains('edit')) {
      // Fill modal with task data
      editTaskId.value = id;
      editTaskTitle.value = target.dataset.title;
      editTaskDescription.value = target.dataset.description;
      
      editTaskStatus.value = target.dataset.status;
      editModal.show();
    }

    if (target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this task?')) {
        deleteTask(id);
      }
    }
  });

  // Handle edit form submit (modal)
  editForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = editTaskId.value;
    const title = editTaskTitle.value;
    const description = editTaskDescription.value;
    const status = editTaskStatus.value;

    await updateTask(id, title, description, status);
    editModal.hide();
  });

  fetchTasks();


  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return `<span class="badge bg-secondary">Pending</span>`;
      case 'in-progress':
        return `<span class="badge bg-warning text-dark">In Progress</span>`;
      case 'completed':
        return `<span class="badge bg-success">Completed</span>`;
      default:
        return `<span class="badge bg-dark">${status}</span>`;
    }
  };



  // Toast helper function
  const showToast = (message, type = 'primary') => {
    const toastEl = document.getElementById('toast');
    const toastBody = document.getElementById('toast-body');

    toastBody.textContent = message;
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };

  
  

});
