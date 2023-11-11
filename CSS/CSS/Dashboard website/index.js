const ctx = document.getElementById('linechart');
const ctx1 = document.getElementById('polararea');
const ctx2 = document.getElementById('doughnut');

        Chart.defaults.color = "white";
        new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [20,30,15,45,30,35],
                    borderWidth: 1
                },
                {
                    label: 'Customer',
                    data: [25,35,20,30,20,15],
                    borderWidth: 1
                },
                {
                    label: 'Sales',
                    data: [21,38,35,32,20,23],
                    borderWidth: 1
                },
        ]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

        new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [20,30,15,45,30,35],
                    borderWidth: 1
                },
        ]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

        new Chart(ctx2, {
        type: 'polarArea',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [20,30,15,45,30,35],
                    borderWidth: 1
                },
        ]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

        document.getElementById("light-mode").addEventListener("click",function(){

            Chart.defaults.color = "black"
            document.getElementById("main").style.backgroundColor="#e1e0e0";
            document.getElementById("main-area").style.backgroundColor="white";
            document.getElementById("sidebar").style.backgroundColor="white";
            document.getElementById("sidebar").style.color="#161616";
            document.getElementById("main-area").style.color="#161616";
        
            let boxes = document.getElementsByClassName("box");
        
            for(let i=0;i<boxes.length;i++)
            {
                boxes[i].style.backgroundColor="#e1e0e0";
                boxes[i].style.color="#161616";
        
            }
        
            document.getElementById("dark-mode").parentElement.style.display="block";
            document.getElementById("light-mode").parentElement.style.display="none";
        })

        document.getElementById("dark-mode").addEventListener("click",function(){

            document.getElementById("main").style.backgroundColor="#3d3d3d";
            document.getElementById("main-area").style.backgroundColor="#161616";
            document.getElementById("sidebar").style.backgroundColor="#161616";
            document.getElementById("sidebar").style.color="white";
            document.getElementById("main-area").style.color="white";
        
            let boxes = document.getElementsByClassName("box");
        
            for(let i=0;i<boxes.length;i++)
            {
                boxes[i].style.backgroundColor="#3d3d3d";
                boxes[i].style.color="white";
        
            }
        
            document.getElementById("dark-mode").parentElement.style.display="none";
            document.getElementById("light-mode").parentElement.style.display="block";
        })