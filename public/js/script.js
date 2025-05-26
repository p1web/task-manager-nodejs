// document.addEventListener('DOMContentLoaded', () => {
// document.addEventListener('header-loaded', () => {
  whenReady(() => {


  const taskForm = document.getElementById('task-form');
  const tableBody = document.getElementById('task-table-body');
  const userTableBody = document.getElementById('user-table-body');
  // const editModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
  const editForm = document.getElementById('edit-task-form');
  const loadingSpinner = document.getElementById('loading-spinner');
  const token = localStorage.getItem('token');
  // const username = localStorage.getItem('username');
  const modalElement = document.getElementById('editTaskModal');
  let editModal = null;

  if (modalElement) {
    editModal = new bootstrap.Modal(modalElement);
  }

  if (!token) {
    window.location.href = '/login';
  }


   if (token) {
      const payload = parseJwt(token);
      
      if (payload && payload.roleId === 1) {
          document.getElementById('admin-users-menu').style.display = 'block';
      }else{
          document.getElementById('admin-users-menu').style.display = 'none';
      }
   }


  // Spinner control
  const showSpinner = () => {
    loadingSpinner.classList.remove('d-none');
  };

  const hideSpinner = () => {
    loadingSpinner.classList.add('d-none');
  };

  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));

      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }



  const fetchUsers = async () => {

      if(userTableBody){
        
        try {
          showSpinner();
          // const res = await fetch('/api/tasks');
          const res = await fetch('/api/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

          console.log('Response status:', res.status);

          const userList = await res.json();
          
          userTableBody.innerHTML = '';
          userList.forEach((userInfo) => {
            
            // const taskdueDate = new Date(userInfo.dueDate);
            // const formattedDueDate = taskdueDate.toISOString().split('T')[0];
        
            const row = document.createElement('tr');

            row.innerHTML = `
              <td>${ userInfo.firstName }</td>
              <td>${ userInfo.lastName }</td>
              <td>${ userInfo.email }</td>
              <td>${ userInfo.mobile }</td>
              <td>${ userInfo.username }</td>
              <td>
                <a href="" class="btn btn-info">View</a>
                <a href="" class="btn btn-info">Send Test Email</a>
                </td>
            `;
            userTableBody.appendChild(row);
          });
        } catch (err) {
            showToast('Failed to load users.', 'danger');
        } finally {
            hideSpinner();
        }
      }
  };

  const fetchTasks = async () => {

      if(tableBody){

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

          const taskList = await res.json();
          
          tableBody.innerHTML = '';
          taskList.forEach((taskiInfo) => {
            
            const taskdueDate = new Date(taskiInfo.dueDate);
            const formattedDueDate = taskdueDate.toISOString().split('T')[0];
        
            const row = document.createElement('tr');

            row.innerHTML = `
              <td>${ taskiInfo.title }</td>
              <td>${ getPriorityBadge(taskiInfo.priority) }</td>
              <td>
                <span class="due-date" data-due="${taskiInfo.dueDate}">${ formatDate(taskdueDate) }</span>
              </td>
              <td>${ getStatusBadge(taskiInfo.status) }</td>
              <td>
                <button class="btn btn-sm btn-warning me-1 edit" data-id="${taskiInfo.id || taskiInfo._id}" data-title="${taskiInfo.title}" data-description="${taskiInfo.description}" data-status="${taskiInfo.status}" data-dueDate="${taskiInfo.dueDate}" data-priority="${taskiInfo.priority}">Edit</button>
                <button class="btn btn-sm btn-danger delete" data-id="${taskiInfo.id || taskiInfo._id}">Delete</button>
              </td>
            `;
            tableBody.appendChild(row);
          });
        } catch (err) {
          // console.error('Error occurred in fetchTasks:', err);
            showToast('Failed to load tasks.', 'danger');
        } finally {
            hideSpinner();
        }
      }
  };
  

  const createTask = async (title, description, priority, dueDate) => {
    
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
        body: JSON.stringify({ title, description, priority, dueDate })
      });

      // console.log(res);

      if (res.ok) {
        showToast('Task added successfully!', 'success');
      } else {
        showToast('Failed to add task.', 'danger');
      }
    } catch (err) {
        showToast('Error adding task.', 'danger');
    } finally {
       hideSpinner();
    }

  };


  if (taskForm) {
    // Handle form submission for adding task
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('title').value.trim();
      const description = document.getElementById('description').value.trim();
      const priority = document.getElementById('priority').value.trim();
      const dueDate = document.getElementById('dueDate').value;
  
      createTask(title, description, priority, dueDate);

      // title.value = '';
      // description.value = '';
      
    });
  }


  const updateTask = async (id, newTitle, newDescription, newStatus, newPriority, newDueDate) => {
    try {
        showSpinner();
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(
            { 
              title: newTitle, 
              description: newDescription, 
              status: newStatus, 
              priority: newPriority,
              dueDate: newDueDate
            }
          ),
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
  if (tableBody) {
    tableBody.addEventListener('click', (e) => {
      const target = e.target;
      const id = target.dataset.id;

      if (target.classList.contains('edit')) {

        const date = new Date(target.dataset.duedate);
        const formattedDate = date.toISOString().split('T')[0];   // Format as yyyy-mm-dd

        // Fill modal with task data
        document.getElementById('edit-task-id').value = id;
        document.getElementById('edit-task-title').value = target.dataset.title;
        document.getElementById('edit-task-description').value = target.dataset.description;
        document.getElementById('edit-task-status').value = target.dataset.status;      
        document.getElementById('edit-task-priority').value = target.dataset.priority;
        document.getElementById('edit-task-dueDate').value = formattedDate;

        editModal.show();
      }

      if (target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this task?')) {
          deleteTask(id);
        }
      }
    });
  }

  // Handle edit form submit (modal)
  if (editForm) {
    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const id = document.getElementById('edit-task-id').value;
      const title = document.getElementById('edit-task-title').value;
      const description = document.getElementById('edit-task-description').value;
      const status = document.getElementById('edit-task-status').value;
      const priority = document.getElementById('edit-task-priority').value;
      const dueDate = document.getElementById('edit-task-dueDate').value;
      
      await updateTask(id, title, description, status, priority, dueDate);

      editModal.hide();
    });
  }
  
  fetchUsers();
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

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Low':
        return `<span class="badge bg-success">Low</span>`;
      case 'Medium':
        return `<span class="badge bg-warning">Medium</span>`;
      case 'High':
        return `<span class="badge bg-danger">High</span>`;
      default:
        return `<span class="badge bg-dark">${priority}</span>`;
    }
  };

  // Toast helper function
  const showToast = (message, type = 'primary') => {
    const toastEl = document.getElementById('toast');
    const toastBody = document.getElementById('toast-body');

    if (!toastEl || !toastBody) {
      console.warn('Toast element or body not found');
      return;
    }

    toastBody.textContent = message;
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };


  function renderDueDates(){

      const dueSpans = document.querySelectorAll('.due-date');

      dueSpans.forEach(span => {
        const due = new Date(span.dataset.due);
        const now = new Date();
        const diff = due - now;

        if (isNaN(due.getTime())) {
          span.textContent = '—';
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (diff < 0) {
          span.innerHTML = `<span class="badge bg-danger">Overdue</span>`;
        } else if (days === 0) {
          span.innerHTML = `<span class="badge bg-warning text-dark">Due Today</span>`;
        } else {
          span.innerHTML = `<span class="badge bg-success">${days} day(s) left</span>`;
        }
      });
  }

  function formatDate(date) { // convert date as dd-mm-yyyy
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  

});


