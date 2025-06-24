// Modern EV Comparison Website JavaScript

// Comparison data structure
const comparisonData = [
    // Pricing & Value
    {
        category: '💰 PRICING & VALUE',
        rows: [
            {
                spec: 'Starting Price (AUD, ex on-roads)',
                tesla: '$58,900',
                byd: '$54,990',
                polestar: '$66,400',
                kia: '$61,170',
                highlights: { byd: 'best-value' }
            },
            {
                spec: 'Drive-Away Price (AUD)',
                tesla: '~$65,000',
                byd: '~$60,000',
                polestar: '~$72,000',
                kia: '$63,990',
                highlights: { byd: 'best-value' }
            },
            {
                spec: 'Vehicle Warranty',
                tesla: '4 years / 80,000km',
                byd: '6 years / 150,000km',
                polestar: '5 years / unlimited km',
                kia: '7 years / unlimited km',
                highlights: { kia: 'best-value' }
            },
            {
                spec: 'Battery Warranty',
                tesla: '8 years / 160,000km',
                byd: '8 years / 160,000km',
                polestar: '8 years / 160,000km',
                kia: '7 years / 150,000km',
                highlights: {}
            }
        ]
    },
    
    // Performance & Range
    {
        category: '⚡ PERFORMANCE & RANGE',
        rows: [
            {
                spec: 'Body Style',
                tesla: 'Mid-size SUV',
                byd: 'Mid-size SUV',
                polestar: 'Electric Liftback',
                kia: 'Mid-size SUV',
                highlights: {}
            },
            {
                spec: 'Drivetrain',
                tesla: 'Single Motor RWD',
                byd: 'Single Motor RWD',
                polestar: 'Single Motor RWD',
                kia: 'Single Motor FWD',
                highlights: {}
            },
            {
                spec: 'Power Output',
                tesla: '220kW',
                byd: '230kW',
                polestar: '200kW',
                kia: '160kW',
                highlights: { byd: 'highest-value' }
            },
            {
                spec: 'Torque',
                tesla: '450Nm',
                byd: '380Nm',
                polestar: '490Nm',
                kia: '310Nm',
                highlights: { polestar: 'highest-value' }
            },
            {
                spec: '0-100km/h Acceleration',
                tesla: '5.9 seconds',
                byd: '6.7 seconds',
                polestar: '6.4 seconds',
                kia: '~8.9 seconds',
                highlights: { tesla: 'best-value' }
            },
            {
                spec: 'Top Speed',
                tesla: '217km/h',
                byd: '175km/h',
                polestar: '205km/h',
                kia: '185km/h',
                highlights: { tesla: 'highest-value' }
            }
        ]
    },
    
    // Battery & Charging
    {
        category: '🔋 BATTERY & CHARGING',
        rows: [
            {
                spec: 'Battery Capacity',
                tesla: '62.5kWh (LFP)',
                byd: '82.56kWh (LFP)',
                polestar: '82kWh (NMC)',
                kia: '88.1kWh (LFP)',
                highlights: { kia: 'highest-value' }
            },
            {
                spec: 'WLTP Range',
                tesla: '466km',
                byd: '482km',
                polestar: '659km',
                kia: '555km',
                highlights: { polestar: 'highest-value' }
            },
            {
                spec: 'DC Fast Charging (max)',
                tesla: '175kW',
                byd: '150kW',
                polestar: '135kW',
                kia: '~150kW',
                highlights: { tesla: 'highest-value' }
            },
            {
                spec: '10-80% DC Charge Time',
                tesla: '~25 minutes',
                byd: '32 minutes',
                polestar: '~30 minutes',
                kia: '38 minutes',
                highlights: { tesla: 'best-value' }
            }
        ]
    },
    
    // Dimensions & Practicality
    {
        category: '📏 DIMENSIONS & PRACTICALITY',
        rows: [
            {
                spec: 'Length',
                tesla: '4,751mm',
                byd: '4,830mm',
                polestar: '4,606mm',
                kia: '4,615mm',
                highlights: { byd: 'highest-value' }
            },
            {
                spec: 'Width',
                tesla: '2,129mm (incl. mirrors)',
                byd: '1,925mm',
                polestar: '1,985mm',
                kia: '1,875mm',
                highlights: { tesla: 'highest-value' }
            },
            {
                spec: 'Height',
                tesla: '1,624mm',
                byd: '1,620mm',
                polestar: '1,473mm',
                kia: '1,715mm',
                highlights: { kia: 'highest-value' }
            },
            {
                spec: 'Wheelbase',
                tesla: '2,890mm',
                byd: '2,930mm',
                polestar: '2,735mm',
                kia: '2,750mm',
                highlights: { byd: 'highest-value' }
            },
            {
                spec: 'Boot Space (seats up)',
                tesla: '938L',
                byd: '520L',
                polestar: '405L',
                kia: '513L',
                highlights: { tesla: 'highest-value' }
            },
            {
                spec: 'Boot Space (seats down)',
                tesla: '2,158L',
                byd: '1,789L',
                polestar: '1,095L',
                kia: '1,714L',
                highlights: { tesla: 'highest-value' }
            },
            {
                spec: 'Frunk Storage',
                tesla: '117L',
                byd: '58L',
                polestar: '41L',
                kia: '67L',
                highlights: { tesla: 'highest-value' }
            },
            {
                spec: 'Towing Capacity (braked)',
                tesla: '1,600kg',
                byd: '1,500kg',
                polestar: '1,500kg',
                kia: '1,500kg',
                highlights: { tesla: 'highest-value' }
            }
        ]
    },
    
    // Technology & Features
    {
        category: '📱 TECHNOLOGY & FEATURES',
        rows: [
            {
                spec: 'Main Display',
                tesla: '15.4-inch touchscreen',
                byd: '15.6-inch rotating touchscreen',
                polestar: '11.15-inch touchscreen',
                kia: '12.3-inch touchscreen',
                highlights: { byd: 'highest-value' }
            },
            {
                spec: 'Head-Up Display',
                tesla: 'No',
                byd: 'Yes',
                polestar: 'No',
                kia: 'No (GT-Line only)',
                highlights: { byd: 'best-value' }
            },
            {
                spec: 'Vehicle-to-Load (V2L)',
                tesla: 'No',
                byd: 'Yes',
                polestar: 'No',
                kia: 'Yes',
                highlights: { byd: 'best-value', kia: 'best-value' }
            },
            {
                spec: 'Panoramic Sunroof',
                tesla: 'Glass roof (fixed)',
                byd: 'Yes (with electric blind)',
                polestar: 'Glass roof (fixed)',
                kia: 'Glass roof (fixed)',
                highlights: { byd: 'best-value' }
            },
            {
                spec: '360-Degree Camera',
                tesla: 'Yes',
                byd: 'Yes',
                polestar: 'No (optional)',
                kia: 'Yes',
                highlights: { tesla: 'best-value', byd: 'best-value', kia: 'best-value' }
            }
        ]
    }
];

// Brand information
const brandInfo = {
    tesla: { 
        name: 'Tesla Model Y RWD', 
        color: '#dc2626', 
        logo: 'TESLA',
        fullName: 'Tesla Model Y RWD'
    },
    byd: { 
        name: 'BYD Sealion 7 Premium', 
        color: '#059669', 
        logo: 'BYD',
        fullName: 'BYD Sealion 7 Premium'
    },
    polestar: { 
        name: 'Polestar 2 Long Range', 
        color: '#2563eb', 
        logo: '⭐',
        fullName: 'Polestar 2 Long Range'
    },
    kia: { 
        name: 'Kia EV5 Air Long Range', 
        color: '#d97706', 
        logo: 'KIA',
        fullName: 'Kia EV5 Air Long Range'
    }
};

// Utility functions
function createElement(tag, className = '', content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

function addPriceHighlight(cell, value) {
    if (value.includes('$') || value.includes('AUD')) {
        cell.classList.add('price-highlight');
    }
}

// Populate comparison table
function populateComparisonTable() {
    const tbody = document.getElementById('comparison-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    comparisonData.forEach(section => {
        // Add category header
        const categoryRow = createElement('tr');
        const categoryCell = createElement('td', 'category-header', section.category);
        categoryCell.colSpan = 5;
        categoryRow.appendChild(categoryCell);
        tbody.appendChild(categoryRow);
        
        // Add data rows
        section.rows.forEach(rowData => {
            const row = createElement('tr');
            
            // Specification cell
            const specCell = createElement('td', '', rowData.spec);
            row.appendChild(specCell);
            
            // Brand cells
            ['tesla', 'byd', 'polestar', 'kia'].forEach(brand => {
                const cell = createElement('td', `${brand}-col`, rowData[brand]);
                
                // Add price highlighting
                addPriceHighlight(cell, rowData[brand]);
                
                // Add highlight classes
                if (rowData.highlights[brand]) {
                    cell.classList.add(rowData.highlights[brand]);
                }
                
                row.appendChild(cell);
            });
            
            tbody.appendChild(row);
        });
    });
}

// Count highlights for summary
function countHighlights() {
    const brands = ['tesla', 'byd', 'polestar', 'kia'];
    const counts = {};
    
    brands.forEach(brand => {
        let bestValueCount = 0;
        let highestValueCount = 0;
        
        comparisonData.forEach(section => {
            section.rows.forEach(row => {
                if (row.highlights[brand] === 'best-value') {
                    bestValueCount++;
                } else if (row.highlights[brand] === 'highest-value') {
                    highestValueCount++;
                }
            });
        });
        
        counts[brand] = {
            bestValue: bestValueCount,
            highest: highestValueCount,
            total: bestValueCount + highestValueCount
        };
    });
    
    return counts;
}

// Create summary cards
function createSummaryCards() {
    const summaryGrid = document.getElementById('summary-grid');
    if (!summaryGrid) return;
    
    summaryGrid.innerHTML = '';
    const counts = countHighlights();
    
    // Find the overall winner
    let winner = Object.keys(counts).reduce((a, b) => 
        counts[a].total > counts[b].total ? a : b
    );
    
    Object.keys(brandInfo).forEach(brand => {
        const card = createElement('div', `summary-card ${brand}-card`);
        const isWinner = brand === winner;
        const trophy = isWinner ? ' 🏆' : '';
        
        card.innerHTML = `
            <h3>
                <div class="brand-logo ${brand}-logo">
                    ${brandInfo[brand].logo}
                </div>
                ${brandInfo[brand].name}${trophy}
            </h3>
            <div class="count" style="color: ${brandInfo[brand].color}">
                ${counts[brand].total}
            </div>
            <div class="description">
                🏆 Best Value: ${counts[brand].bestValue} categories<br>
                👑 Highest Spec: ${counts[brand].highest} categories
                ${isWinner ? '<br><strong>Overall Category Leader!</strong>' : ''}
            </div>
        `;
        
        summaryGrid.appendChild(card);
    });
}

// Download CSV functionality
function downloadCSV() {
    let csv = [];
    
    // Add header
    csv.push('Specification,Tesla Model Y RWD,BYD Sealion 7 Premium,Polestar 2 Long Range,Kia EV5 Air Long Range');
    
    // Add data
    comparisonData.forEach(section => {
        // Add category header
        csv.push(`"${section.category}",,,,,`);
        
        // Add rows
        section.rows.forEach(row => {
            const cleanSpec = row.spec.replace(/"/g, '""');
            const cleanTesla = row.tesla.replace(/"/g, '""');
            const cleanByd = row.byd.replace(/"/g, '""');
            const cleanPolestar = row.polestar.replace(/"/g, '""');
            const cleanKia = row.kia.replace(/"/g, '""');
            
            csv.push(`"${cleanSpec}","${cleanTesla}","${cleanByd}","${cleanPolestar}","${cleanKia}"`);
        });
        
        // Add empty line between sections
        csv.push('');
    });
    
    // Add summary data
    csv.push('');
    csv.push('SUMMARY ANALYSIS');
    csv.push('Vehicle,Best Value Categories,Highest Spec Categories,Total Leading Categories');
    
    const counts = countHighlights();
    Object.keys(counts).forEach(brand => {
        csv.push(`"${brandInfo[brand].fullName}",${counts[brand].bestValue},${counts[brand].highest},${counts[brand].total}`);
    });
    
    // Create and download file
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'Australian_EV_Professional_Comparison_2025.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const nav = document.querySelector('.navigation');
    if (window.innerWidth <= 768 && nav) {
        // Add mobile menu toggle if needed
        // This can be expanded based on requirements
    }
}

// Animate elements on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe summary cards and other elements
    document.querySelectorAll('.summary-card, .comparison-preview').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Enhanced table interactions
function setupTableInteractions() {
    const table = document.getElementById('comparison-table');
    if (!table) return;
    
    // Add hover effects and click handlers
    const rows = table.querySelectorAll('tbody tr:not(.category-row)');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.zIndex = '10';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = 'auto';
        });
    });
}

// Update preview bars animation
function animatePreviewBars() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }, index * 200);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate the comparison table
    populateComparisonTable();
    
    // Create summary cards
    createSummaryCards();
    
    // Setup interactions
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollAnimations();
    setupTableInteractions();
    
    // Animate preview bars after a short delay
    setTimeout(animatePreviewBars, 500);
});

// Handle window resize
window.addEventListener('resize', function() {
    setupMobileMenu();
});

// Export functions for external use
window.downloadCSV = downloadCSV;
