<template>
    <div class="vocab-test-container">
      <div class="score-display">
        <h2>Score: {{ score }} out of {{ this.words.length }}</h2>
      </div>
      
      <!-- Language Selection -->
      <div class="language-selection" v-if="!testStarted">
        <h3>Select Languages for Test</h3>
        <div class="language-grid ui two column grid">
          <div class="language-column column">
            <label>From Language:</label>
            <select v-model="fromLanguage" class="language-dropdown ui dropdown fluid">
              <option value="german">🇩🇪 German</option>
              <option value="english">🇬🇧 English</option>
              <option value="spanish">🇪🇸 Spanish</option>
            </select>
          </div>
          <div class="language-column column">
            <label>To Language:</label>
            <select v-model="toLanguage" class="language-dropdown ui dropdown fluid">
              <option value="english">🇬🇧 English</option>
              <option value="german">🇩🇪 German</option>
              <option value="spanish">🇪🇸 Spanish</option>
            </select>
          </div>
        </div>
        <button class="start-button positive ui button" @click="startTest" :disabled="fromLanguage === toLanguage">
          Start Test
        </button>
        <p v-if="fromLanguage === toLanguage" class="error-message">
          Please select different languages for the test.
        </p>
      </div>

      <!-- Test Interface -->
      <div class="test-interface" v-if="testStarted">
        <form action="#" @submit.prevent="onSubmit">
          <div class="input-group">
            <div class="ui labeled input fluid">
              <div class="input-label">
                <i :class="getFlagClass(fromLanguage) + ' flag-icon'"></i> {{ getLanguageName(fromLanguage) }}
              </div>
              <input type="text" class="input-field" readonly :disabled="testOver" :value="currWord[fromLanguage]"/>
            </div>
          </div>
          <div class="input-group">
            <div class="ui labeled input fluid">
              <div class="input-label">
                <i :class="getFlagClass(toLanguage) + ' flag-icon'"></i> {{ getLanguageName(toLanguage) }}
              </div>
              <input type="text" class="input-field" placeholder="Enter word..." v-model="userAnswer" :disabled="testOver" autocomplete="off" />
            </div>
          </div>
    
          <button class="submit-button positive ui button" :disabled="testOver">Submit</button>
        </form>
    
        <p :class="['results', resultClass]">
          <span v-html="result"></span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vocab-test',
    props: {
      words: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        fromLanguage: 'german',
        toLanguage: 'english',
        testStarted: false,
        randWords: [],
        incorrectGuesses: [],
        result: '',
        resultClass: '',
        userAnswer: '',
        score: 0,
        testOver: false
      };
    },
    computed: {
      currWord: function() {
        return this.randWords.length ? this.randWords[0] : '';
      }
    },
    methods: {
      /*
       * Language selection and test management methods
       */
      startTest() {
        if (this.fromLanguage === this.toLanguage) {
          return;
        }
        this.testStarted = true;
        this.randWords = [...this.words.sort(() => 0.5 - Math.random())];
        this.score = 0;
        this.incorrectGuesses = [];
        this.testOver = false;
        this.result = '';
        this.resultClass = '';
      },
      
      getLanguageName(language) {
        const names = {
          'german': 'German',
          'english': 'English', 
          'spanish': 'Spanish'
        };
        return names[language] || language;
      },
      
      getFlagClass(language) {
        const flags = {
          'german': 'germany flag',
          'english': 'united kingdom flag',
          'spanish': 'spain flag'
        };
        return flags[language] || 'flag';
      },
      
      /*
       * Test submission and scoring methods
       */
      onSubmit: function() {
        if (this.userAnswer.toLowerCase().trim() === this.currWord[this.toLanguage].toLowerCase().trim()) {
          this.flash('Correct!', 'success', { timeout: 1000 });
          this.score += 1;
        } else {
          this.flash('Wrong!', 'error', { timeout: 1000 });
          this.incorrectGuesses.push(this.currWord[this.fromLanguage]);
        }
  
        this.userAnswer = '';
        this.randWords.shift();
  
        if (this.randWords.length === 0) {
          this.testOver = true;
          this.displayResults();
        }
      },
      
      /*
       * Results display methods
       */
      displayResults: function() {
        if (this.incorrectGuesses.length === 0) {
          this.result = 'You got everything correct. Well done!';
          this.resultClass = 'success';
        } else {
          const incorrect = this.incorrectGuesses.join(', ');
          this.result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
          this.resultClass = 'error';
        }
      }
    }
  };
  </script>
  
  <style scoped>
/* Main container styling */
.vocab-test-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Score display styling */
.score-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  font-size: 1.2em;
  font-weight: 600;
}

/* Language selection styling */
.language-selection {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  margin-bottom: 30px;
  border: 1px solid #e8e8e8;
}

.language-selection h3 {
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
}

.language-grid {
  margin-bottom: 25px;
}

.language-column {
  padding: 0 15px;
}

.language-column label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #34495e;
  font-size: 0.95em;
}

.language-dropdown {
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  padding: 12px 15px;
  font-size: 1em;
  transition: all 0.3s ease;
  background: #fafbfc;
}

.language-dropdown:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  outline: none;
}

.language-dropdown:hover {
  border-color: #667eea;
  background: white;
}

/* Button styling */
.start-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  width: 100%;
  margin-top: 10px;
}

.start-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.start-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  box-shadow: none;
}

/* Test interface styling */
.test-interface {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid #e8e8e8;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 15px;
  border-radius: 10px 0 0 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-field {
  border: 2px solid #e1e8ed;
  border-radius: 0 10px 10px 0;
  padding: 12px 15px;
  font-size: 1em;
  transition: all 0.3s ease;
  background: #fafbfc;
  width: 100%;
}

.input-field:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  outline: none;
  background: white;
}

.input-field:disabled {
  background: #f8f9fa;
  color: #6c757d;
}

.submit-button {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  width: 100%;
  margin-top: 10px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
}

.submit-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  box-shadow: none;
}

/* Results styling */
.results {
  margin: 25px auto;
  padding: 20px;
  border-radius: 15px;
  font-size: 1.1em;
  line-height: 1.6;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.error {
  border: 2px solid #e74c3c;
  color: #c0392b;
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.1);
}

.success {
  border: 2px solid #27ae60;
  color: #1e8449;
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.1);
}

.error-message {
  color: #e74c3c;
  margin-top: 15px;
  padding: 10px;
  background: #fdf2f2;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  font-size: 0.95em;
}

/* Responsive design */
@media (max-width: 768px) {
  .language-grid {
    grid-template-columns: 1fr;
  }
  
  .language-column {
    padding: 0;
    margin-bottom: 15px;
  }
  
  .language-selection,
  .test-interface {
    padding: 20px;
  }
  
  .score-display {
    padding: 15px;
    font-size: 1em;
  }
}

/* Flag icon styling */
.flag-icon {
  font-size: 1.2em;
  margin-right: 8px;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Focus states for accessibility */
button:focus,
select:focus,
input:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
</style>