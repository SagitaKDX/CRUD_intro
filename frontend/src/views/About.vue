<template>
  <div class="about-container">
    <div class="ui segment about-card">
      <div class="about-header">
        <h1 class="ui header">
          <i class="info circle icon"></i>
          <div class="content">
            About Vocabulary Learning App
            <div class="sub header">Learn languages with ease</div>
          </div>
        </h1>
      </div>

      <div class="about-content">
        <div class="ui two column stackable grid">
          <div class="column">
            <div class="feature-section">
              <h3 class="ui header">
                <i class="book icon"></i>
                <div class="content">
                  Features
                  <div class="sub header">What this app offers</div>
                </div>
              </h3>
              <div class="ui list">
                <div class="item">
                  <i class="check circle icon"></i>
                  <div class="content">Multi-language vocabulary management</div>
                </div>
                <div class="item">
                  <i class="check circle icon"></i>
                  <div class="content">Interactive language testing</div>
                </div>
                <div class="item">
                  <i class="check circle icon"></i>
                  <div class="content">Support for German, English, and Spanish</div>
                </div>
                <div class="item">
                  <i class="check circle icon"></i>
                  <div class="content">Modern and responsive design</div>
                </div>
                <div class="item">
                  <i class="check circle icon"></i>
                  <div class="content">Real-time scoring and feedback</div>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="tech-section">
              <h3 class="ui header">
                <i class="code icon"></i>
                <div class="content">
                  Technology Stack
                  <div class="sub header">Built with modern technologies</div>
                </div>
              </h3>
              <div class="ui list">
                <div class="item">
                  <i class="vuejs icon"></i>
                  <div class="content">Vue.js - Progressive JavaScript Framework</div>
                </div>
                <div class="item">
                  <i class="server icon"></i>
                  <div class="content">Node.js & Express.js - Backend API</div>
                </div>
                <div class="item">
                  <i class="database icon"></i>
                  <div class="content">MongoDB - NoSQL Database</div>
                </div>
                <div class="item">
                  <i class="css3 icon"></i>
                  <div class="content">Semantic UI - CSS Framework</div>
                </div>
                <div class="item">
                  <i class="cloud icon"></i>
                  <div class="content">DigitalOcean - Cloud Hosting</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="credits-section">
          <h3 class="ui header">
            <i class="user circle icon"></i>
            <div class="content">
              Developer Credits
              <div class="sub header">Meet the creator</div>
            </div>
          </h3>
          
          <div class="ui card developer-card">
            <div class="content">
              <div class="header">
                <i class="github icon"></i>
                LeThanhMinh
              </div>
              <div class="meta">
                <span class="date">Full Stack Developer</span>
              </div>
              <div class="description">
                <p>This vocabulary learning application was developed by LeThanhMinh as a comprehensive web development project. The app demonstrates modern web development practices including frontend and backend integration, database management, and responsive design.</p>
                
                <div class="github-link">
                  <a href="https://github.com/SagitaKDX" target="_blank" class="ui blue button">
                    <i class="github icon"></i>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="extra content">
              <div class="ui two buttons">
                <a href="https://github.com/SagitaKDX" target="_blank" class="ui basic blue button">
                  <i class="github icon"></i>
                  GitHub Profile
                </a>
                <a href="https://github.com/SagitaKDX/vocabulary-app" target="_blank" class="ui basic green button">
                  <i class="code icon"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="version-section">
          <div class="ui info message">
            <div class="header">
              <i class="info circle icon"></i>
              Version Information
            </div>
            <p>This application is part of a web development learning project, showcasing full-stack development skills with Vue.js, Node.js, and MongoDB.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      // Component data if needed
    };
  }
};
</script>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.about-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid #e8e8e8;
  padding: 30px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
}

.about-header h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.about-header .sub.header {
  color: #7f8c8d;
  font-size: 1.2em;
}

.about-content {
  margin-top: 30px;
}

.feature-section,
.tech-section {
  margin-bottom: 30px;
}

.feature-section h3,
.tech-section h3 {
  color: #34495e;
  margin-bottom: 20px;
}

.ui.list .item {
  padding: 8px 0;
  color: #555;
}

.ui.list .item i {
  color: #27ae60;
}

.credits-section {
  margin-top: 40px;
  text-align: center;
}

.credits-section h3 {
  color: #34495e;
  margin-bottom: 30px;
}

.developer-card {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: none;
}

.developer-card .header {
  font-size: 1.5em;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.developer-card .meta {
  color: #7f8c8d;
  margin-bottom: 15px;
}

.developer-card .description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.github-link {
  margin-top: 20px;
}

.github-link .ui.button {
  margin-top: 10px;
}

.version-section {
  margin-top: 40px;
}

.ui.info.message {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
  border-radius: 10px;
  color: #1565c0;
}

.ui.info.message .header {
  color: #0d47a1;
  font-weight: 600;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-container {
    padding: 10px;
  }
  
  .about-card {
    padding: 20px;
  }
  
  .about-header h1 {
    font-size: 2em;
  }
  
  .ui.two.column.grid {
    grid-template-columns: 1fr;
  }
}

/* Animation for cards */
.developer-card {
  transition: all 0.3s ease;
}

.developer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
}

/* Icon styling */
.ui.header i {
  color: #667eea;
}

.ui.list .item i.check.circle {
  color: #27ae60;
}

.ui.list .item i.vuejs {
  color: #42b883;
}

.ui.list .item i.server {
  color: #68a063;
}

.ui.list .item i.database {
  color: #4db33d;
}

.ui.list .item i.css3 {
  color: #264de4;
}

.ui.list .item i.cloud {
  color: #0080ff;
}
</style> 