// =========================================
// ATTENDANCE CHART
// =========================================

const canvas = document.getElementById("attendanceChart");

if (canvas) 
{
    const ctx = canvas.getContext("2d");

    canvas.width = 700;
    canvas.height = 300;

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const attendance = [92, 105, 98, 110, 112];

    // Chart settings
    const chartLeft = 50;
    const chartBottom = 260;
    const chartTop = 20;
    const chartRight = 680;

    const maxAttendance = 125;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // -------------------------
    // Chart axes
    // -------------------------

    ctx.beginPath();

    ctx.moveTo(chartLeft, chartTop);
    ctx.lineTo(chartLeft, chartBottom);

    ctx.moveTo(chartLeft, chartBottom);
    ctx.lineTo(chartRight, chartBottom);

    ctx.strokeStyle = "#222";
    ctx.lineWidth = 2;
    ctx.stroke();


    // -------------------------
    // Y-axis labels
    // -------------------------

    ctx.fillStyle = "#666";
    ctx.font = "12px Manrope";

    for (let i = 0; i <= 5; i++) {

        const value = i * 25;

        const y =
            chartBottom -
            (value / maxAttendance) *
            (chartBottom - chartTop);

        ctx.fillText(value, 15, y + 4);
    }


    // -------------------------
    // Attendance bars
    // -------------------------

    const barWidth = 70;
    const gap = 35;

    days.forEach((day, index) => {

        const value = attendance[index];

        const barHeight =
            (value / maxAttendance) *
            (chartBottom - chartTop);

        const x =
            chartLeft +
            40 +
            index * (barWidth + gap);

        const y = chartBottom - barHeight;

        // Bar
        ctx.fillStyle = "#ffd700";

        ctx.fillRect(
            x,
            y,
            barWidth,
            barHeight
        );

        // Day label
        ctx.fillStyle = "#333";
        ctx.font = "13px Manrope";

        ctx.fillText(
            day,
            x + 22,
            chartBottom + 25
        );

        // Attendance number
        ctx.fillStyle = "#111";
        ctx.font = "12px Manrope";

        ctx.fillText(
            value,
            x + 27,
            y - 8
        );
    });
}


// =========================================
// SEARCH
// =========================================

const searchForm = document.querySelector(".search");

if (searchForm)
{

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchInput =
            searchForm.querySelector("input");

        const searchValue =
            searchInput.value.trim();

        if (searchValue !== "") {
            alert("Searching for: " + searchValue);
        }
    });
}


// =========================================
// NOTIFICATION BUTTON
// =========================================

const notificationButton =
    document.querySelector(".notification-btn");

if (notificationButton) 
{

    notificationButton.addEventListener("click", function () {

        alert("You have new notifications.");
    });
}


// =========================================
// LEAVE REQUEST BUTTONS
// =========================================

const leaveRequests =
    document.querySelectorAll(".leave-request");

leaveRequests.forEach(function (request) {

    const buttons =
        request.querySelectorAll("button");

    const approveButton = buttons[0];
    const rejectButton = buttons[1];

    if (approveButton) {

        approveButton.addEventListener("click", function () {

            const status =
                request.querySelector("p:nth-of-type(3)");

            if (status) {
                status.textContent = "Approved";
            }

            Alert("Leave request approved.");
        });
    }

    if (rejectButton) {

        rejectButton.addEventListener("click", function () {

            const status =
                request.querySelector("p:nth-of-type(3)");

            if (status) {
                status.textContent = "Rejected";
            }

            Alert("Leave request rejected.");
        });
    }
});


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show");
});