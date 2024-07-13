const mockData = {
    followers: 15000,
    posts: 500,
    engagementRate: "5%",
    analytics: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 
  };
  document.getElementById("follower-count").textContent = mockData.followers;
  document.getElementById("post-count").textContent = mockData.posts;
  document.getElementById("engagement-rate").textContent =
    mockData.engagementRate;
  
  
  const ctx = document.getElementById("analytics-chart").getContext("2d");
  const analyticsChart = new Chart(ctx, {
    type: "line", 
    data: {
      labels: [
        
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
       
        {
          label: "Analytics", 
          data: mockData.analytics, 
          backgroundColor: "rgba(54, 162, 235, 0.2)", 
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1, 
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });


  