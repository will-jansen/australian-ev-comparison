// Australian EV Comparison Tool - JavaScript Functionality

/**
 * Count highlighted cells for each brand
 * @returns {Object} Counts object with brand statistics
 */
function countHighlights() {
    const brands = ['tesla', 'byd', 'polestar', 'kia'];
    const counts = {};
    
    brands.forEach(brand => {
        const bestValueCells = document.querySelectorAll(`.${brand}-col.best-value`).length;
        const highestValueCells = document.querySelectorAll(`.${brand}-col.highest-value`).length;
        counts[brand] = {
            bestValue: bestValueCells,
            highest: highestValueCells,
            total: bestValueCells + highestValueCells
        };
    });
    
    return counts;
}

/**
 * Create and populate summary cards with brand statistics
 */
function createSummaryCards() {
    const counts = countHighlights();
    const summaryGrid = document.getElementById('summary-grid');
    
    // Clear existing content
    summaryGrid.innerHTML = '';
    
    const brandInfo = {
        tesla: { name: 'Tesla Model Y RWD', color: '#ef4444', logo: 'TESLA' },
        byd: { name: 'BYD Sealion 7 Premium', color: '#22c55e', logo: 'BYD' },
        polestar: { name: 'Polestar 2 Long Range', color: '#3b82f6', logo: 'Polestar' },
        kia: { name: 'Kia EV5 Air Long Range', color: '#f59e0b', logo: 'KIA' }
    };
    
    // Find the overall winner
    let winner = Object.keys(counts).reduce((a, b) => 
        counts[a].total > counts[b].total ? a : b
    );
    
    Object.keys(brandInfo).forEach(brand => {
        const card = document.createElement('div');
        card.className = `summary-card ${brand}-card`;
        
        const isWinner = brand === winner;
        const trophy = isWinner ? ' (Overall Leader)' : '';
        
        card.innerHTML = `
            <h3>
                <div class="brand-logo ${brand}-logo" style="width: 40px; height: 40px; font-size: 14px;">
                    ${brandInfo[brand].logo}
                </div>
                ${brandInfo[brand].name}${trophy}
            </h3>
            <div class="count" style="color: ${brandInfo[brand].color}">
                ${counts[brand].total}
            </div>
            <div class="description">
                Best Value: ${counts[brand].bestValue} categories<br>
                Highest Spec: ${counts[brand].highest} categories
                ${isWinner ? '<br><strong>Overall Leader</strong>' : ''}
            </div>
        `;
        
        summaryGrid.appendChild(card);
    });
}

/**
 * Generate and download CSV report with comparison data and summary
 */
function downloadCSV() {
    const table = document.getElementById('comparison-table');
    let csv = [];
    
    // Add header information
    csv.push('Australian EV Comparison Report');
    csv.push('Generated on: ' + new Date().toLocaleDateString('en-AU'));
    csv.push('');
    
    // Get all table rows
    const rows = table.querySelectorAll('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cols = row.querySelectorAll('td, th');
        let csvRow = [];
        
        for (let j = 0; j < cols.length; j++) {
            let cellData = cols[j].innerText || cols[j].textContent;
            
            // Clean up the data - remove emojis and extra whitespace
            cellData = cellData.replace(/[\ud83c\udfc6\ud83d\udc51\ud83d\udcca\ud83d\udda8\ufe0f\ud83d\udcb0\u26a1\ud83d\udd0b\ud83d\udccf\ud83d\udcf1\ud83d\udede\ud83d\udee1\ufe0f\ud83d\udecb\ufe0f\ud83d\udd27]/g, '').trim();
            cellData = cellData.replace(/\s+/g, ' '); // Replace multiple spaces with single space
            
            // Escape quotes
            cellData = cellData.replace(/"/g, '""');
            
            // Add quotes if cell contains comma, newline or quote
            if (cellData.includes(',') || cellData.includes('\n') || cellData.includes('"')) {
                cellData = '"' + cellData + '"';
            }
            
            csvRow.push(cellData);
        }
        csv.push(csvRow.join(','));
    }
    
    // Add summary analysis
    csv.push('');
    csv.push('SUMMARY ANALYSIS');
    csv.push('Vehicle,Best Value Categories,Highest Spec Categories,Total Leading Categories');
    
    const counts = countHighlights();
    const brandNames = {
        tesla: 'Tesla Model Y RWD',
        byd: 'BYD Sealion 7 Premium', 
        polestar: 'Polestar 2 Long Range',
        kia: 'Kia EV5 Air Long Range'
    };
    
    Object.keys(counts).forEach(brand => {
        csv.push(`${brandNames[brand]},${counts[brand].bestValue},${counts[brand].highest},${counts[brand].total}`);
    });
    
    // Add metadata
    csv.push('');
    csv.push('Report Details');
    csv.push('Data Source,Australian manufacturer specifications and pricing');
    csv.push('Currency,Australian Dollars (AUD)');
    csv.push('Pricing Note,Ex on-road costs unless specified as drive-away');
    csv.push('Last Updated,June 2025');
    
    // Create and download file
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Australian_EV_Professional_Comparison_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Initialize the application when DOM is loaded
 */
function initializeApp() {
    console.log('Australian EV Comparison Tool initialized');
    createSummaryCards();
    
    // Add any additional initialization here
    // e.g., analytics, user preferences, etc.
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);

// Make functions available globally for onclick handlers
window.downloadCSV = downloadCSV;
window.createSummaryCards = createSummaryCards;
