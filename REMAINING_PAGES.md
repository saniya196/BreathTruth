# Gap Analysis & Timeline Pages - Complete Code

## GAP.HTML 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BreathTruth - The Gap Analysis</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.html"><i class="bi bi-wind"></i> BreathTruth</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><i class="bi bi-list"></i></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="report.html">Report</a></li>
          <li class="nav-item"><a class="nav-link" href="reports.html">Live Reports</a></li>
          <li class="nav-item"><a class="nav-link active" href="gap.html">Gap Analysis</a></li>
          <li class="nav-item"><a class="nav-link" href="timeline.html">Trends</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container text-center">
      <h1>The Gap Between Official & Community Data</h1>
      <p class="hero-subtitle">Why existing air quality monitoring falls short – and how citizens fill the void</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="section-title">
        <h2>Official Monitors vs Community Reports</h2>
        <p>A side-by-side comparison that reveals the critical gaps in current monitoring</p>
      </div>

      <div class="row g-5 mb-8">
        <div class="col-lg-6">
          <div style="background: linear-gradient(135deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01)); padding: var(--space-8); border-radius: var(--radius-lg); border-left: 3px solid var(--gray-300);">
            <h4 class="mb-4"><i class="bi bi-cloud-drizzle" style="color: var(--gray-500); margin-right: 0.5rem;"></i> Official Air Quality Monitors</h4>
            <ul class="list-unstyled">
              <li class="mb-3"><span style="color: var(--gray-500);">●</span> <strong>Limited quantity:</strong> 5-15 monitors per major city</li>
              <li class="mb-3"><span style="color: var(--gray-500);">●</span> <strong>Fixed locations:</strong> Typically in central, "representative" areas</li>
              <li class="mb-3"><span style="color: var(--gray-500);">●</span> <strong>Delayed updates:</strong> Data published hours after measurement</li>
              <li class="mb-3"><span style="color: var(--gray-500);">●</span> <strong>One metric:</strong> AQI score, PM2.5 levels, lacks context</li>
              <li class="mb-3"><span style="color: var(--gray-500);">●</span> <strong>No human data:</strong> Instruments don't capture health symptoms</li>
              <li><span style="color: var(--gray-500);">●</span> <strong>No neighborhood hotspots:</strong> Industrial areas, highways missed</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div style="background: linear-gradient(135deg, rgba(15, 118, 110, 0.05), rgba(20, 184, 166, 0.05)); padding: var(--space-8); border-radius: var(--radius-lg); border-left: 3px solid var(--primary);">
            <h4 class="mb-4"><i class="bi bi-people" style="color: var(--primary); margin-right: 0.5rem;"></i> BreathTruth Community Reports</h4>
            <ul class="list-unstyled">
              <li class="mb-3"><span style="color: var(--primary);">●</span> <strong>Massive coverage:</strong> Thousands of observers across city</li>
              <li class="mb-3"><span style="color: var(--primary);">●</span> <strong>Dense network:</strong> Neighborhoods, hotspots, unexpected locations</li>
              <li class="mb-3"><span style="color: var(--primary);">●</span> <strong>Real-time updates:</strong> Data submitted as events happen</li>
              <li class="mb-3"><span style="color: var(--primary);">●</span> <strong>Rich context:</strong> Symptoms, observations, behavioral impacts</li>
              <li class="mb-3"><span style="color: var(--primary);">●</span> <strong>Human truth:</strong> What people are experiencing matters</li>
              <li><span style="color: var(--primary);">●</span> <strong>Localized insights:</strong> Captures industrial, traffic, seasonal hotspots</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(220, 38, 38, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-exclamation-lg text-danger"></i>
                </div>
                <div>
                  <h5>The Coverage Gap</h5>
                  <p class="mb-0 text-muted">Official monitors leave entire neighborhoods blind. Industrial areas, residential zones, marginal communities often have zero coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(15, 118, 110, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-check-lg text-primary"></i>
                </div>
                <div>
                  <h5>BreathTruth's Response</h5>
                  <p class="mb-0 text-muted">Citizens in every neighborhood become observers. Factory, highway, and pollution-prone areas get the attention they deserve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(220, 38, 38, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-hourglass-split text-danger"></i>
                </div>
                <div>
                  <h5>The Time Lag Problem</h5>
                  <p class="mb-0 text-muted">By the time official alerts are published, families have already been exposed. Hours-old data can't warn about emerging pollution events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(15, 118, 110, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-lightning-fill text-primary"></i>
                </div>
                <div>
                  <h5>Real-Time Reporting</h5>
                  <p class="mb-0 text-muted">Citizens report instantly. A factory spike, traffic jam pollution, or fire smoke is documented within minutes, not hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(220, 38, 38, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-graph-up text-danger"></i>
                </div>
                <div>
                  <h5>Numbers Without Context</h5>
                  <p class="mb-0 text-muted">AQI: 250. What does it mean? Instruments measure particles but miss the lived experience – throat irritation, coughing, eye burning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex align-items-start mb-3">
                <div style="min-width: 40px; height: 40px; background: rgba(15, 118, 110, 0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                  <i class="bi bi-heart-pulse text-primary"></i>
                </div>
                <div>
                  <h5>Human-Centered Data</h5>
                  <p class="mb-0 text-muted">BreathTruth captures symptoms, behaviors, and human impact alongside environmental data. The reality of what people experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light">
    <div class="container text-center">
      <h2 class="mb-4">Filling the Gap Requires You</h2>
      <p class="text-muted mb-6" style="max-width: 700px; margin-left: auto; margin-right: auto;">Governments and industries have been slow to act. But when thousands of citizens report what they're experiencing, ignoring the data becomes impossible.</p>
      <a href="report.html" class="btn btn-lg btn-primary"><i class="bi bi-lightning-fill"></i> Start Reporting Now</a>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section"><h4>BreathTruth</h4><p style="color: var(--gray-300); font-size: 0.875rem;">Citizen-powered monitoring.</p></div>
        <div class="footer-section"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="report.html">Report</a></li><li><a href="reports.html">Live Reports</a></li></ul></div>
        <div class="footer-section"><h4>Resources</h4><ul><li><a href="about.html">About</a></li><li><a href="timeline.html">Trends</a></li></ul></div>
      </div>
      <div class="footer-bottom"><p>&copy; 2025 BreathTruth. Empowering citizens.</p></div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## TIMELINE.HTML - Copy and Replace

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BreathTruth - Trends & Analytics</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.html"><i class="bi bi-wind"></i> BreathTruth</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><i class="bi bi-list"></i></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="report.html">Report</a></li>
          <li class="nav-item"><a class="nav-link" href="reports.html">Live Reports</a></li>
          <li class="nav-item"><a class="nav-link" href="gap.html">Gap Analysis</a></li>
          <li class="nav-item"><a class="nav-link active" href="timeline.html">Trends</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container text-center">
      <h1>Trends & Analytics</h1>
      <p class="hero-subtitle">Visualizing patterns, hotspots, and insights from community reports</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="section-title">
        <h2>Reports Over Time</h2>
        <p>Monitor reporting activity patterns and peak pollution periods</p>
      </div>

      <div class="card border-0 shadow-md mb-8">
        <div class="card-body p-8">
          <canvas id="reportsChart" style="max-height: 300px;"></canvas>
        </div>
      </div>

      <div class="row g-4 mb-8">
        <div class="col-md-4">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <h6 class="text-muted mb-1">Reports This Week</h6>
              <h3 class="mb-0" id="weekData">0</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <h6 class="text-muted mb-1">Average Per Day</h6>
              <h3 class="mb-0" id="avgData">0</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <h6 class="text-muted mb-1">Peak Reporting Hour</h6>
              <h3 class="mb-0" id="peakData">-</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light">
    <div class="container">
      <div class="section-title">
        <h2>Severity Distribution</h2>
        <p>Breakdown of reported air quality severity levels</p>
      </div>

      <div class="row g-5 align-items-center">
        <div class="col-lg-5">
          <div class="card border-0 shadow-md">
            <div class="card-body p-8">
              <canvas id="severityChart" style="max-height: 300px;"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card border-0 bg-white">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div style="width: 12px; height: 12px; background: var(--red-600); border-radius: 50%; margin-right: 0.5rem;"></div>
                    <span class="small fw-600">Severe</span>
                  </div>
                  <h5 id="severeCount">0</h5>
                  <p class="small text-muted mb-0">Serious air quality issues requiring immediate attention</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 bg-white">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div style="width: 12px; height: 12px; background: var(--orange-500); border-radius: 50%; margin-right: 0.5rem;"></div>
                    <span class="small fw-600">Moderate</span>
                  </div>
                  <h5 id="moderateCount">0</h5>
                  <p class="small text-muted mb-0">Noticeable air quality degradation</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 bg-white">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div style="width: 12px; height: 12px; background: var(--yellow-500); border-radius: 50%; margin-right: 0.5rem;"></div>
                    <span class="small fw-600">Mild</span>
                  </div>
                  <h5 id="mildCount">0</h5>
                  <p class="small text-muted mb-0">Light air quality concerns</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 bg-white">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div style="width: 12px; height: 12px; background: var(--green-500); border-radius: 50%; margin-right: 0.5rem;"></div>
                    <span class="small fw-600">Clean</span>
                  </div>
                  <h5 id="cleanCount">0</h5>
                  <p class="small text-muted mb-0">Good air quality reported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-title">
        <h2>Key Insights</h2>
        <p>Understanding patterns from community reports</p>
      </div>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="card border-0 h-100">
            <div class="card-body">
              <div class="mb-3" style="font-size: 2rem; color: var(--primary);"><i class="bi bi-calendar-event"></i></div>
              <h5>Weekday Peaks</h5>
              <p class="text-muted mb-0">Air quality issues tend to spike on weekdays (Monday-Friday) due to increased industrial and vehicular activity.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 h-100">
            <div class="card-body">
              <div class="mb-3" style="font-size: 2rem; color: var(--secondary);"><i class="bi bi-sunset"></i></div>
              <h5>Evening Hotspot</h5>
              <p class="text-muted mb-0">6-9 PM sees highest reporting activity, coinciding with rush hour and evening temperature inversions.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 h-100">
            <div class="card-body">
              <div class="mb-3" style="font-size: 2rem; color: var(--danger);"><i class="bi bi-exclamation-triangle"></i></div>
              <h5>Severe Reports Clustering</h5>
              <p class="text-muted mb-0">Severe incidents concentrate around industrial zones and major traffic corridors, revealing critical monitoring gaps.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 h-100">
            <div class="card-body">
              <div class="mb-3" style="font-size: 2rem; color: var(--warning);"><i class="bi bi-snow"></i></div>
              <h5>Seasonal Variations</h5>
              <p class="text-muted mb-0">Winter months show increased severity due to temperature inversions trapping pollutants near ground level.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light text-center py-5">
    <div class="container">
      <h2 class="mb-4">Your Data Drives These Insights</h2>
      <p class="text-muted mb-6" style="max-width: 600px; margin-left: auto; margin-right: auto;">Every report you submit strengthens the community's understanding of air quality. Together, we're building a transparent, data-driven movement.</p>
      <a href="reports.html" class="btn btn-outline-primary me-3"><i class="bi bi-graph-up"></i> View All Reports</a>
      <a href="report.html" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add Your Report</a>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section"><h4>BreathTruth</h4><p style="color: var(--gray-300); font-size: 0.875rem;">Citizen-powered monitoring.</p></div>
        <div class="footer-section"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="report.html">Report</a></li><li><a href="reports.html">Live Reports</a></li></ul></div>
        <div class="footer-section"><h4>Resources</h4><ul><li><a href="about.html">About</a></li><li><a href="gap.html">Gap Analysis</a></li></ul></div>
      </div>
      <div class="footer-bottom"><p>&copy; 2025 BreathTruth. Empowering citizens.</p></div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    let reportsChart = null;
    let severityChart = null;

    document.addEventListener('DOMContentLoaded', function() {
      updateAnalytics();
    });

    function updateAnalytics() {
      const reports = JSON.parse(localStorage.getItem('breathtruthReports') || '[]');
      
      // Severity counts
      const severe = reports.filter(r => r.severity === 'Severe').length;
      const moderate = reports.filter(r => r.severity === 'Moderate').length;
      const mild = reports.filter(r => r.severity === 'Mild').length;
      const clean = reports.filter(r => r.severity === 'Clean' || !['Severe', 'Moderate', 'Mild'].includes(r.severity)).length;

      document.getElementById('severeCount').textContent = severe;
      document.getElementById('moderateCount').textContent = moderate;
      document.getElementById('mildCount').textContent = mild;
      document.getElementById('cleanCount').textContent = clean;

      // Weekly stats
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const weekReports = reports.filter(r => new Date(r.reportedAt) > weekAgo).length;
      document.getElementById('weekData').textContent = weekReports;
      document.getElementById('avgData').textContent = Math.round(weekReports / 7);

      // Peak hour
      const hours = {};
      reports.forEach(r => {
        const hour = new Date(r.reportedAt).getHours();
        hours[hour] = (hours[hour] || 0) + 1;
      });
      const peakHour = Object.entries(hours).sort((a, b) => b[1] - a[1])[0];
      document.getElementById('peakData').textContent = peakHour ? peakHour[0] + ':00' : '-';

      // Charts
      initReportsChart(reports);
      initSeverityChart(severe, moderate, mild, clean);
    }

    function initReportsChart(reports) {
      const last7Days = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        last7Days.push(d.toLocaleDateString('en-US', { weekday: 'short' }));
      }

      const counts = last7Days.map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return reports.filter(r => new Date(r.reportedAt).toDateString() === d.toDateString()).length;
      });

      const ctx = document.getElementById('reportsChart').getContext('2d');
      if (reportsChart) reportsChart.destroy();
      reportsChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: last7Days,
          datasets: [{
            label: 'Reports',
            data: counts,
            backgroundColor: 'var(--primary)',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 24
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true, border: { display: false }, grid: { color: 'var(--gray-200)' }, ticks: { color: 'var(--gray-600)' } }, x: { grid: { display: false }, ticks: { color: 'var(--gray-600)' } } }
        }
      });
    }

    function initSeverityChart(severe, moderate, mild, clean) {
      const ctx = document.getElementById('severityChart').getContext('2d');
      if (severityChart) severityChart.destroy();
      severityChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Severe', 'Moderate', 'Mild', 'Clean'],
          datasets: [{
            data: [severe, moderate, mild, clean],
            backgroundColor: ['var(--red-600)', 'var(--orange-500)', 'var(--yellow-500)', 'var(--green-500)'],
            borderColor: 'white',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { position: 'bottom', labels: { color: 'var(--gray-700)', padding: 20, font: { size: 14 } } } }
        }
      });
    }
  </script>
</body>
</html>
```
