document.addEventListener('DOMContentLoaded', async () => {

const canvas = document.getElementById('myChart');
  if (!canvas) {
    console.error('Chart canvas not found!');
    return;
  }

  const ctx = canvas.getContext('2d');

  try {

    const response = await fetch('/api/dashboard/chart-data');
    const json = await response.json();
    const data = json.data || [];

    const labels = data.map(item => item.month);
    const totalCounts = data.map(item => item.total);
    const completedCounts = data.map(item => item.completed);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Total Tasks',
            data: totalCounts,
            backgroundColor: '#ffc107'
          },
          {
            label: 'Completed Tasks',
            data: completedCounts,
            backgroundColor: '#20c997'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0 }
          }
        }
      }
    });
  } catch (err) {
    console.error('Failed to load chart data:', err);
  }

  const fetchActivities = async () => {
      try {
        // const token = localStorage.getItem('token');

        const response = await fetch('/api/dashboard/fetch-activities');
        const json = await response.json();
        const data_info = json.data || [];

        const recentActivityList = document.getElementById('recentActivity');
         recentActivityList.innerHTML = '';
        if (data_info.length === 0) {
          recentActivityList.innerHTML = '<li class="list-group-item text-muted">No recent activities found.</li>';
          return;
        }

        data_info.forEach(activity => {
          const li = document.createElement('li');
          li.className = 'list-group-item';

          const time = new Date(activity.createdAt).toLocaleString();
          li.textContent = `${activity.action} at ${time}.`;

          recentActivityList.appendChild(li);
        });


      } catch (err) {
        console.error('Error in fetching data:', err);
        alert('Error in fetching data:.');
      }

  }

  fetchActivities();


});