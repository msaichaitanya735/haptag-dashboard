document.addEventListener('DOMContentLoaded', () => {

    // --- Sidebar Toggle Functionality ---
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // --- Analytical Lens View Toggling ---
    const lensTabs = document.querySelectorAll('.lens-tab');
    const views = document.querySelectorAll('.view');
    lensTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update tab active state
            lensTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show the correct view
            const viewId = tab.dataset.view;
            views.forEach(view => {
                if (view.id === viewId) {
                    view.style.display = 'block';
                    view.classList.add('active');
                } else {
                    view.style.display = 'none';
                    view.classList.remove('active');
                }
            });
        });
    });

    // --- AI Analyst Report Tab Toggling ---
    const aiTabs = document.querySelectorAll('.ai-tab');
    const aiContents = document.querySelectorAll('.ai-summary-content');
    aiTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            aiTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            aiContents.forEach((content, contentIndex) => {
                content.style.display = index === contentIndex ? 'block' : 'none';
            });
        });
    });

    // --- Anomaly Table Context Row Toggling ---
    const actionButtons = document.querySelectorAll('.anomaly-table .icon-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const contextRow = row.nextElementSibling;
            if (contextRow && contextRow.classList.contains('context-row')) {
                const isVisible = contextRow.style.display === 'table-row';
                contextRow.style.display = isVisible ? 'none' : 'table-row';
            }
        });
    });
    
    // --- Interactive Checklist Strikethrough ---
    const checklistItems = document.querySelectorAll('.action-checklist input[type="checkbox"]');
    checklistItems.forEach(checkbox => {
        // Apply initial state based on 'checked' property
        if (checkbox.checked) {
            checkbox.closest('label').style.textDecoration = 'line-through';
            checkbox.closest('label').style.color = 'var(--text-light)';
        }
        
        // Add event listener for changes
        checkbox.addEventListener('change', (event) => {
            const label = event.target.closest('label');
            if (event.target.checked) {
                label.style.textDecoration = 'line-through';
                label.style.color = 'var(--text-light)';
            } else {
                label.style.textDecoration = 'none';
                label.style.color = 'var(--dark-gray)';
            }
        });
    });

});
