const projects = [
    { day: 1, title: "JavaScript Drum Kit", folder: "01-JavaScript-Drum-Kit" },
    { day: 2, title: "JS and CSS Clock", folder: "02-JS-and-CSS-Clock" },
    { day: 3, title: "CSS Variables", folder: "03-CSS-Variables" },
    { day: 4, title: "Array Cardio Day 1", folder: "04-Array-Cardio-Day-1" },
    { day: 5, title: "Flex Panel Gallery", folder: "05-Flex-Panel-Gallery" },
    { day: 6, title: "Type Ahead", folder: "06-Type-Ahead" },
    { day: 7, title: "Array Cardio Day 2", folder: "07-Array-Cardio-Day-2" },
    { day: 8, title: "Fun with HTML5 Canvas", folder: "08-Fun-with-HTML5-Canvas" },
    { day: 9, title: "Dev Tools Domination", folder: "09-Dev-Tools-Domination" },
    { day: 10, title: "Hold Shift and Check Checkboxes", folder: "10-Hold-Shift-and-Check-Checkboxes" },
    { day: 11, title: "Custom Video Player", folder: "11-Custom-Video-Player" },
    { day: 12, title: "Key Sequence Detection", folder: "12-Key-Sequence-Detection" },
    { day: 13, title: "Slide in on Scroll", folder: "13-Slide-in-on-Scroll" },
    { day: 14, title: "JavaScript References VS Copying", folder: "14-JavaScript-References-VS-Copying" },
    { day: 15, title: "LocalStorage", folder: "15-LocalStorage" },
    { day: 16, title: "Mouse Move Shadow", folder: "16-Mouse-Move-Shadow" },
    { day: 17, title: "Sort Without Articles", folder: "17-Sort-Without-Articles" },
    { day: 18, title: "Adding Up Times with Reduce", folder: "18-Adding-Up-Times-with-Reduce" },
    { day: 19, title: "Webcam Fun", folder: "19-Webcam-Fun" },
    { day: 20, title: "Speech Detection", folder: "20-Speech-Detection" },
    { day: 21, title: "Real-time Compass & Speed Tracker", folder: "21-Geolocation" },
    { day: 22, title: "Follow Along Link Highlighter", folder: "22-Follow-Along-Link-Highlighter" },
    { day: 23, title: "Speech Synthesis", folder: "23-Speech-Synthesis" },
    { day: 24, title: "Sticky Nav", folder: "24-Sticky-Nav" },
    { day: 25, title: "Event Capture, Propagation, Bubbling and Once", folder: "25-Event-Capture,-Propagation,-Bubbling-and-Once" },
    { day: 26, title: "Stripe Follow Along Nav", folder: "26-Stripe-Follow-Along-Nav" },
    { day: 27, title: "Click and Drag", folder: "27-Click-and-Drag" },
    { day: 28, title: "Video Speed Controller", folder: "28-Video-Speed-Controller" },
    { day: 29, title: "Countdown Timer", folder: "29-Countdown-Timer" },
    { day: 30, title: "Whack A Mole", folder: "30-Whack-A-Mole" }
];

const grid = document.getElementById('projectGrid');

projects.forEach(project => {
    const card = document.createElement('a');
    
    card.href = `${project.folder}/index.html`; 
    card.className = 'card';

    card.innerHTML = `
        <div class="day-badge">Day ${project.day}</div>
        <div class="project-title">${project.title}</div>
    `;

    grid.appendChild(card);
});