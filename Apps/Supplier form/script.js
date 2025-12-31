document.addEventListener('DOMContentLoaded', () => {

    // --- State Management ---
    const form = document.getElementById('powerAppForm');
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const trackers = document.querySelectorAll('.tracker-item');
    const submitBtn = document.querySelector('.submit-btn');
    const validationMsg = document.getElementById('validationMessage');

    // --- Tab Switching Logic ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // Update Tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update Content
            contents.forEach(c => {
                c.classList.remove('active');
                if (c.id === targetId) c.classList.add('active');
            });

            // Update Dashboard Active State
            trackers.forEach(t => {
                t.classList.remove('active');
                if (t.dataset.section === targetId) t.classList.add('active');
            });
        });
    });

    // --- Conditional Logic ---

    // Urgent Request Logic
    const urgentRadios = document.querySelectorAll('input[name="urgent"]');
    const urgentRow = document.getElementById('urgentReasonRow');

    urgentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            urgentRow.style.display = e.target.value === 'yes' ? 'grid' : 'none';
        });
    });

    // Public Provider Details Logic
    const publicRadios = document.querySelectorAll('input[name="publicProvider"]');
    const publicRow = document.getElementById('publicProviderDetailsRow');

    publicRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            publicRow.style.display = e.target.value !== 'na' ? 'grid' : 'none';
        });
    });

    // --- Progress & Validation Logic ---

    function checkSectionProgress(sectionId) {
        const sectionEl = document.getElementById(sectionId);
        const requiredInputs = sectionEl.querySelectorAll('[required]');
        let completed = true;

        requiredInputs.forEach(input => {
            if (input.type === 'radio' || input.type === 'checkbox') {
                const name = input.name;
                const group = sectionEl.querySelectorAll(`input[name="${name}"]:checked`);
                if (group.length === 0) completed = false;
            } else {
                if (!input.value.trim()) completed = false;
            }
        });

        return completed;
    }

    function updateDashboard() {
        let completedSections = 0;
        const totalSections = trackers.length;

        trackers.forEach(tracker => {
            const sectionId = tracker.dataset.section;
            const isComplete = checkSectionProgress(sectionId);

            // Update Tracker UI
            const statusSpan = tracker.querySelector('.tracker-status');
            if (isComplete) {
                tracker.classList.add('completed');
                statusSpan.textContent = "Completed";
                statusSpan.style.color = "var(--k-success)";
                completedSections++;
            } else {
                tracker.classList.remove('completed');
                statusSpan.textContent = "Pending";
                statusSpan.style.color = "#95a5a6";
            }
        });

        // Update Overall Progress Bar
        const percent = (completedSections / totalSections) * 100;
        document.querySelector('.progress-bar-fill').style.width = `${percent}%`;
        document.querySelector('.progress-text').textContent = `${Math.round(percent)}% Completed`;

        // Update Submit Button
        if (completedSections === totalSections) {
            submitBtn.classList.add('enabled');
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Request";
            validationMsg.style.opacity = '0';
        } else {
            submitBtn.classList.remove('enabled');
            submitBtn.disabled = true;
            submitBtn.textContent = "Complete All Sections";
            validationMsg.style.opacity = '1';
        }
    }

    // Monitor Input Changes for Progress Updates
    form.addEventListener('input', updateDashboard);
    form.addEventListener('change', updateDashboard);

    // Initial Check
    updateDashboard();

    // --- Form Submission ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Final Validation Check
        if (submitBtn.disabled) return;

        // Simulate Submission
        submitBtn.innerHTML = "Submitting...";

        setTimeout(() => {
            alert("Form submitted successfully! (Demo)");
            window.location.reload();
        }, 1500);
    });
});
